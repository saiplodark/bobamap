const bcrypt = require('bcrypt')

module.exports={
    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            let {username,password,isAdmin} = req.body
            let users = await db.users.select_user(username)
            let user = users[0]
            
            if (user) {
                return res.status(409).send('username exists')
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            let response = await db.users.add_user([ username, hash, isAdmin])
            let newUser = response[0]
    
            delete newUser.password
            req.session.user = newUser
            res.send(req.session.user)
        } catch (error) {
            console.log('error', error)
            res.status(500).send(error)
        }
    },
   
    login: async(req,res)=>{
        try {
            const db = req.app.get('db')
            let {username, password} = req.body
            let users = await db.users.select_user(username)
            let user = users[0]

            if(!user){
                return res.status(401).send('not user infromation wrong')
            }
            let isAuth = bcrypt.compareSync(password, user.hashed_password)
          
            if(!isAuth){
                return res.status(401).send('user infromation wrong')
            }
            delete user.hashed_password
            req.session.user = user
            req.session.user.logged_in = true
            res.send(req.session.user)
        } catch (error) {
            console.log('error happening' ,error)
            res.status(500).send(error)
        }
    },
   
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
   
    userSession: (req, res) => {
        try {
            res.status(200).send(req.session.user)
        } catch (error) {
            console.log('getting user error', error)
            res.status(500).send('user getting error')
        }
    }
}