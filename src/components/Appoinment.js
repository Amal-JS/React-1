import React from 'react'
import './Appoinment.css'


class Appoinment extends React.Component{

style = this.props.available ? {background :'green'} : { background : 'red'} ;
sim = ()=>{
    //console.log(this.props)
}



render(){
    {this.sim()}  //just calling a function
    return(

        <div className='App-div'>
            <hr />
            <p>{this.props.month}</p>
            <p>{this.props.time}</p>
            {/* arrow function calling function from list2.js */}
            <button style={this.style} onClick={() => this.props.dropstate(this.props.available)}>{this.props.available ? 'Available' : 'Not Available'} </button>
            <label onClick={this.props.onDelete}>delete</label>
            <hr />
        </div>

        

    )
}


}

export default Appoinment;