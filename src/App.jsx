import styled from "styled-components";
import BottomNav from "./components/BottomNav";
import { GlobalStyle } from "./styles/GlobalStyle";
import LoadingPage from "./pages/loadingPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

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
  align-items: flex-end;
  justify-content: center;
  font-size: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Box>
          <Routes>
            <Route path="/" element={<LoadingPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
