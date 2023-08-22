

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