import styled from 'styled-components';

export const DangerDegreeLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 4rem;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem 0.5rem;
  font-size: 2rem;
  background-color: ${(props) =>
    props.$degree === '하'
      ? '#35B644'
      : props.$degree === '중'
        ? '#EDBE00'
        : props.$degree === '상'
          ? '#F7710A'
          : props.$degree === '최상'
            ? '#E43B3B'
            : '#999999'};
  color: white;
`;

export const StatusLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 4rem;
  border-radius: 1rem;
  text-align: center;
  padding: 1rem 0.5rem;
  font-size: 2rem;
  background-color: ${(props) =>
    props.$status === '대기'
      ? '#8A8A8A'
      : props.$status === '접수'
        ? '#0F6FED'
        : props.$status === '처리중'
          ? '#F7710A'
          : props.$status === '처리완료'
            ? '#35B644'
            : '#999999'};
  color: white;
`;
