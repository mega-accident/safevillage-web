import styled from "styled-components";

// 이 페이지에서만 사용할 Wrapper와 Box 컴포넌트를 새로 정의
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Box = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column; /* 세로 정렬을 위해 추가 */
  justify-content: center; /* 박스 세로 중앙 정렬 */
  align-items: center; /* 박스 가로 중앙 정렬 */
  font-size: 2rem;
`;

const Message = styled.h2`
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
`;
const BlackText = styled.span`
  color: black;
`;

const OrangeText = styled.span`
  color: orange;
`;

function LoadingPage() {
  return (
    <Wrapper>
      <Box>
        <Message>
          <BlackText>
            AI가 사진을 바탕으로 신고를 <br />
            자동 작성중이에요!
          </BlackText>
          {/* <br /> */}
          {/* <OrangeText>신고를 자동 작성</OrangeText>
          <BlackText>중이에요!</BlackText> */}
        </Message>
      </Box>
    </Wrapper>
  );
}

export default LoadingPage;
