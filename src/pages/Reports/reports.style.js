import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 2rem;
  font-weight: 500;
  font-size: 1.25rem;
  svg {
    cursor: pointer;
  }
  :nth-child(2) {
    color: transparent;
  }
`;

export const Content = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 1.25rem;
`;

export const Image = styled.div`
  width: 100%;
  height: 36rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  :nth-child(1) {
    font-weight: 600;
    min-width: 3rem;
  }
`;

export const LocationBox = styled.div`
  display: flex;
  border-radius: 2rem;
  height: 24rem;
  border: 1px solid #c4c4c4;
  background-color: #f5f5f5;
`;

export const Category = styled(Location)`
  width: fit-content;
  gap: 3rem;
`;

export const DangerDegree = styled(Category)``;
export const Description = styled(Category)`
  line-height: 1.3;
`;

export const DangerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20rem;
  height: 3.5rem;
  border-radius: 1rem;
  border: none;
  background-color: #f7710a;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 50;

  &:hover {
    background-color: #e56609;
  }
`;
