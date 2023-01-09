import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  .total-value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
  }

  .total {
    color: var(--grey-100);
  }

  .value {
    color: var(--grey-50);
  }

  button {
    height: 60px;

    background-color: var(--grey-20);
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    color: var(--grey-50);
  }
`;
