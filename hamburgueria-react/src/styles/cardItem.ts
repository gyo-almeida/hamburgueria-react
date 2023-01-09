import styled from "styled-components";

export const Li = styled.li`
  width: 90%;
  height: 80px;
  border: none;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    padding: 3px 0;
  }

  .products {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div > img {
    width: 70px;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
    background-color: var(--grey-20);
  }

  .name {
    font-weight: 700;
    font-size: 14px;
    color: var(--grey-100);
    max-width: 8ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .class {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-50);
  }

  button {
    width: 51px;
    height: 15px;
    font-weight: 500;
    font-size: 12px;
    color: #bdbdbd;
    border: none;
    background-color: var(--grey-0);
  }

  .trash-icon {
    width: 12px;
    height: 14px;
    cursor: pointer;
  }
`;
