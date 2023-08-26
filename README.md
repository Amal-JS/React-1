

Day 1 :
---------------------------------------------------------------------------------------------
error: 'React-1/' does not have a commit checked out
fatal: adding files failed

To solve this there will be .git folder inside 'React-1' folder delete it 

set remote : git remote add origin repo link


warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it :


resolve this issue = it config --global core.autocrlf true

git commit -m "inital commit"  : no single qoutes

-----------------------------------------------------------------------------------------------


Day 2:

------------------------------------------------------------------------------------------------

We are going to create Class and Function Components 

Now functional components also give state and life cycle component for functional components
Here we are also passing values from one component to other using props


Components :

        1.Appoinment.js
        2.Appoinment.css
        3.header.js / css
        4.Footer.js / css
        5.List2.js / List.css
        6.Label.js / Label.css


1. use map with array values 

2. use arrow function when defining function

3. In class components use 'this.props. ' to access the passed value , because seen as instance values

4. In function components use 'props. ' no issue like class

5. Always create custom component with first letter Capital letter - Label , not label .

6. Class components extends React.Component

7. Ternary operator eg : style = this.props.available ? {background :'green'} : { background : 'red'} ;

8. Ternary on html element : <button style={this.style} onClick={this.handleClick}>
    {this.props.available ? 'Available' : 'Not Available'} </button>

Examples:


1. arr.map()

    {   arr.map((element,index)=> {
        return <Appoinment key={index} available={element.available} month={element.month} time={element.time} />
    })
    }

2.Functional Component 

                            

                        const div_left_margin = {
                            marginLeft :'20px'
                        }

                        function Footer(){

                            return(

                                <div className='footer-div'>

                            </div>

                            );
                        }

                        export default Footer;

3.Class Component

                    
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


----------------------------------------------------------------------------------------------
Day 3

---------------------------------------------------------------------------------------------

Today we are gonna see how to pass data from one component to another component.

1. Adding a select (dropdown) below header component in List2.js


---------------------------------------------------------------------------------------------
Day 4
--------------------------------------------------------------------------------------------

Today we are gonna improve the dropdown if you click the dropdown item it will only show elements based to that,
and gonna delete the item each only from state not from array

    ==> When you are passing a function as props and function takes an argument ,when you are calling it passing values use a arrow function on 'onClick' event then call the function pass argument -- Appoinment component (Available / Unavailable)

    ==>Added a label with delete when clicking it call a function , that function , particular object id is passed from list2.js component. For identifying each object a new key value pair added with id 

-----------------------------------------------------------------------------------------------
Day 5 
-----------------------------------------------------------------------------------------------

Today we are gonna display value according to selection in element on  select

    ==>For this there is value attribute in select which will display the value when changed , a function is used there