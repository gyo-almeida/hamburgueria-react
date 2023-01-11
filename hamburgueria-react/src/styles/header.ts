import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 8%;
  align-items: center;
  width: 100%;
  background-color: var(--grey-0);

  .logo {
    display: flex;
    gap: 0;
    background-color: var(--grey-0);
    align-items: center;
    cursor: default;
  }

  .logo span {
    height: 50px;
    color: var(--color-secondary);
    font-weight: 600;
  }

  section {
    width: 40%;
    display: flex;
    gap: 40px;
    justify-content: flex-end;
  }

  form {
    display: flex;
    height: 60px;
    width: 70%;
    gap: 5px;
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
    position: relative;
    bottom: 10px;
    left: 48%;
    width: 16px;
    height: 15px;
    text-align: center;
    font-size: 12px;
    color: var(--grey-0);
    background-color: var(--color-secondary);
    border-radius: 4px;
    cursor: pointer;
  }

  .search-mobile {
    display: none;
  }

  @media (max-width: 850px) {
    section {
      gap: 0;
      justify-content: center;
    }
  }

  @media (max-width: 699px) {
    flex-direction: column;
    gap: 14px;
    padding: 5px 8% 18px 8%;
    justify-content: center;

    .search-mobile {
      display: flex;
      margin-right: -37px;
    }

    .icons span {
      left: -77%;
    }
    .cart-icon {
      margin-left: -84px;
    }

    section {
      flex-direction: column-reverse;
      gap: 15px;
      align-items: center;
      width: 90%;
    }

    form {
      width: 90%;
    }
  }
`;
