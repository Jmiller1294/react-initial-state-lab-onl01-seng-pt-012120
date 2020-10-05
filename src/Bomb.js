
// your Bomb code here!
import React,  { Component } from 'react';

export default class Bomb extends Component {
    
    
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    
    
    
    render() {
        const seconds = this.state.secondsLeft
        if(seconds === 0) {
            return (
                <div>
                    Boom!
                </div>
            )
        }
        else {
            return (
                <div>
                    {this.state.secondsLeft} seconds left before I go boom!
                </div>
            )
        }
    }
}