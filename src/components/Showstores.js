import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import axios from 'axios'
import './Showstores.scss'

function Showstores(props) {
    console.log(props)
    let { store_id, img, name, address } = props.stores
    const [rating, setrating] = useState(props.stores.rating)
    const [comment, setcomment] = useState(props.stores.comment)
    const { logged_in, is_admin } = props.user
    // console.log(logged_in)
    // console.log(is_admin)
    console.log(props)

    const avgRating = () => {
        axios.get('/api/avgrating')
            .then(({ ap }) => {
                console.log(ap)
            })
    }
    // useEffect(() => {avgRating()})

return <div className='showstores'>
        {
        logged_in ?(
            is_admin ?
                <div className="ashow">
                    <img className="img" src={img} alt="store pics" />
                    <span>
                    <p>name:{name}</p>
                    <p>address:{address}</p>
                    <p>rating:{props.stores.average}</p>
                    <p>comment:{comment}</p>
                    </span>
                    <span>
                    <input name='rating' placeholder='newrating' onChange={(event) => {
                        setrating(event.target.value)
                    }} />
                     <button onClick={()=>props.addRatings({rating,store_id})}>AddRating</button>
                    <input
                    data-testid="input-comment"
                    name='comment' placeholder='newcomment' onChange={(event) => {
                        setcomment(event.target.value)
                    }} />
                     <button onClick={()=>props.editStores(store_id,comment)}>Edit Comment</button>
                    </span>
                      <button onClick={()=>props.deleteStores(store_id)}>Delete</button>
                </div>
                :
                <div className='ushow'>
                    <img className="img" src={img} alt="store pics" />
                    <span>
                    <p>name:{name}</p>
                    <p>address:{address}</p>
                    <p>rating:{props.stores.average}</p>
                    <p>comment:{comment}</p>
                    </span>
                    <input name='rating' placeholder='newrating' onChange={(event) => {
                        setrating(event.target.value)
                    }} />
                     <button onClick={()=>props.addRatings({rating,store_id})}>AddRating</button>
                </div>
         ) :
                <div className='nshow'>
                    <img className="img" src={img} alt="store pics" />
                    <span>
                    <p>name:{name}</p>
                    <p>address:{address}</p>
                    <p>rating:{props.stores.average}</p>
                    <p>comment:{comment}</p>
                    </span>
                </div>
        }
    </div>
}
const mapStatetoprops = (reduxstate) => {
    return {
        user: reduxstate.data
    }
}
export default connect(mapStatetoprops)(Showstores)