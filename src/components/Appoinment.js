import React from 'react'
import './Appoinment.css'


class Appoinment extends React.Component{

style = this.props.available ? {background :'green'} : { background : 'red'} ;

handleClick =() => {
    alert(`Your appoinment is in ${this.props.month}`)}  //always use arrow function


render(){

    return(

        <div>
            <hr />
            <p>{this.props.month}</p>
            <p>{this.props.time}</p>
            <button style={this.style} onClick={this.handleClick}>{this.props.available ? 'Available' : 'Not Available'} </button>

            <hr />
        </div>

        

    )
}


}

export default Appoinment;