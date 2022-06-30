import React,{Component} from "react";

export default class Couter extends Component{
    constructor(){
        super();
        this.state = {counter:3}
        this.icrement = this.icrement.bind(this)
        this.deincrement = this.deincrement.bind(this)
    }
    icrement(){
        this.setState({counter : this.state.counter + 1})
    }
    deincrement(){
        this.setState({counter :this.state.counter -1})
    }
    render(){
        return(
            <div>
                <h1>
                    Couter : {this.state.counter}
                </h1>
                <button onClick={this.icrement}>+</button>
                <button onClick={this.deincrement}>-</button>
            </div>
        )
    }
}