import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './dashboard';
import Navbar from './navbar'
ReactDOM.render
(
  <React.StrictMode>
    <Router>
    <Navbar />
      <Routes>
        {/* <Route exact path="/"> <App /></Route> */}
        {/* <Route exact path="/dashboard"> <Dashboard /></Route> */}
        <Route exact path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
