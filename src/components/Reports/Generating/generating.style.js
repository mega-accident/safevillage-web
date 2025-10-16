import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Text = styled.p`
  font-size: 4rem;
  font-weight: 600;
  color: black;
  text-align: center;

  span {
    font-size: 4rem;
    color: #f7710a;
  }
`;

export const WaitingText = styled.p`
  font-size: 3rem;
  color: #646464;
`;
