import logo from './logo.svg';
import './App.css';
import Home from './components/auth/home';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import AuthDetails from './components/authdetails';
import { Link } from 'react-router-dom';

import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Actualhome from './components/auth/actualhome';

function App() {
  //return (
  //  <div>
  //  <BrowserRouter>
  //    <SignIn />
  //    <SignUp />
  //    <AuthDetails />
  //  </BrowserRouter>
  //  </div>
  //  
  //);
  //return (
  //  <BrowserRouter>
  //  <Routes>
  //  <Route path="/" element={<h1>rootpage</h1>}/>
  //  <Route path="/other" element={<h1>nonrootpage</h1>}/>
  //  </Routes>
  //    
  //    
  //  </BrowserRouter>
  //);

  return (
    <div>
      <Actualhome />
    </div>
  )
  }
export default App;
