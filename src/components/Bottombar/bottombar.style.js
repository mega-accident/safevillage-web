import { Link } from 'react-router';
import styled from 'styled-components';

export const BottomBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-radius: 1rem 1rem 0 0;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const Tab = styled(Link)`
  font-size: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${({ $active }) =>
    $active ? '#F7710A' : '#888888'}; // 활성 탭은 주황색, 비활성 탭은 회색
`;
