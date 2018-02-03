import React, { Component } from 'react';
import {connect} from "react-redux";
import {add,subtract,reset} from "./../actions";
import {bindActionCreators} from "redux";
class Math extends Component{
    constructor(props){
        super(props);
        this.state={
            input:0
        }
    }

    inputChange(e){

        this.setState({
            input:Number(e.target.value)
        })

        console.log(" Value in :" ,this.state.input);

    }


    render(){
        return(
            <div>
                    <input type="text" onChange={this.inputChange.bind(this)} />

                    <button onClick={ ()=>{
                        this.props.add(this.state.input)
                    }}
                        > Add  </button>
                    <button onClick={()=>{
                        this.props.subtract(this.state.input)
                    }}> Substract  </button>
                    <button onClick={()=>{
                        this.props.reset()
                    }}> Reset  </button>
                <h2> {this.props.num }</h2>
            </div>

        )

    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({add,subtract,reset}, dispatch);

}

function mapStateToProps(state){

    return {
        num:state.number
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Math);