import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Amit'
        }
        console.log('A Constructor')
    }

    static getDerivedStateFromProps(props){
        console.log('A getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('A componentDidUpdate')
    }

    changeState =() => {
        this.setState({
            name:'Check Lifecycle Now'
        })
    }

    
    render() {
        console.log('A render')

        return (
            <div>
                <div>Lifecyle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }

    componentDidMount(){
        console.log('A componentDidMount')

    }
}

export default LifecycleA
