import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Text = styled.p`
  font-weight: 600;
  color: black;
  text-align: center;
  font-size: 1.5rem;
  span {
    color: #f7710a;
    font-size: 1.5rem;
  }
`;

export const WaitingText = styled.p`
  color: #646464;
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 4rem;
`;
