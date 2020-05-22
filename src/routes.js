import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Showstores from './components/Showstores'
import About from './components/About'
import Login from './components/Login'
import Support from './components/Support'

export default <Switch>
    <Route exact path ='/' component={Showstores}/>
    <Route  path ='/about' component={About}/>
    <Route  path ='/login' component={Login}/>
    <Route  path ='/support' component={Support}/>
</Switch>