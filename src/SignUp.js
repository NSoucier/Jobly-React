import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import './Form.css';

function SignUp({ signup }) {
  const navigate = useNavigate(); 
  const [ errors, setErrors ] = useState([]);                               
  const [ user, setUser ] = useState({username: '',
                                password: '',
                                firstName: '',
                                lastName: '', 
                                email: ''});

  function handleChange(evt) {
    evt.preventDefault();
    user[evt.target.name] = evt.target.value
    setUser(user)
    console.log(user)
  }

  async function handleClick(evt) {
    evt.preventDefault();
    let status = await signup(user);
    if (status === 'success') navigate('/companies');
    else setErrors(status)
  }

  return (
    <>
      <h4 style={{color: 'white'}}>Create your new account</h4>
      <Input name='username' style={{ width: '40%', margin: '20px auto'}} placeholder="username" onChange={handleChange}/>
      <Input name='password' style={{ width: '40%', margin: '20px auto'}} placeholder="password" onChange={handleChange} type="password"/>
      <Input name='firstName' style={{ width: '40%', margin: '20px auto'}} placeholder="first name" onChange={handleChange}/>
      <Input name='lastName' style={{ width: '40%', margin: '20px auto'}} placeholder="last name" onChange={handleChange}/>
      <Input name='email' style={{ width: '40%', margin: '20px auto'}} placeholder="e-mail" onChange={handleChange} type="email"/>
      {errors.length ? errors.map((error) => (
        <h6 className="error">{error}</h6>
      )) : null}
      <Button color="success" onClick={handleClick}>Submit</Button>
    </>
  );
}

export default SignUp;
