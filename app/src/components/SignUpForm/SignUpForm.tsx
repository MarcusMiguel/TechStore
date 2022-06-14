import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Input, Link, Title, Wrapper, Error } from './style';
import React from 'react';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(false);

  const [formValues, setFormValues] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [formErrors, setFormErrors] = useState({ username: "", email: "", password: "", confirmPassword: "", serverError: "" });
  const [hasError, setHasError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    validate(formValues);
  };

  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = { username: "", email: "", password: "", confirmPassword: "", serverError: "" };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    let error = false;
    setHasError(false);
    if (!values.username) {
      errors.username = "Username is required.";
      error = true;
    }
    if (!values.email) {
      errors.email = "Email is required.";
      error = true;
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format.";
      error = true;
    }
    if (!values.password) {
      errors.password = "Password is required.";
      error = true;
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 3 characters.";
      error = true;
    } else if (values.password.length > 14) {
      errors.password = "Password cannot exceed more than 14 characters.";
      error = true;
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
      error = true;
    }
    else if (values.password != values.confirmPassword) {
      errors.confirmPassword = "Password and confirmation are different.";
      error = true;
    }

    if (!error) {
      register({ username: formValues.username, password: formValues.password, email: formValues.email });
    }

    setFormErrors(errors);

    return errors;
  }

  const register = async (user) => {
    setFetching(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", user);
      setFetching(false);
      navigate('/signin');
    } catch (err) {
      //@ts-ignore
      const msg: string = err.response.data.message
      setFormErrors({ username: "", email: "", password: "", confirmPassword: "", serverError: msg });
      setFetching(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Error>{formErrors.serverError}</Error>
          <Error>{formErrors.username}</Error>
          <Input
            placeholder="username"
            name="email"
            onChange={handleChange}
          />
          <Error>{formErrors.email}</Error>
          <Input
            placeholder="email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Error>{formErrors.password}</Error>
          <Input
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Error>{formErrors.confirmPassword}</Error>
          <Input
            placeholder="confirm password"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
          />
          <Button disabled={fetching} onClick={handleClick} >SIGN UP</Button>
          <Link onClick={() => navigate('/signin')}>SIGN IN</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUpForm;