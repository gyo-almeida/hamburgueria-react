import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  margin: 8% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 400px;
    height: auto;
    border: 2px solid var(--grey-0);
    padding: 24px;
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    color: var(--grey-100);
  }

  .header {
    display: flex;
    justify-content: space-between;
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

  form p {
    font-weight: 600;
    font-size: 12px;
    color: var(--color-secondary);
  }

  button {
    height: 50px;
    background-color: var(--grey-0);
    border: 2px solid var(--grey-0);
    border-radius: 8px;
    padding: 10px;
    color: var(--grey-50);
    text-align: center;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: var(--grey-50);
  text-align: center;
  font-weight: 400;
  font-size: 14px;
`;
