import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetails from "./DetailsCard";
import Jobs from "./Jobs";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Nav from "./Nav";
import "./App.css";
import JoblyApi from "./api";
import React, { useState } from "react";

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ userInfo, setUserInfo ] = useState(null);

  async function login(user) {
    try {
      let token = await JoblyApi.login(user);
      if (token) {
        setCurrentUser(user.username);
        return 'success'
      }
    } catch (err) {
      return err
    }
  }

  async function logout() {
    setCurrentUser(null)
  }

  async function signup(user) {
    try {
      let token = await JoblyApi.signup(user);
      if (token) {
        console.log('token', token)
        setCurrentUser(user.username);
        return 'success'
      }
    } catch (err) {
      return(err)
    }
  }

  async function getUser(username) {
    try {
      const userInfo = await JoblyApi.getUser(username);
      console.log(userInfo);
      return userInfo
    } catch(err) {

    }
  }

  return (
    <div className="App">
      <Nav currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home user={currentUser} />} />
        <Route path="/companies" element={<CompanyList user={currentUser} />} />
        <Route path="/companies/:handle" element={<CompanyDetails user={currentUser} />} />
        <Route path="/jobs" element={<Jobs user={currentUser}/>} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="/signup" element={<SignUp signup={signup}/>} />
        <Route path="/profile" element={<Profile user={currentUser} getUser={getUser} />} />
      </Routes>
    </div>
  );
}

export default App;
