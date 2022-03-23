import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loginSuccess } from "../../redux/slices/userSlice";

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
  margin-bottom: 10vh;
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
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  height: 6vh;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.div`
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
  width: 100%;
  margin-left: 68%;
`;

const Error = styled.span`
  color: red;
  font-size: 18px;
`;

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser } = useAppSelector((state) => state.user);
  const [localError, setLocalError] = useState(false);
  const [fetching, setFetching] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  const login = async (user) => {
    setFetching(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", user);
      dispatch(loginSuccess(res.data));
      navigate('/');
    } catch (err) {
      setFetching(false);
      setLocalError(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          {localError && <Error>Invalid username or password.</Error>}
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={fetching} >
            LOGIN
          </Button>
          <Link onClick={() => navigate('/signup')}>SIGN UP</Link>
        </Form>
      </Wrapper>
    </Container >
  );
};

export default SignInForm;

