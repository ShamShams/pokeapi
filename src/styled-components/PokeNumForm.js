import React from "react";
import styled from "styled-components";
import { colors } from "../variables";

const Form = styled.form`
  margin-bottom: 50px;
`;

const TextInput = styled.input`
  height: 23px;
  width: 60px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.blue};
  text-align: center;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 4px 10px;
  border: 2px solid ${colors.blue};
  border-radius: 4px;
  color: ${colors.blue};
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${colors.yellow};
  }
`;

const PokeNumForm = ({ onSubmit, onValueChange, inputValue, buttonText }) => (
  <Form onSubmit={onSubmit}>
    <TextInput type="text" onChange={onValueChange} value={inputValue} />
    <Button type="submit">{buttonText}</Button>
  </Form>
);

export default PokeNumForm;
