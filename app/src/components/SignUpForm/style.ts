import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
width: 12em;
padding: 20px;
background-color: white;
margin-bottom: 10vh;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  min-width: 40%;
  margin: 0px 10px 10px 0px;
  padding: 10px;
`;

export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Button = styled.button`
width: 50%;
height: 2em;
padding: 15px 20px;
background: rgb(84,121,9);
background: linear-gradient(90deg, rgba(84,121,9,0.27) 0%, rgba(84,121,9,0.49) 100%); 
border-radius: 100px;
color: black;
cursor: pointer;
margin-top: .3em;
display: flex;
align-items: center;
font-size: .8rem;
`;

export const Link = styled.div`
  font-size: .8rem;
  text-decoration: underline;
  cursor: pointer;
  width: 100%;
  text-align: end;
  padding: 0 10px;
`;

export const Error = styled.span`
  color: red;
  font-size: 3vh;
`;