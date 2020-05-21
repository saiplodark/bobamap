const bcrypt = require('bcrypt')
const {v4} = require('uuid')

module.exports={
    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            let {username,hashed_password,is_admin} = req.body
            let users = await db.auth.select_user(username)
            let user = users[0]
            
            if (user) {
                return res.status(409).send('username exists')
            }
            if (admin) {
                id = v4()
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(hashed_password, salt)

            let response = await db.users.add_user({ username, hashed_password, is_admin})
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
            let {username, hashed_password} = req.body
            let users = await db.users.select_user(username)
            let user = users[0]

            if(!user){
                return res.status(401).send('user infromation wrong')
            }
            let isAuth = bcrypt.compareSync(hashed_password, user.hashed_password)
          
            if(!isAuth){
                return res.status(401).send('user infromation wrong')
            }
            delete user.hashed_password
            req.session.user = user
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