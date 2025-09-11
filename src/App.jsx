import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./pages/BottomNav";
import { GlobalStyle } from "./styles/GlobalStyle";

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
  align-items: centeer;
  justify-content: center;
  font-size: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box>
          <BottomNav />
        </Box>
      </Wrapper>
    </>
  );
}
export default App;
