import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  return (
      <Router>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/dashboard" element= = {<Dashboard/>}/>
        </Routes>
      </Router>
  );
}

export default App;
