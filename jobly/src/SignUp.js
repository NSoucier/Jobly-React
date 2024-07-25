import React, { useState } from "react";
import { Button, Input } from "reactstrap";

function SignUp({ signup }) {
  const [ user, setUser ] = useState({username: 'testuser',
                                password: 'password',
                                firstname: 'firstN',
                                lastname: 'lastN', 
                                email: 'e@mail.com'});
  
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
    user.firstname = evt.target.value
    setUser(user)
  }

  function handleLastName(evt) {
    evt.preventDefault();
    user.lastname = evt.target.value
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
  }

  return (
    <>
      <h4 style={{color: 'white'}}>Create your new account</h4>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="username" onChange={handleUsername}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="password" onChange={handlePassword}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="first name" onChange={handleFirstName}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="last name" onChange={handleLastName}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="e-mail" onChange={handleEmail}/>
      <Button color="success" onClick={handleClick}>Submit</Button>
    </>
  );
}

export default SignUp;
