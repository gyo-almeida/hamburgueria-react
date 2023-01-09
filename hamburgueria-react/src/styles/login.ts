import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  gap: 60px;
  margin: 10% auto;
  justify-content: center;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 400px;
    height: auto;
    border: 2px solid var(--grey-0);
    padding: 24px;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  section h3 {
    color: var(--grey-100);
    font-weight: 700;
    font-size: 18px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input {
    height: 50px;
    padding: 20px 15px;
    border: 2px solid var(--grey-100);
    border-radius: 8px;
    color: var(--grey-100);
    font-size: 16px;
    font-weight: 400;
  }

  form button {
    height: 50px;
    background-color: var(--color-primery);
    border: 2px solid var(--color-primery);
    border-radius: 8px;
    color: var(--grey-0);
    text-align: center;
    font-weight: 600;
    font-size: 16px;
  }

  form > p {
    font-weight: 600;
    font-size: 12px;
    color: var(--color-secondary);
    align-items: flex-start;
  }

  section > p {
    font-weight: 400;
    font-size: 14px;
    color: var(--grey-50);
    text-align: center;
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 50px;
  background-color: var(--grey-0);
  border: 2px solid var(--grey-0);
  border-radius: 8px;
  padding: 10px;
  color: var(--grey-50);
  text-align: center;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    border: solid 2px var(--color-secondary);
    color: var(--color-secondary);
  }
`;
