import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 40px;
  border-radius: 20px 20px 0 0;
  box-shadow: 1px 1px 1px 1px;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  img {
    width: 25px;
    height: 25px;
  }
  font-size: 15px;
`;
const BottomNav = () => {
  return (
    <NavWrapper>
      <List>
        <img src="/icon-list.svg" alt="" />
        목록
      </List>
      <List>
        <img src="icon-map.svg" />홈
      </List>
      <List>
        <img src="icon-my.svg" />
        프로필
      </List>
    </NavWrapper>
  );
};
export default BottomNav; //다른 곳에도 링크 부를 수 있도록
