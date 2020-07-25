import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
        this.increment5 = this.increment5.bind(this); // It is recommended approach and optimised
    }

    clickHandler(){
        // You can't use this keyword for updating state unless it is called as bind(this)
        console.log('callback value','hi')
    }

    // It is also optimised approach
    clickHandlerfunc = ()=>{
        this.setState((prevState, props)=>(
            {
                count: prevState.count + 1
            }
        ),
        () => {
            console.log('callback value','this.state.count')
        }
        )
    }

    increment(){
        // Never Update state directly , update prevState always
        // pass prevState as Argument always
        //props can be used along with state as per need basis
        // setState 2nd argument is callback method and used for waiting for api response
        this.setState((prevState, props)=>(
            {
                count: prevState.count + 1
            }
        ),
        () => {
            console.log('callback value','this.state.count')
        }
        )
    }

    increment5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.increment5()}>Increment</button>  
                <button onClick={this.clickHandler}>Click Me</button>  
                <button onClick={this.increment5.bind(this)}>Bind to Dynamically</button> 
                <button onClick={this.increment5}>Bind to Constructor</button>  
                <button onClick={this.clickHandlerfunc}>Bind to function</button>                                                                                                    
                        
            </div>
        )
    }
}

export default Counter
