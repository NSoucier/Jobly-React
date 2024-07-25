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

  async function login(user) {
    try {
      let token = await JoblyApi.login(user);
      if (token) setCurrentUser('joe')
    } catch (err) {

    }
  }

  async function logout() {
    setCurrentUser(null)
  }

  async function signup(user) {
    try {
      let token = await JoblyApi.login(user);
      if (token) setCurrentUser('joe')
    } catch (err) {

    }
  }

  return (
    <div className="App">
      <Nav currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetails />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login login={login}/>} />
        <Route path="/signup" element={<SignUp signup={signup}/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
