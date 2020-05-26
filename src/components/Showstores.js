import React, { useState } from 'react'

export default function Showstores(props) {
    let { store_id, img, name, address } = porps.stores
    const [rating, newrating] = useState(props.stores.rating)
    const [comment, newcomment] = useState(props.stores.comment)
    const { is_admin: admin } = user
    return <div className='showstores'>
        {
            admin ?
                <div>
                    <img className="img" src={img} alt="store pics" />
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{props.stores.comment}</p>
                    <p>{props.stores.rating}</p>
                    <input name='rating' placeholder='newrating' onChange={(event) => {
                        newrating(event.target.value)
                    }} />
                    <input name='comment' placeholder='newcomment' onChange={(event) => {
                        newcomment(event.target.value)
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
                        newrating(event.target.value)
                    }} />
                </div>
        }
    </div>
}