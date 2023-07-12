import React from "react";
import { Router, Routes, BrowserRouter, Route, Link } from "react-router-dom";
import SignUp from "./signup";
import SignIn from "./signin";
import AuthDetails from "../authdetails";

function Home(){
    return (
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/signup" >SignUp</Link>
                </li> 
                <li>
                    <Link to="/signin">SignIn</Link>
                </li>  
            </ul>
        </nav>
        
            <Routes>
                <Route path="/" element={<h1>rootpage</h1>}/>
                <Route path="/other" element={<h1>nonrootpage</h1>}/>
                <Route path="signup" Component={SignUp}/>
                <Route path="signin" Component={SignIn}/>
            </Routes>
            
        </div>
    
    );
}

export default Home;