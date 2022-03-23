import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
width: 25vw;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 3vh;
  `;

const Link = styled.div`
font-size: 20px;
text-decoration: underline;
  cursor: pointer;
  width: 100%;
  margin-left: 80%;
  margin-top: 10px;
`;

const Error = styled.span`
  color: red;
`;

const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const [fetching, setFetching] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, email });
  };

  const register = async (dispatch, user) => {
    setFetching(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", user);
      navigate('/signin');
    } catch (err) {
      setError(true);
      setFetching(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          {error && <Error>Some fields are invalid.</Error>}
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="confirm password" type="password" />
          <Button >CREATE</Button>
          <Link onClick={() => navigate('/signin')}>SIGN IN</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignUpForm;