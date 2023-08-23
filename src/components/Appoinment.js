import React from 'react'
import './Appoinment.css'


class Appoinment extends React.Component{

style = this.props.available ? {background :'green'} : { background : 'red'} ;
sim = ()=>{
    //console.log(this.props)
}

handleClick =() => {
    alert(`Your appoinment is in ${this.props.month}`)}  //always use arrow function


render(){
    {this.sim()}
    return(

        <div className='App-div'>
            <hr />
            <p>{this.props.month}</p>
            <p>{this.props.time}</p>
            <button style={this.style} onClick={this.handleClick}>{this.props.available ? 'Available' : 'Not Available'} </button>
            <label onClick={this.props.onDelete}>delete</label>
            <hr />
        </div>

        

    )
}


}

export default Appoinment;