import styled from 'styled-components';

export const EditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  gap: 3rem;
  padding: 4rem;
  padding-bottom: 22rem;
  overflow-y: auto;
`;

export const Title = styled.h2`
  display: inline-block;
  text-align: left;
  width: 100%;
  font-size: 4rem;
  font-weight: 500;
  flex-shrink: 0;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  gap: 2rem;
  width: calc(100% + 8rem);
  margin: 0 -4rem;
  padding-left: 4rem;
  height: 28rem;
  flex-shrink: 0;
`;

export const PhotoBox = styled.div`
  width: 24rem;
  height: 24rem;
  flex-shrink: 0;
  border-radius: 3rem;
  border: 2px solid #c4c4c4;
  background-color: #e0e0e0;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36rem;
  border-radius: 3rem;
  border: 2px solid #c4c4c4;
  background-color: #e0e0e0;
  flex-shrink: 0;
`;

export const ReportsTitleInput = styled.input`
  width: 100%;
  height: 10rem;
  padding: 3rem;
  border: 2px solid #c4c4c4;
  border-radius: 2rem;
  background-color: #fff;
  font-size: 2.5rem;
  flex-shrink: 0;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ReportsContentInput = styled.textarea`
  width: 100%;
  height: 32rem;
  padding: 3rem;
  border: 2px solid #c4c4c4;
  border-radius: 2rem;
  background-color: #fff;
  font-size: 2.5rem;
  resize: none;
  flex-shrink: 0;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
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
