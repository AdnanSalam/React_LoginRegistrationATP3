import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Registration=()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [uname,setUname] = useState("");
    const [password,setPass] = useState("");
    const [contact,setContact] = useState("");
    const handleForm=(event)=>{
        event.preventDefault();
        var credentials = {remail:email,rpassword:password,rname:name,rusername:uname,rcontact:contact};
        axios.post("http://127.0.0.1:8000/api/registration",credentials).then(function(rsp){
           
            alert("Registration Successfully");
        },function(err){
            
            alert("Registration Failed");
        });
   
    }
    return(
        <form  onSubmit={handleForm} >
            <h1>Registration</h1>

            Name: <input type="text" onChange={function(event){setName(event.target.value);}} value={name}></input><br/>
            Email: <input type="email" value={email}onChange={(event)=>{setEmail(event.target.value)}}></input> <br/>
            Username: <input type="text" onChange={function(event){setUname(event.target.value);}} value={uname}></input><br/>
            Password: <input type="password" value={password}onChange={(event)=>{setPass(event.target.value)}}></input> <br/>
            Contact: <input type="text" value={contact}onChange={(event)=>{setContact(event.target.value)}}></input> <br/>
            <button type="submit">Submit</button>
            <Link to="/login">Login</Link>
        </form>
    )
}
export default Registration;