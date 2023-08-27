import React from "react";


class Dummy extends React.Component{


     style = {
        width:"100%",
        height:'100px',
        padding: "15px",
        color:"white",
        background:'grey'
    };


    componentDidMount=()=>{
        console.log(`Component Mounted : ${this.props.head_component} `)
    }
    componentDidUpdate=()=>{
        console.log(`Component Update : ${this.props.head_component} `)
        console.log('------------------------------------------------------------')
    }
    
    

render(){


    //only one value so no need of destucturing {head_component} = this.props.head_component
   const  head_component = this.props.head_component
   

    
    return(

        <div style={this.style}> 
        
        <h1 > {head_component} </h1>
        
        </div>
        

    )
}
}
export default Dummy;