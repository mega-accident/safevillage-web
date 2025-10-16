import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 4rem;
  font-size: 3rem;
  font-weight: 500;
  svg {
    cursor: pointer;
  }
  :nth-child(2) {
    color: white;
  }
`;

export const Content = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  gap: 3rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
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
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :nth-child(1) {
    font-weight: 600;
    min-width: 10rem;
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
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);
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
  z-index: 50;

  &:hover {
    background-color: #e56609;
  }
`;
