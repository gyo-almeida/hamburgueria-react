import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 65px;

  @media (max-width: 1170px) {
    gap: 30px;
    justify-content: center;
  }

  @media (max-width: 699px) {
    height: 450px;
    overflow-y: auto;
  }

  @media (max-height: 500px) {
    height: 450px;
    overflow-y: auto;
  }
`;
