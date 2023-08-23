import React from 'react'
import './Dropdown.css'


function Drop(props){

return(

<div>
<select name="Select Here" onChange={props.onAction}>
    <option value = 'all' >All</option>
    <option value = 'available' >Available</option>
    <option value = 'unavailable' >Unavailable</option>
</select>

</div>


)
}

export default Drop;