
import React from 'react'
import axios from 'axios'
import {Redirect}from 'react-router-dom'
import './Signout.scss'

class Signout extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            email:'',
        }
        this.logout = this.logout.bind(this)
    }

    async logout(){
        const {username, password} = this.state
        const user = await axios.post('/api/logout', {username, password})
        console.log("from logout: ", user.data)
        this.setState({redirect:true})
    }

    
    render(){
            if(this.state.redirect){
                return<Redirect to='/'/>
            }
        
        return<div className="out">
            <button 
            data-testid="signout-button"
            onClick={this.logout} >logout</button>
        </div>
    }

}

export default Signout