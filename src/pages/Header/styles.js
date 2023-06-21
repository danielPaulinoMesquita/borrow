import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  background: rgb(36,0,0);
  background: linear-gradient(90deg, rgba(36,0,0,1) 0%, rgba(196,4,4,0.80015756302521) 100%);
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;

export const HeadTitle = styled.h1`
  display: flex;
  width: 100%;
  font-family: 'Passion One', cursive;
  font-size: 40px;
  color: white;
  align-items: center;
  justify-content: center;
`