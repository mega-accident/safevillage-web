import styled from 'styled-components';

export const EditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;
  padding-bottom: 8rem;
  overflow-y: auto;
  gap: 1rem;
  font-size: 1rem;
`;

export const Title = styled.h2`
  display: inline-block;
  text-align: left;
  width: 100%;
  font-weight: 500;
  flex-shrink: 0;
`;

export const PhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: auto;
  gap: 1rem;
  width: calc(100% + 8rem);
  margin: 0 -4rem;
  padding-left: 4rem;
  flex-shrink: 0;
`;

export const PhotoBox = styled.div`
  width: 8rem;
  height: 8rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 2px solid #c4c4c4;
  background-color: #e0e0e0;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 16rem;
  border-radius: 1rem;
  border: 2px solid #c4c4c4;
  background-color: #e0e0e0;
  flex-shrink: 0;
`;

export const ReportsTitleInput = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid #c4c4c4;
  border-radius: 1rem;
  background-color: #fff;
  flex-shrink: 0;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ReportsContentInput = styled.textarea`
  width: 100%;
  height: 12rem;
  padding: 1rem;
  border: 2px solid #c4c4c4;
  border-radius: 1rem;
  background-color: #fff;
  resize: none;
  flex-shrink: 0;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const SubmitButton = styled.button`
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

  &:hover {
    background-color: #e56609;
  }
`;
