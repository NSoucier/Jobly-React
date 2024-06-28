import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CompanyList from "./CompanyList";
import CompanyDetails from "./DetailsCard";
import JobList from "./JobList";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Nav from "./Nav";
import "./App.css";

function App() {
  let loggedIn = false;
  return (
    <div className="App">
      <Nav loggedIn={loggedIn} />
      <h1>I'm still here :D</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:name" element={<CompanyDetails />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
