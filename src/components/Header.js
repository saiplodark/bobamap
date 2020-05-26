import React from 'react'
import {connect} from 'react-redux'
import{userSession} from '../Redux/userReducer'
import Nav from '../Nav'
import routes from '../routes'
import Signout from './Signout'
// import{Link} from 'react-router-dom'


class Header extends React.Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            toggleSideBar:false
        }
    }

    toggleSideBarFunc(){
        this.setState((prevState)=>{
            return{
                toggleSideBar: !prevState.toggleSideBar
            }
        })
    }

    componentDidMount(){
        this.props.userSession()
    }

    render(){
        console.log("HEADER props: ", this.props)

        return <div className='header'>
            {/* <button className='menu' onClick={()=>this.toggleSideBarFunc()}>Menu</button>
                    <nav className={this.state.toggleSideBar? "show":"hide"}>
            <div className="main">
            <Link to ="/" className = 'stores'>Stores</Link>
            <Link to ="/about" className = 'about'>About</Link>
            <Link to ="/login" className = 'login'>Login</Link>
            <Link to ="/support" className = 'support'>Support</Link>
    </div>
                    </nav> */}
            {/* {
                (this.props.loading)
                ?
                <div>Loading...</div>
                :<div>Welcome, {}!</div>
            }
            {
                this.props.user?
                <Signout className='so'/>
                :null
            } */}
                    <Signout/>
                    <Nav/>
                    {routes}
                </div>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {userSession}

export default connect(mapStateToProps,mapDispatchToProps)(Header)