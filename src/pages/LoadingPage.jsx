import { Wrapper, Box } from "../components/Layout";
import styled from "styled-components";

const Message = styled.h2`
  display: flex;
  font-size: 24px;
  align-items: center;
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
          <BlackText>AI가 사진을 바탕으로</BlackText>
          <br />
          <OrangeText>신고를 자동 작성</OrangeText>
          <BlackText>중이에요!</BlackText>
        </Message>
      </Box>
    </Wrapper>
  );
}
export default LoadingPage;
