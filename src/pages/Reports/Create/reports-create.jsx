import { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './reports-create.style';
import ReportsCamera from '../../../components/Reports/ReportsCamera/reports-camera';
import Generating from '../../../components/Reports/Generating/generating';
import Generated from '../../../components/Reports/Generated/generated';
import Editing from '../../../components/Reports/Editing/editing';

export default function ReportsCreatePage() {
  // 카메라 스트림 상태
  const [stream, setStream] = useState(null);

  // 신고 생성 단계 관리
  // notGenerated: 사진 촬영 대기
  // generating: AI 분석 중
  // generated: 분석 완료, 결과 확인
  // editing: 신고 내용 수정
  const [generate, setGenerate] = useState('notGenerated');

  // AI가 분석한 신고 데이터
  const [reportData, setReportData] = useState(null);

  // 카메라로 촬영한 사진들 (Blob 형식)
  const [capturedImages, setCapturedImages] = useState([]);

  // 컴포넌트가 마운트될 때 카메라 시작
  // 컴포넌트가 언마운트될 때 카메라 정리
  useEffect(() => {
    startCamera();
    return () => {
      stopCamera(); // cleanup: 메모리 누수 방지
    };
  }, []);

  // 카메라 시작 함수
  const startCamera = async () => {
    try {
      // 후면 카메라 권한 요청 및 스트림 가져오기
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }, // 후면 카메라 사용
        audio: false, // 오디오 불필요
      });
      setStream(mediaStream);
    } catch (error) {
      console.error('카메라 접근 오류:', error);
      alert('카메라를 사용할 수 없습니다. 권한을 확인해주세요.');
    }
  };

  // 카메라 정지 함수
  const stopCamera = () => {
    if (stream) {
      // 모든 트랙(비디오, 오디오)을 중지하여 카메라 해제
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  // 사진 촬영 처리 함수
  const handleCapture = async (blob) => {
    setGenerate('generating'); // AI 분석 단계로 전환
    stopCamera(); // 카메라 중지

    // 찍은 사진을 배열에 저장 (여러 장 촬영 가능)
    setCapturedImages((prev) => [...prev, blob]);

    try {
      // FormData에 사진 파일 추가
      const formData = new FormData();
      formData.append('file', blob, 'report.jpg');

      // AI 서버에 사진 전송하여 분석 요청
      const analyzeRes = await axios.post(
        `${import.meta.env.VITE_AI_SERVER_URL}/analyze`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );

      // 분석 성공 시 데이터 저장하고 다음 단계로
      if (analyzeRes) {
        setReportData(analyzeRes.data); // AI가 생성한 신고 내용
        setGenerate('generated'); // 결과 확인 단계로 전환
      }
    } catch (error) {
      console.error('AI 분석 오류:', error);
      alert('신고 분석에 실패했습니다. 다시 시도해주세요.');
      setGenerate('notGenerated'); // 다시 촬영 단계로
      startCamera(); // 카메라 재시작
    }
  };

  return (
    <S.Container>
      {/* 1단계: 사진 촬영 */}
      {generate === 'notGenerated' && (
        <ReportsCamera stream={stream} onCapture={handleCapture} />
      )}

      {/* 2단계: AI 분석 중 */}
      {generate === 'generating' && <Generating />}

      {/* 3단계: 분석 결과 확인 */}
      {generate === 'generated' && (
        <Generated onClick={() => setGenerate('editing')} />
      )}

      {/* 4단계: 신고 내용 수정 및 제출 */}
      {generate === 'editing' && (
        <Editing reportData={reportData} capturedImages={capturedImages} />
      )}
    </S.Container>
  );
}
