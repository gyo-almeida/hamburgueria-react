import styled from "styled-components";

export const Li = styled.li`
  min-width: 29%;
  background-color: var(--white);
  border: 2px solid var(--grey-20);
  border-radius: 5px;

  img {
    width: 100%;
    height: 150px;
    object-fit: contain;
  }

  div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--grey-100);
    margin-bottom: 5px;
  }

  .category {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-50);
  }

  .price {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primery);
  }

  button {
    width: 50%;
    height: 40px;
    margin-top: 10px;
    color: var(--white);
    font-weight: 500;
    font-size: 14px;
    background-color: var(--color-primery);
    border: 2px solid var(--color-primery);
    border-radius: 8px;
  }

  @media (max-width: 699px) {
    width: 47%;
  }

  @media (max-width: 599px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    width: 80%;
  }
`;
