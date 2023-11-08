import Message from "../Components/Message";
import '../Styles/Inbox.css'
import HeaderAdmin from "../Components/HeaderAdmin";
import { useState, useEffect } from "react";
import axios from "axios";
const Inbox = ()=>{

   const [data, setData] = useState([]);// initializing data state
    


  
useEffect(() => {
  
  
   axios.get('http://localhost:4000/api/inbox/')
  .then((response) => {
    
    setData(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

    
 

    return(
        <div className="big-big-admin-container">
            <HeaderAdmin>Inbox</HeaderAdmin>
        
        <div className="Inbox-Container">
           
            
            {data.map((message) => (
           
                <Message 
                firstName={message.firstName} 
                lastName={message.lastName} 
                email = {message.email}
                status = {message.status}
                id = {message._id}
               
                message = {message.message}
                />
              ))}
              
          </div>
        </div>
    )
}

export default Inbox