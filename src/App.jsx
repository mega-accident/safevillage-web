import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BottomNav from "./pages/BottomNav";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f7f7f7;
`;

const Box = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid #000;
  border-radius: 40px;
  background: #fff;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: centeer;
  justify-content: center;
  font-size: 2rem;
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <BottomNav />
      </Box>
    </Wrapper>
  );
}
export default App;
