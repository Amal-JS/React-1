import React from 'react';
import Header from './header';
import Footer from './Footer';
import Label from './Label';
import './List.css';
import Appoinment  from './Appoinment';
//day 3 
import Drop from './Dropdown';




// //day1 and day2
// const arr= [ {month : 'November',available : true , time :'!5:00' },
// {month : 'July',available : false , time :'!1:00' },
// {month : 'Januvary',available : true , time :'!2:00' },
// {month : 'April',available : false , time :'10:00' }

// ]



//day3 

const arr= [ {id : 1,month : 'November',available : true , time :'!5:00' },
{id : 2,month : 'July',available : false , time :'!1:00' },
{id : 3,month : 'Januvary',available : true , time :'!2:00' },
{id : 4,month : 'April',available : false , time :'10:00' }

]


//List was a functional component later changed to class component
// const dropDownHandle = (event)=>{

//     // check if value of option comes 
//     // console.log(event.target.value)

//     const value = event.target.value

//     //filtering array values based on select and consoling it
//     const new_list = arr.filter((element)=>{
        
//         if (value === 'all'){ return true}

//         //if option is available then return arr elements with available is true
//         if (value === 'available'){ return element.available === true}
//         if (value === 'unavailable'){ return element.available === false}
//         return false
//     })

//     console.log(value,'     ',new_list)

//     //we can console this data but it won't render the page based on the new data 
//     //so for that we want to use state

//     this.setState({
//         data:new_list
//     })

// }


class List extends React.Component{

    constructor(props){

        super(props); //must call super constructor
        this.state = {
            data :arr
        }

    }

    deleteData = (element)=>{

        //console.log(element.id)

     const new_arr = this.state.data.filter((ele)=>{
        return element.id !== ele.id
     })

     this.setState(
        {
            data:new_arr
        }
     )


    }

    dropDownHandle = (event) => {
        const value = event.target.value;

        const new_list = arr.filter((element) => {
            if (value === 'all') {
                return true;
            }
            if (value === 'available') {
                return element.available === true;
            }
            if (value === 'unavailable') {
                return element.available === false;
            }
            return false;
        });

        //console.log(value, '     ', new_list);

        this.setState({
            data: new_list
        });
    };

render(){
   
return(
<div className='list-div'>
<Header />





{/* day1 */}
{/*<Label />  {/* Render Label component again */}
            {/* Render Label component again */}

{/* dropdown day 3 */}



<Drop  onAction = {this.dropDownHandle}/>



    <div className='app-div'>

 {   this.state.data.map((element,index)=> {

        //ondelete want to pass the object so make a new function and call from it
       // return <Appoinment onDelete= {this.deleteData} key={index} available={element.available} month={element.month} time={element.time} />
        return <Appoinment onDelete= {()=>{

            this.deleteData(element)

        }}
         key={index}
          available={element.available} 
          month={element.month} 
          time={element.time} 
          />
    
    })
}
</div>

<Footer />
</div>


)

}
}
export default List;