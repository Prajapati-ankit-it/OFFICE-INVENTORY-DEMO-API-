<<<<<<< HEAD
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
=======
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
>>>>>>> 9fcaf798e6d9ab818c1387467b7bc55ed68f7503
  );
}

export default App;
