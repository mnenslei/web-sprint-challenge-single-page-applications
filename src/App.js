import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';

import Home from "./Components/Home";
import Form from "./Components/Form";

import axios from "axios";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  pineapple: false,
  peppers: false,
  special: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = () => {
    
  }

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value});
  };

  return (
    <>
     <nav>
      <h1>Lambda Eats</h1>
      <p>By Chef Coco</p>
      <Link to='/'><button>Home</button></Link>
      <Link to='/pizza'><button>Coco's Pizza</button></Link>
    </nav>

      <Route exact path='/'>
        <Home />
        <Link to='/pizza' id='order-pizza'>Coco's Pizza</Link>
      </Route>

      <Route path='/pizza'>
        <Form
          values={formValues}
          handleChange={handleChange}
        />
      </Route>
    </>
  );
};
export default App;
