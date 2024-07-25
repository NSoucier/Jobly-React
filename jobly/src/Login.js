import React, { useState } from "react";
import { Button, Input } from "reactstrap";

function Login({ login }) {
  const [ user, setUser ] = useState({username: 'testuser', password: 'password'});
  
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

  async function handleClick(evt) {
    evt.preventDefault();
    let status = await login(user);
  }

  return (
    <>
      <h4 style={{color: 'white'}}>Login</h4>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="username" onChange={handleUsername}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="password" onChange={handlePassword}/>
      <Button color="success" onClick={handleClick}>Submit</Button>
    </>
  );
}

export default Login;
