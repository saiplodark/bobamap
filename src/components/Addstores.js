import React,{ Component } from "react"

class AddStores extends Component{
    constructor(props){
        super(props)
        this.state={
            img:'',
            name:'',
            address:'',
            comment:'',
            rating:''
    }
    this.submitHandler = this.submitHandler.bind(this)
    }
    submitHandler(e){
        e.preventDefault()
        this.props.addStores(this.state)
    }

    changeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <span>
                    <label>img</label>
                    <input
                    type ="text"
                    name = "img"
                    value = {this.state.img}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "store img"/>
                </span>
                <span>
                    <label>name</label>
                    <input
                    type ="text"
                    name = "name"
                    value = {this.state.name}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "name"/>
                </span>
                <span>
                    <label>address</label>
                    <input
                    type ="number"
                    name = "address"
                    value = {this.state.address}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "address"/>
                </span>
                <span>
                    <label>comment</label>
                    <input
                    type ="number"
                    name = "comment"
                    value = {this.state.comment}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "how far you drove"/>
                </span>
                <span>
                    <label>rating</label>
                    <input
                    type ="text"
                    name = "rating"
                    value = {this.state.rating}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "rating"/>
                </span>
                <button >add</button>
                </form>
            </div>
        )
    }
}

export default AddStores