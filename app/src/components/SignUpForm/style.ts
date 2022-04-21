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
width: 25vw;
  padding: 20px;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 2vh;
  `;

export const Link = styled.div`
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
  width: 100%;
  margin-left: 80%;
  margin-top: 10px;
`;

export const Error = styled.span`
  color: red;
  font-size: 3vh;
`;