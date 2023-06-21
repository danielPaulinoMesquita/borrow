import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  text-align: center;
  border: 1px solid rgba(219, 227, 232, 0.82);
  border-radius: 8px;
  transition: 0.5S;

  :hover {
    transform: scale(1.09);
    box-shadow: 5px 4px 5px #c41111;
    z-index: 2;
  }
`;
