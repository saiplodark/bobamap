const bcrypt = require('bcrypt')

module.exports={
    login: async(req,res)=>{
        const db = req.app.get('db')
        const {username,password} = req.body
        const foundUser = await db.users
    }
}