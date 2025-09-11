import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NavWrapper = styled.nav`
  display: flex;
`;

const BottomNav = () => {
  return (
    <NavWrapper>
      <div>목록</div>
      <div>홈</div>
      <div>프로필</div>
    </NavWrapper>
  );
};
export default BottomNav; //다른 곳에도 링크 부를 수 있도록
