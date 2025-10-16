import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CaptureButtonWrapper = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const CaptureButton = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 4px solid white;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:active {
    transform: scale(0.95);
  }
`;

export const CaptureButtonInner = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  background-color: white;
`;
