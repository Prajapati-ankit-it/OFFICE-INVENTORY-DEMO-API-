<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css" ;
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return(
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact="true" path="/" element={<Login/>}>
          </Route>
          <Route path="/Signup" element={<Signup />}>
          </Route>
        </Routes>
      </div>
    </Router>
=======
// eslint-disable-next-line
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-routes-dom';
import student from './student';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<student/>}></Route>
      </Routes>
      </BrowserRouter>
      <h1>ankit</h1>
    </div>
>>>>>>> f6b7f1058d66e9826475fb9db770b6ebc2a72d4d
  );
}

export default App;
