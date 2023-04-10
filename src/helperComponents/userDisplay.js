import React, { useEffect } from 'react';
import { useState } from 'react';
import "../styles/userDisplay.css"


const UserDisplay = ({Id , first_name , last_name , Email}) => {
    const [id , setId] = useState(Id)
    const [firstName , setFirstName] = useState(first_name)
    const [lastName , setLastName] = useState(last_name)
    const [email , setEmail] = useState(Email)


 

return ( 
    <div className="user-display">
   <div>ID : {id}</div>
   <div>First Name : {firstName}</div>
   <div>Last Name :{lastName}</div>
   <div>Email : {email}</div>

    </div>  
    );
}
 
export default UserDisplay;