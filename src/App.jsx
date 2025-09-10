import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  height: 100vh;
  width: 30%;
  border: 1px solid #000;
`;

function App() {
  return (
    <Wrapper>
      <Box>안전 마을</Box>
    </Wrapper>
  );
}
export default App;
