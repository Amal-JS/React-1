import React from 'react';
import Header from './header';
import Footer from './Footer';
import Label from './Label';
import './List.css';
import Appoinment  from './Appoinment';

const arr= [ {month : 'November',available : true , time :'!5:00' },
{month : 'July',available : false , time :'!1:00' },
{month : 'Januvary',available : true , time :'!2:00' },
{month : 'April',available : false , time :'10:00' }

]
function List(){

return(
<div className='list-div'>
<Header />

<Label />  {/* Render Label component again */}
            {/* Render Label component again */}

 {   arr.map((element,index)=> {
        return <Appoinment key={index} available={element.available} month={element.month} time={element.time} />
    })
}

<Footer />
</div>


)

}
export default List;