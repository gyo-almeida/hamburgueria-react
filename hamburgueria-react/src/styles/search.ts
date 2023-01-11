import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  min-width: 165px;
  height: 40px;
  gap: 5px;
  align-items: center;
  border: solid 2px var(--grey-20);
  background-color: var(--white);
  border-radius: 8px;
  padding: 7px;

  input {
    width: 70%;
    height: 30px;
    border: none;
    color: var(--grey-100);
    font-weight: 400;
    font-size: 16px;
  }

  button {
    height: 30px;
    width: 30%;
    border-radius: 8px;
    background-color: var(--color-primery);
    border: solid 1px var(--color-primery);
    font-weight: 500;
    font-size: 14px;
    color: var(--white);
  }

  span {
    position: relative;
    right: 71%;
    bottom: 4px;
    height: 50px;
    color: var(--color-primery);
    font-weight: 600;
  }
`;
