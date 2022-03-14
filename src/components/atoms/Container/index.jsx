import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  justify-content: ${(props) => (props.justify ? props.justify : 'center')};
  align-items: center;
  height: 100vh;
`;
