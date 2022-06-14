import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loginSuccess } from "../../redux/slices/userSlice";
import { Container, Form, Title, Wrapper, Error, Button, Link, Input } from "./style";

const SignInForm = () => {

  const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ username: "", email: "", password: "", serverError: "" });
  const [fetching, setFetching] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    validate(formValues);
  };

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    setFormValues({ ...formValues, [placeholder]: value });
  };

  const validate = (values) => {
    const errors = { username: "", email: "", password: "", confirmPassword: "", serverError: "" };

    var error = false;
    if (!values.username) {
      errors.username = "Username is required.";
      error = true;
    }

    if (!values.password) {
      errors.password = "Password is required.";
      error = true;
    }

    if (!error) {
      login({ username: formValues.username, password: formValues.password });
    }

    setFormErrors(errors);

    return errors;
  }

  const login = async (user) => {
    setFetching(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", user);
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (err) {
      //@ts-ignore
      const msg: string = err.response.data.message
      setFormErrors({ username: "", email: "", password: "", serverError: msg });
      setFetching(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Error>{formErrors.serverError}</Error>
          <Error>{formErrors.username}</Error>
          <Input
            placeholder="username"
            onChange={handleChange}
          />
          <Error>{formErrors.password}</Error>
          <Input
            placeholder="password"
            type="password"
            onChange={handleChange}
          />
          <Button onClick={handleClick} disabled={fetching} >
            SIGN IN
          </Button>
          <Link onClick={() => navigate('/signup')}>SIGN UP</Link>
        </Form>
      </Wrapper>
    </Container >
  );
};

export default SignInForm;

