import React,{useState} from 'react'
import {Link} from "react-router-dom"

const Signup = () => {
    const [credentilas, setcredentilas] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const response = await fetch ("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentilas.name,email:credentilas.email,password:credentilas.password,location:credentilas.geolocation})
        });
        const json = await response.json()
        console.log(json);
        if(!json.success){
            alert ("Enter Valid Credentials")
        }

    }
    const onChange=(event)=>{
        setcredentilas({...credentilas,[event.target.name]:event.target.value})

    }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlfor="name" className="form-label">Name</label>
    <input type="text" className="form-control"name='name' value={credentilas.name} onChange={onChange}/>
    
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentilas.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentilas.password}onChange={onChange} id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
    <label htmlfor="exampleInputlocation" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentilas.geolocation}onChange={onChange} id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>already a user</Link>
</form>
</div>
    </>
  )
}

export default Signup