import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import List from './components/List2.js'


//import reportWebVitals from './reportWebVitals';

// 1.
// ReactDom.render(

// "Hai will this work",
// document.getElementById('root')



// );

//2.
// const a =<div><h1 >Hai will this work , yeah bro</h1></div>

// ReactDom.render(
// a,
// document.getElementById('root')



// );

//3. inline style using object

// const div_style={
// width:'330px',
// height:'500px',
// margin:'25px',
// backgroundColor:'aqua' //Camelcase
// }

// ReactDom.render(

//   <div style={div_style}>Hai yes this will work</div>

//   ,


// document.getElementById('root')



// );







// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//perfomance checking
//reportWebVitals();


//4.event handling - console.log()

// const div_style={
//   width:'330px',
//   height:'500px',
//   margin:'25px',
//   backgroundColor:'orange', //Camelcase
//   display:'flex',
//   justifyContent:'center',
//   alignItems:'center'

//   }

// const fun =()=>{
//   console.log("Hai yes worked !")
//   alert("worked after closing this check console")
// }

// ReactDom.render(
//   <div style={div_style} >
//     <h1 onClick={fun}>Click Me...</h1>
//   </div>,
//   document.getElementById('root')
// )


//5. array using map


// const div_style={
//   width:'330px',
//   height:'500px',
//   margin:'25px',
//   backgroundColor:'black', //Camelcase
//   display:'flex',
//   justifyContent:'center',
//   alignItems:'center',
//   color:'white'

//   }

// const arr = ["Amal JS","Full stack developer","I am great"]

// ReactDom.render(

//   <div style={div_style}>
//     {
//       arr.map((data)=>{
//         return <label key={data} > {data} </label>  //key important point if else error in console will work anyways
//       })
//     }
//   </div>

//   ,document.getElementById('root')
// )


//day2

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List />
  </React.StrictMode>
);