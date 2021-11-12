import React from "react";
import { Link, Route } from 'react-router-dom';
import Home from "./Components/Home";
import axios from "axios";

const App = () => {
  return (
    <>
     <nav>
      <h1>Lambda Eats</h1>
      <p>By Chef Coco</p>
      <Link to='/'><button id='home-B'>Home</button></Link>
    </nav>
      <Route exact path='/' component={Home} />
    </>
  );
};
export default App;
