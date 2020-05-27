import React, {Component} from 'react'
import axios from 'axios'
import{connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Showstores from './Showstores'
import Addstores from './Addstores'

class Stores extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{},
            stores:[],
            redirect:false
        }
    }
    componentDidMount(){
        console.log(this.props)
        this.getStores()
    }
    getStores=()=>{
        if(this.state.user){
            axios.get('/api/stores')
            .then(({data})=>{
                this.setState({
                    stores:data
                })
            })
            .catch(err=>{
                console.log('can not find stores')
            })
         } else{
                return <Redirect to = "/"/>
            }
        }
    
        addStores=(info)=>{
            const{img, name, address, comment} = info
            const newStores = {img, name, address, comment}
            axios.post('/api/addstores', newStores)
            .then(()=>{
               this.getStores()
            })
            .catch(err=>{
                console.log('failed to add stores')
            })
        }

        editStores=(id,comment)=>{
            axios.put(`/api/editstores/${id}?comment=${comment}`)
            .then(()=>this.getStores())
            .catch(err=>{
                console.log('edit comment failed')
            })
        }

        editRating=(id,rating)=>{
            axios.put(`/api/editrating/${id}?rating=${rating}`)
            .then(()=>this.getStores())
            .catch(err=>{
                console.log('edit rating failed')
            })
        }
    
        deleteStores=(id)=>{
            axios.delete(`/api/deletestores/${id}`)
            .then(()=>this.getStores())
            .catch(err=>{
                console.log('delete stores failed')
            })
        }
        render(){
            let{redirect} = this.state
            let{user} = this.props
            console.log(this.state.stores)
            const mappedstores = this.state.stores.map(stores=><Showstores
                key={stores.store_id}
                stores={stores}
                editStores={this.editStores}
                editRating={this.editRating}
                deleteStores={this.deleteStores}/>
                )
                return(
                    <div className='storelists' >
                   {mappedstores}
                   <Addstores addStores={this.addStores}/>
                </div>
            )
        }
    }

    const mapStateToProps = state => state;
    export default connect(mapStateToProps)(Stores)