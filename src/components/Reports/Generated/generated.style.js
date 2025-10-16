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

export const ReviewButton = styled.button`
  position: absolute;
  bottom: 10rem;
  width: 60rem;
  height: 9rem;
  border-radius: 3rem;
  border: none;
  background-color: #f7710a;
  color: white;
  font-size: 3rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e56609;
  }
`;
