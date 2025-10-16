import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import * as S from './reports.style';
import LeftArrow from '../../assets/arrow-left.svg';
import { DangerDegreeLabel, StatusLabel } from '../../components/Lables/lables';
import DangerIcon from '../../assets/danger.svg';

export default function ReportsPage() {
  // URL에서 신고 ID 가져오기
  const { id } = useParams();
  const navigate = useNavigate();

  // 상태 관리
  const [report, setReport] = useState(null); // 신고 데이터
  const [loading, setLoading] = useState(true); // 로딩 상태

  // 컴포넌트가 마운트되면 신고 데이터 불러오기
  useEffect(() => {
    const fetchReport = async () => {
      try {
        // 1. 로그인하여 인증 토큰 받기
        // 전역 상태 관리로 토큰 관리 개선 필요
        const loginResponse = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/auth/signin`,
          {
            phone: '010-1234-5678',
            password: 'password123',
          },
        );

        // 2. 토큰을 사용하여 신고 상세 정보 조회
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/reports/${id}`,
          {
            headers: {
              Authorization: `Bearer ${loginResponse.data.accessToken}`,
            },
          },
        );

        // 3. 서버 응답 구조: {success: true, data: {...}}
        setReport(res.data.data);
      } catch (error) {
        console.error('신고 조회 실패:', error);
        alert('신고를 불러올 수 없습니다.');
        navigate('/'); // 에러 시 홈으로 이동
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    fetchReport();
  }, [id, navigate]); // id나 navigate가 변경될 때마다 실행

  // 로딩 중일 때
  if (loading) {
    return (
      <S.Container>
        <S.Header>신고 상세</S.Header>
        <S.Content>로딩 중...</S.Content>
      </S.Container>
    );
  }

  // 데이터가 없을 때
  if (!report) return null;

  return (
    <S.Container>
      <S.Header>
        {/* 뒤로가기 버튼 */}
        <LeftArrow width={60} height={60} onClick={() => navigate('/')} />
        신고 상세
        <LeftArrow />
      </S.Header>
      <S.Content>
        {/* 신고 상태 라벨 (대기, 처리중, 완료 등) */}
        <StatusLabel $status={report.status}>{report.status}</StatusLabel>

        {/* 신고 제목 */}
        <S.Title>{report.title}</S.Title>

        {/* 신고 사진 (있을 경우에만 표시) */}
        {report.images && report.images.length > 0 && (
          <S.Image>
            <img src={report.images[0]} alt="신고 이미지" />
          </S.Image>
        )}

        {/* 위치 정보 */}
        <S.Location>
          <span>위치</span>
          <span>
            위도: {report.lat.toFixed(6)}, 경도: {report.lon.toFixed(6)}
          </span>
        </S.Location>
        <S.LocationBox></S.LocationBox>

        {/* 카테고리 */}
        <S.Category>
          <span>카테고리</span>
          <span>{report.category}</span>
        </S.Category>

        {/* 위험도 */}
        <S.DangerDegree>
          <span>위험도</span>
          <DangerDegreeLabel $degree={report.dangerDegree}>
            {report.dangerDegree}
          </DangerDegreeLabel>
        </S.DangerDegree>

        {/* 신고 내용 */}
        <S.Description>
          <span>설명</span>
          <span>{report.description}</span>
        </S.Description>

        {/* 위험해요 버튼 (위험도 카운트 표시) */}
        <S.DangerButton>
          <DangerIcon width={52} height={52} />
          위험해요 ({report.dangerCount})
        </S.DangerButton>
      </S.Content>
    </S.Container>
  );
}
