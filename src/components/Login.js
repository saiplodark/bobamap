import React from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login, register} from '../Redux/userReducer'

 class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            registerMode: false,
            is_admin:false,
            redirect: false
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
    }

    toggleRegisterMode(){
        this.setState({
            registerMode: !this.state.registerMode
        })
    }

    changeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    toggle_admin() {
    const { is_admin } = this.state;
    this.setState({ is_admin: !is_admin });
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.login(this.state)
        .then(() => {
            this.props.history.push("/")
        })
        .catch(err => {
            console.log('error login', err)
        })
}
    
handleRegister = e => {
    e.preventDefault()
    this.props.register(this.state)
        .then(() => {
            this.props.history.push("/")
        })
        .catch(err => {
            console.log('error register', err)
        })
}

    render(){

        if(this.state.redirect){
            return <Redirect to="/"/>
        }

        return <div className='auth'>
            {
                (this.state.registerMode)
                ?
                <div className="login">
                    <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={ e => this.changeHandler(e)}/>
                    <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={ e => this.changeHandler(e)}/>
                    <button onClick={this.handleLogin}>Login</button>
                </div>
                :
                <div className="register">
                    <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={ e => this.changeHandler(e)}/>
                    <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={ e => this.changeHandler(e)}/>
                    <input type="checkbox" id="_adminCheckbox" onChange={() => this.toggle_admin()} />
                    <button onClick={this.handleRegister}>Register</button>
                    <button onClick={() => this.toggleRegisterMode()}>Member signin</button>
                </div>
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        login:state.login,
        register:state.register
    };
}

export default connect(mapStateToProps,{login,register})(Login)