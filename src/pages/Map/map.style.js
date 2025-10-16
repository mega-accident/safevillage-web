import { Link } from 'react-router';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
`;

export const FloatingButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  border: 8px solid white;
  background-color: #f7710a;
  color: white;
  padding: 0;
  cursor: pointer;
`;
