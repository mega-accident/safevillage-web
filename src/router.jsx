import { createBrowserRouter } from 'react-router';
import App from './App';
import LoginPage from './pages/Login';
import Layout from './components/Layout';
import MapPage from './pages/Map/map.jsx';
import ListPage from './pages/List/list.jsx';
import ProfilePage from './pages/Profile/profile.jsx';
import ReportsPage from './pages/Reports/reports.jsx';
import ReportsCreatePage from './pages/Reports/Create/reports-create.jsx';

/**
 * 라우터 설정
 *
 * App: 인증 관련 페이지 (BottomBar X)
 * Layout: 메인 페이지 (BottomBar O)
 */
const router = createBrowserRouter([
  // 인증 레이아웃 - BottomBar X
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <LoginPage /> }, // /login
      { path: 'reports/:id', element: <ReportsPage /> },
      { path: 'reports/create', element: <ReportsCreatePage /> },
    ],
  },

  // 메인 레이아웃 - BottomBar O
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MapPage /> }, // / → 기본 페이지 (지도)
      { path: 'list', element: <ListPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
]);

export default router;
