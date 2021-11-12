import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';

import Home from "./Components/Home";
import Form from "./Components/Form";

import axios from "axios";
import * as yup from 'yup';
import formSchema from "./Components/Validation/formSchema";

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  mushrooms: false,
  pineapple: false,
  peppers: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  special: ''
};

const App = () => {
  const [order, setOrder] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = () => {
    axios.post(`https://reqres.in/api/orders`, formValues)
    .then(res => {
      setOrder([ ...order, res.data])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  };

const validate = (name, value) => {
  yup.reach(formSchema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
};

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
  };

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
          change={handleChange}
          errors={formErrors}
          submit={handleSubmit}
          disabled={disabled}
        />
      </Route>
    </>
  );
};
export default App;
