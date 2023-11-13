import '../Styles/login.css'
import Logo from '../Assets/LOGO.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const LoginForm = ()=>{
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const[response,setResponse] = useState()

    
let checkAccount = async (e)=>{
    e.preventDefault()
  
    try{
      
        var response = await axios.post(`http://localhost:4000/api/admin/signin`,{
         userName:userName,
          password:password,
        })
        setUsername(userName);
        setPassword(password);
           
        setResponse(response)
  
    }
  
  
    catch(e){
        console.log(e);
  
    }
  
  }
var url
  if(response){
    url = '/admin/categories'

  }else{url='/admin'}
        
  
  
    return(
       
   <body className='login-form-body' onSubmit={checkAccount}>
   
           
            <form className='login-form' >
 
                <h3>Login Here</h3>

                
        
                <label for="username">Username</label>
                <input 
                type="text" 
                placeholder="Email or Phone"
                 id="username"
                 onChange = {(e) => {setUsername(e.target.value)}}
                 />
        
                <label for="password">Password</label>
                <input type="password"
                 placeholder="Password"
                  id="password"
                  onChange = {(e) => {setPassword(e.target.value)}}
                  />
            
                <Link to={url}><button>Log In</button></Link>
             

                
            
                
               
            </form>
    </body>
        
    )
}

export default LoginForm