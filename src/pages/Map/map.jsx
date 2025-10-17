import * as S from './map.style';
import EmergencyBtn from '../../assets/emergency.svg';

export default function MapPage() {
  return (
    <S.Container>
      map
      <S.FloatingButton to="/reports/create">
        <EmergencyBtn width={31} height={33} />
      </S.FloatingButton>
    </S.Container>
  );
}
