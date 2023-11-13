import { useState } from "react"
import '../Styles/Message.css'
import axios from "axios";
const Message = (prop)=>{
    // const [message, SetMessage] = useState('')
    const [status, SetStatus] = useState(prop.status)


    let markRead = async (e)=>{
    
      e.preventDefault()
    
      try{
        
          await axios.patch(`https://abadaibeirut.onrender.com/api/inbox/${prop.id}`,{
            status:true
            
          })
          SetStatus(true)
         

          
          
    
      }
    
    
      catch(e){
          console.log(e);
    
      }
    
    }

    return(
        <>
        {status?
        <button className="Message" onClick={()=>markRead}>
            
            <div className="text-container">
                <p>Message From: <span>{prop.firstName}{prop.lastName}</span></p>
                <p className="unread"> {prop.email}</p>
                <p className="msg">Content: <span className="message-c">{prop.message}</span></p>
             
        </div>
        
        </button>:

        <button className="Message unread-bg" onClick={()=>markRead}>
            
        <div className="text-container unread-bg">
        <p className="unread">Message From: {prop.firstName}{prop.lastName}</p>
        <p className="unread"> {prop.email}</p>
        <p className="msg unread">Content: <span className="message-c unread">{prop.message}</span>
        </p>
        
        </div>
        <div className="Message-details">
                <div className="unread-dot">.</div>
                <div className="time">1 min ago</div>
        </div>
        </button>}
        
        </>
    )
}
export default Message