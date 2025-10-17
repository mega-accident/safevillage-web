import * as S from './bottombar.style.js';
import ListIcon from '../../assets/list.svg';
import MapIcon from '../../assets/map.svg';
import ProfileIcon from '../../assets/profile.svg';
import { useLocation } from 'react-router';

function BottomBar() {
  const location = useLocation();

  return (
    <S.BottomBarContainer>
      {/* 목록 탭 */}
      <S.Tab to={'/list'} $active={location.pathname.startsWith('/list')}>
        <ListIcon width={28} height={28} />
        목록
      </S.Tab>

      {/* 홈 탭 - 루트, 지도, 신고 페이지에서 활성화 */}
      <S.Tab
        to={'/'}
        $active={
          location.pathname === '/' ||
          location.pathname.startsWith('/map') ||
          location.pathname.startsWith('/reports') // 신고 상세 페이지도 홈 탭으로 간주
        }
      >
        <MapIcon width={28} height={28} />홈
      </S.Tab>

      {/* 프로필 탭 */}
      <S.Tab to={'/profile'} $active={location.pathname.startsWith('/profile')}>
        <ProfileIcon width={28} height={28} />
        프로필
      </S.Tab>
    </S.BottomBarContainer>
  );
}

export default BottomBar;
