import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import Intro from './Intro';
import Order from './Order';
import Footer from './Footer';
import Build from './Build';
import Cart from './Cart';
import Register from './Register';
import Header from './Header';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header/>  
        <Route exact path='/' component={Login}/>
        <Route path='/intro' component={Intro}/>
        <Route path='/order' component={Order}/>
        <Route path='/build' component={Build}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/register' component={Register}/>
        <br></br>
        <Footer/>       
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
