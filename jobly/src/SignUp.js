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


  
  function handleUsername(evt) {
    evt.preventDefault();
    user.username = evt.target.value
    setUser(user)
  }

  function handlePassword(evt) {
    evt.preventDefault();
    user.password = evt.target.value
    setUser(user)
  }

  function handleFirstName(evt) {
    evt.preventDefault();
    user.firstName = evt.target.value
    setUser(user)
  }

  function handleLastName(evt) {
    evt.preventDefault();
    user.lastName = evt.target.value
    setUser(user)
  }

  function handleEmail(evt) {
    evt.preventDefault();
    user.email = evt.target.value
    setUser(user)
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
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="username" onChange={handleUsername}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="password" onChange={handlePassword} type="password"/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="first name" onChange={handleFirstName}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="last name" onChange={handleLastName}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="e-mail" onChange={handleEmail} type="email"/>
      {errors.length ? errors.map((error) => (
        <h6 className="error">{error}</h6>
      )) : null}
      <Button color="success" onClick={handleClick}>Submit</Button>
    </>
  );
}

export default SignUp;
