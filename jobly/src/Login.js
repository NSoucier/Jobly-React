import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import './Form.css';

function Login({ login }) {
  const [ user, setUser ] = useState({username: '', password: ''});
  const [ errors, setErrors ] = useState([]);
  const navigate = useNavigate();

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
    if (status === 'success') navigate('/companies');
    else setErrors(status)
  }

  return (
    <>
      <h4 style={{color: 'white'}}>Login</h4>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="username" onChange={handleUsername}/>
      <Input style={{ width: '40%', margin: '20px auto'}} placeholder="password" onChange={handlePassword} type="password"/>
      {errors.length ? errors.map((error) => (
        <h6 className="error">{error}</h6>
      )) : null}
      <Button color="success" onClick={handleClick}>Submit</Button>
    </>
  );
}

export default Login;
