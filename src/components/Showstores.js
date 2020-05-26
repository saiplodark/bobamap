import React, { useState, useEffect } from 'react'
import {connect} from "react-redux"
import axios from 'axios'

function Showstores(props) {
    console.log(props)
    let { store_id, img, name, address } = props.stores
    const [rating, setrating] = useState(props.stores.rating)
    const [comment, setcomment] = useState(props.stores.comment)
    const { logged_in, is_admin } =props.user

  const  avgRating = ()=>{
        axios.get('/api/avgrating')
        .then(({ap})=>{
            console.log(ap)
        })
    }
    useEffect(() => {avgRating()})

    return <div className='showstores'>
        {logged_in ?
            is_admin ?
                <div>
                    <img className="img" src={img} alt="store pics" />
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{props.stores.comment}</p>
                    <p>{props.stores.rating}</p>
                    <input name='rating' placeholder='newrating' onChange={(event) => {
                        setrating(event.target.value)
                    }} />
                    <input name='comment' placeholder='newcomment' onChange={(event) => {
                        setcomment(event.target.value)
                    }} />
                </div>
                :
                <div>
                    <img className="img" src={img} alt="store pics" />
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{props.stores.rating}</p>
                    <p>{props.stores.comment}</p>
                    <input name='rating' placeholder='newrating' onChange={(event) => {
                        setrating(event.target.value)
                    }} />
                </div>
                :
                <div>
                    <img className="img" src={img} alt="store pics" />
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{rating}</p>
                    <p>{comment}</p>
                </div>
        }
    </div>
}
const mapStatetoprops = (reduxstate)=>{
    return{
        user:reduxstate.data
    }
}
export default connect(mapStatetoprops)(Showstores)