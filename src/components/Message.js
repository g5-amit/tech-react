import React , { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Subscribe Now'
        }
    }

    changeMessage(){
        // setState() function is Asynchronous, 
        //ist argument set states, 
        //2nd argument is callback of asynchronous function
        this.setState(
            {
                message: 'Thank You for Subscibing Duggu'
            },
            () => {
                console.log('callback value',this.state.message)
            }
        )

        // It will run before setState() execution completes
        console.log(this.state.message)
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>

        )
        
    }
}

export default Message