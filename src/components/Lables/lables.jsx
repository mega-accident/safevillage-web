import styled from 'styled-components';

export const DangerDegreeLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.25rem;
  height: 2rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 0.75rem;
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

export const StatusLabel = styled(DangerDegreeLabel)`
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
`;
