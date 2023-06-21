import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 7%;
  padding-left: ${props => props.changeWidth ? '320px': '20px' };
`;