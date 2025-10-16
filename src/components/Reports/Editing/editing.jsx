import { useForm, Controller } from 'react-hook-form';
import CategoryDropdown from '../CategoryDropdown/category-dropdown';
import DangerSlider from '../DangerSlider/dangder-slider';
import * as S from './editing.style';
import axios from 'axios';
import { useNavigate } from 'react-router';

// 위험도를 숫자로 변환 (슬라이더용)
const DANGER_MAP = {
  하: 1,
  중: 2,
  상: 3,
  최상: 4,
};

// 위험도를 한글로 변환 (서버 전송용)
const DANGER_REVERSE_MAP = {
  1: '하',
  2: '중',
  3: '상',
  4: '최상',
};

export default function Editing({ reportData, capturedImages = [] }) {
  const navigate = useNavigate();

  // react-hook-form으로 폼 상태 관리
  // AI가 생성한 데이터를 기본값으로 설정
  const { control, handleSubmit, register } = useForm({
    defaultValues: {
      title: reportData?.title || '',
      description: reportData?.description || '',
      dangerDegree: DANGER_MAP[reportData?.dangerDegree] || 1,
      category: reportData?.category || '',
    },
  });

  // 폼 제출 처리 함수
  const onSubmit = async (data) => {
    try {
      // 1. 로그인하여 인증 토큰 받기
      // TODO: 추후 전역 상태 관리로 토큰 관리 개선 필요
      const loginResponse = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/signin`,
        {
          phone: '010-1234-5678',
          password: 'password123',
        },
      );

      // 2. FormData 객체 생성 (파일 업로드를 위해 필수)
      const formData = new FormData();
      formData.append('title', data.title); // 신고 제목
      formData.append('description', data.description); // 신고 내용
      formData.append('category', data.category); // 카테고리
      formData.append('dangerDegree', DANGER_REVERSE_MAP[data.dangerDegree]); // 위험도
      formData.append('lat', 35.662220350924564); // TODO: 실제 GPS 위도로 변경 필요
      formData.append('lon', 128.41424091691806); // TODO: 실제 GPS 경도로 변경 필요

      // 3. 카메라로 찍은 사진들을 FormData에 추가
      // blob: 브라우저가 파일을 다루는 형식
      capturedImages.forEach((blob, index) => {
        formData.append('images', blob, `report-${index}.jpg`);
      });

      // 4. 서버에 신고 데이터 전송
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/reports`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // 파일 업로드 형식
            Authorization: `Bearer ${loginResponse.data.accessToken}`, // 인증 토큰
          },
        },
      );

      // 5. 성공하면 생성된 신고 상세 페이지로 이동
      navigate(`/reports/${res.data.data.id}`);
    } catch (error) {
      // 에러 발생 시 콘솔에 로그 출력 후 사용자에게 알림
      console.error('신고 생성 실패:', error.response?.data || error.message);
      alert(
        `신고 생성 실패: ${error.response?.data?.message || error.message}`,
      );
    }
  };

  return (
    <>
      {/* handleSubmit: react-hook-form의 폼 제출 처리 함수 */}
      <S.EditingContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        {/* 현장 사진 미리보기 영역 */}
        <S.Title>현장 사진</S.Title>
        <S.PhotoContainer>
          <S.PhotoBox />
          <S.PhotoBox />
          <S.PhotoBox />
        </S.PhotoContainer>

        {/* 현장 위치 지도 */}
        <S.Title>현장 위치</S.Title>
        <S.LocationContainer />

        {/* 신고 제목 입력 */}
        <S.Title>신고 내용</S.Title>
        <S.ReportsTitleInput
          placeholder="제목을 입력하세요"
          {...register('title')} // register: input을 react-hook-form에 연결
        />

        {/* 신고 내용 입력 */}
        <S.ReportsContentInput
          placeholder="신고 내용을 입력하세요"
          rows={30}
          {...register('description')}
        />

        {/* 위험도 슬라이더 */}
        <S.Title>위험도</S.Title>
        <Controller
          name="dangerDegree"
          control={control}
          render={({ field }) => (
            <DangerSlider value={field.value} onChange={field.onChange} />
          )}
        />

        {/* 카테고리 드롭다운 */}
        <S.Title>카테고리</S.Title>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <CategoryDropdown value={field.value} onChange={field.onChange} />
          )}
        />

        {/* 제출 버튼 */}
        <S.SubmitButton type="submit">수정 완료</S.SubmitButton>
      </S.EditingContainer>
    </>
  );
}
