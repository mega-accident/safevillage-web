import * as S from './generating.style';
import GeneratingIcon from '../../../assets/generating.svg';

export default function Generating() {
  return (
    <S.Container>
      <S.Text>
        AI가 사진을 바탕으로
        <br /> <span>신고를 자동 작성</span> 중이에요!
      </S.Text>
      <GeneratingIcon width={200} height={200} />
      <S.WaitingText>잠시만 기다려주세요...</S.WaitingText>
    </S.Container>
  );
}
