import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 8%;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: var(--grey-0);

  section {
    width: 40%;
    display: flex;
    gap: 40px;
  }

  form {
    height: 60px;
    width: 70%;
    align-items: center;
    border: solid 2px var(--grey-20);
    background-color: var(--white);
    border-radius: 8px;
    padding: 7px;
  }

  input {
    width: 70%;
    height: 30px;
    border: none;
    color: var(--grey-100);
    font-weight: 400;
    font-size: 16px;
  }

  button {
    height: 40px;
    width: 30%;
    border-radius: 8px;
    background-color: var(--color-primery);
    border: solid 1px var(--color-primery);
    font-weight: 500;
    font-size: 14px;
    color: var(--white);
  }

  .icons {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .icons img {
    cursor: pointer;
  }

  .icons span {
    position: absolute;
    top: 25px;
    right: 156px;
    width: 16px;
    height: 15px;
    text-align: center;
    font-size: 12px;
    color: var(--grey-0);
    background-color: var(--color-primery);
    border-radius: 4px;
  }
`;
