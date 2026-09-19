import axios from "axios";
import { useState } from "react";

const Login = () => {
    const [emailId,setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async() =>{
        try{
            const res = await axios.post("http://localhost:3000/login",{
                emailId,
                password
            },{withCredentials:true});
        }
        catch(err){
            console.error(err);
        }
    }

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login to your Account!!</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">EmailId</legend>
              <input type="text" 
              value={emailId} 
              className="input" placeholder="Email Id" 
              onChange={(e)=>setEmailId(e.target.value)}
              />
              
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="password" 
              value={password} 
              className="input" placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)}
              />
              
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
