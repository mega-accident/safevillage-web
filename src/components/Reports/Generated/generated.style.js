import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  text-align: center;

  span {
    font-size: 1.5rem;
    color: #f7710a;
  }
`;

export const ReviewButton = styled.button`
  position: absolute;
  bottom: 2rem;
  width: 20rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 1rem;
  border: none;
  background-color: #f7710a;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 9999;
  &:hover {
    background-color: #e56609;
  }
`;
