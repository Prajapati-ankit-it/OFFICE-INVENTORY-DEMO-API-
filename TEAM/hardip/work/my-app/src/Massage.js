import React, { Component } from "react";

class Massage extends Component{
        constructor(){
            super()
            this.state = {
                massage:"welcome visiter"
            }
        }
        
        changeMessage(){
            this.setState(
                {massage: "thank's"}
            )
        }
 
 
    render(){
        return(
            <div>
            <h1>{this.name.massage}</h1>
            <button onClick={() => this.changeMessage()}>OK</button>
            </div>
        );
    }
}
export default Massage;