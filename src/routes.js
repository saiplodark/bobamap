import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Stores from './components/Stores'
import About from './components/About'
import Login from './components/Login'
import Support from './components/Support'

export default <Switch>
    <Route exact  path ='/' component={About}/>
    <Route path ='/stores' component={Stores}/>
    <Route  path ='/login' component={Login}/>
    <Route  path ='/support' component={Support}/>
</Switch>