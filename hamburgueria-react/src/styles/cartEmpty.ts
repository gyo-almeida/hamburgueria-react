import styled from "styled-components";

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;
  height: 200px;

  h4 {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: var(--grey-100);
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    text-align: center;

    color: var(--grey-50);
  }
`;
