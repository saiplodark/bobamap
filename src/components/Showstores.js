import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import axios from 'axios'

function Showstores(props) {
    console.log(props)
    let { store_id, img, name, address } = props.stores
    const [rating, setrating] = useState(props.stores.rating)
    const [comment, setcomment] = useState(props.stores.comment)
    const { logged_in, is_admin } = props.user
    // console.log(logged_in)
    // console.log(is_admin)
    console.log(props.user)

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
                <div>
                    <img className="img" src={img} alt="store pics" />
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{props.stores.comment}</p>
                    <p>{props.stores.rating}</p>
                    <input name='rating' placeholder='newrating' onChange={(event) => {
                        setrating(event.target.value)
                    }} />
                     <button onClick={()=>props.editRating(store_id)}>Edit Rating</button>
                    <input name='comment' placeholder='newcomment' onChange={(event) => {
                        setcomment(event.target.value)
                    }} />
                     <button onClick={()=>props.editStores(store_id)}>Edit Comment</button>
                      <button onClick={()=>props.deleteStores(store_id)}>Delete</button>
                </div>
                :
                <div>
                    <img className="img" src={img} alt="store pics" />
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{props.stores.rating}</p>
                    <p>{comment}</p>
                    <input name='rating' placeholder='newrating' onChange={(event) => {
                        setrating(event.target.value)
                    }} />
                      <button onClick={()=>props.editRating(store_id)}>Edit Rating</button>
                </div>
         ) :
                <div>
                    <img className="img" src={img} alt="store pics" />
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{rating}</p>
                    <p>{comment}</p>
                    <button className="just test to see">Testing</button>
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