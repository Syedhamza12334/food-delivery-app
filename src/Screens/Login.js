import React ,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"


const Login = () => {
  let navigate = useNavigate()
  const [credentilas, setcredentilas] = useState({email:"",password:""})
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const response = await fetch ("http://localhost:5000/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentilas.email,password:credentilas.password})
        });
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert ("Enter Valid Credentials")
        }
        if(json.success){
          localStorage.setItem("userEmail",credentilas.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"))
          navigate("/");
      }

    }
    const onChange=(event)=>{
        setcredentilas({...credentilas,[event.target.name]:event.target.value})

    }
  return (
    <div>
      <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentilas.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentilas.password}onChange={onChange} id="exampleInputPassword1"/>
  </div>

  
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/createuser" className='m-3 btn btn-danger'>iam  a user</Link>
</form>
</div>
    </div>
  )
}

export default Login