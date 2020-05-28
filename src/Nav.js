import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.scss'

export default function Nav(){
    return<div>
        <nav className = 'nav'>
            <Link to ="/" className = 'link about'>About</Link>
            <Link to ="/stores" className = ' link stores'>Stores</Link>
            <Link to ="/login" className = 'link login'>Login</Link>
            <Link to ="/support" className = 'link support'>Support</Link>
        </nav>
    </div>
}