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
  );
}

export default App;
