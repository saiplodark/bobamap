import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(){
    return<div>
        <nav classNmae = 'nav'>
            <Link to ="/" className = 'stores'>Stores</Link>
            <Link to ="/about" className = 'about'>About</Link>
            <Link to ="/login" className = 'login'>Login</Link>
            <Link to ="/support" className = 'support'>Support</Link>
        </nav>
    </div>
}