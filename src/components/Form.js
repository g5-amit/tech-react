import React, { Component } from 'react'

export class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comment : '',
             topic: 'vue'
        }
    }

    handleUserNameChange= (event)=>{
        this.setState({
            userName : event.target.value
        })

    }

    handleComment = (event) =>{
        this.setState({
            comment:event.target.value

        })
    }
    
    handleTopic = (event) =>{
        this.setState({
            topic:event.target.value

        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    
    
    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        type= 'text'
                        value={this.state.userName}
                        onChange={this.handleUserNameChange}
                    ></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value ={this.state.comment} onChange ={this.handleComment}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value ={this.state.topic} onChange ={this.handleTopic}>
                        <option value ="react">React</option>
                        <option value ="angular">Angular</option>
                        <option value = "vue">Vue</option>
                    </select>
                </div>
                <button type="submit" >Submit</button>
            </form>
            
        )
    }
}

export default Form
