require ('dotenv').config()
const 
express = require('express'),
session = require ('express-session'),
massive = require('massive'),
path = require('path'),
{SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
{login, register, logout, userSession} = require('./controllers/authCtrl'),
{getStores, addStores,editStores,deleteStores,editRating} = require('./controllers/storesCtrl'),
app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());
app.use(session({
    secret:SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge:1000*60*60*24*14
    }
}))

massive({
    connectionString:CONNECTION_STRING,
    ssl:{ rejectUnauthorized:false}
}).then(db=>{
    app.set('db', db)
    console.log('db testing connected')
}).catch(err=>console.log('db can not connect'))

//AUTH//
app.post('/api/register', register)
app.post('/api/login', login)
app.post('/api/logout', logout)
app.get('/auth/user_session', userSession)

//Stores-AUTH//
app.get('/api/stores', getStores)
app.post('/api/addstores', addStores)
app.put('/api/editstores/:id', editStores)
app.delete('/api/deletestores/:id', deleteStores)

// Stores-normal-users
app.put('/api/editrating/:id', editRating)


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(SERVER_PORT, ()=>{
    console.log(`Server connect  to port ${SERVER_PORT}`)
})