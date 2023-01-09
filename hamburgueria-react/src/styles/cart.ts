import styled from "styled-components";

export const Div = styled.div`
  width: 500px;
  height: auto;
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  .title {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-primery);
    color: var(--white);
    padding: 17px 20px;
    border-radius: 5px 5px 0 0;
  }

  span {
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
    gap: 16px;
    border-bottom: solid 3px var(--grey-20);
  }
`;
