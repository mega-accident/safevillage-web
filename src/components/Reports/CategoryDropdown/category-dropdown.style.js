import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownButton = styled.button`
  width: 100%;
  height: 4rem;
  padding: 1rem 1.5rem;
  border: 2px solid #c4c4c4;
  border-radius: 1rem;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.2s;
`;

export const SelectedText = styled.span`
  color: #333;
`;

export const Arrow = styled.span`
  color: #666;
  font-size: 1rem;
  transition: transform 0.2s;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 1rem);
  left: 0;
  width: 100%;
  background: #fff;
  border: 2px solid #c4c4c4;
  border-radius: 1rem;
  list-style: none;

  margin: 0;
  max-height: 30rem;
  overflow-y: auto;
  z-index: 20;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 1.5rem 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.$isSelected ? '#f0f0f0' : '#fff')};
  color: #333;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f5f5f5;
  }
`;
