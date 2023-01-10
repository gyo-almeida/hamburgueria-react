import styled from "styled-components";

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;

  .logo {
    display: flex;
    gap: 0;
    background-color: var(--white);
    align-items: center;
  }

  .logo span {
    height: 50px;
    color: var(--color-secondary);
    font-weight: 600;
  }

  .slogan {
    display: flex;
    width: 377px;
    height: 95px;
    gap: 20px;
    padding: 14px 13px 23px 18px;
    align-items: center;
    background: var(--grey-0);
    border: 1px solid var(--grey-20);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  .div-img {
    display: flex;
    width: 60px;
    height: 60px;
    padding: 14px;
    align-items: center;
    justify-content: center;
    background-color: var(--color-primery-50);
    border-radius: 4px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: var(--grey-50);
  }

  @media (max-width: 699px) {
    .slogan {
      display: none;
    }
  }
`;
