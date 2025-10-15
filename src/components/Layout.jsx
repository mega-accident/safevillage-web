import { Outlet } from 'react-router';
import BottomBar from './Bottombar/bottonmbar.jsx';
import { GlobalStyle } from '../styles/GlobalStyle.js';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; // 페이지 콘텐츠와 BottomBar를 상단/하단에 배치
  width: 100%;
  height: 100vh;
`;

function Layout() {
  return (
    <Container>
      <GlobalStyle />
      <Outlet /> {/* 중첩 라우트가 여기에 렌더링 */}
      <BottomBar />
    </Container>
  );
}

export default Layout;
