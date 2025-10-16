import * as S from './generated.style';
import GeneratedIcon from '../../../assets/generated.svg';

export default function Generated({ onClick }) {
  return (
    <S.Container>
      <S.Text>
        AI가 신고를 <span>모두 작성했어요!</span>
      </S.Text>
      <GeneratedIcon width={400} height={400} />
      <S.ReviewButton onClick={onClick}>신고 검토하기</S.ReviewButton>
    </S.Container>
  );
}
