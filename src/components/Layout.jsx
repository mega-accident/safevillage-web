import { Outlet } from 'react-router';
import BottomBar from './Bottombar/bottonmbar.jsx';
import { GlobalStyle } from '../styles/GlobalStyle.js';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
`;

// bottombar 제외한 나머지 영역 고정 크기 설정
const Content = styled.div`
  flex: 1;
  overflow: auto;
`;

function Layout() {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <Outlet /> {/* 중첩 라우트가 여기에 렌더링 */}
      </Content>
      <BottomBar />
    </Container>
  );
}

export default Layout;
