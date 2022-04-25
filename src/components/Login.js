import {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
const Login=()=>{
    const [uname,setUname] = useState("");
    const [password,setPass] = useState("");
    let history = useHistory();
    const handleForm=(event)=>{
        event.preventDefault();
        var credentials = {remail:uname,rpassword:password};
        axios.post("http://127.0.0.1:8000/api/login",credentials).then(function(rsp){
           
            alert("Login Successfully");
             history.push("/dashboard")
        },function(err){
            
            alert("Login Failed");
        });
   
    }
    return(
        <form  onSubmit={handleForm} >
            <h1>Login</h1>
            Email: <input type="text" onChange={function(event){setUname(event.target.value);}} value={uname}></input><br/>
            Password: <input type="password" value={password}onChange={(event)=>{setPass(event.target.value)}}></input> <br/>
            <button type="submit">Submit</button><br/>
           <Link to="/registration">Registration</Link>
        </form>
    )
}
export default Login;