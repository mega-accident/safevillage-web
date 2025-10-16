import { useRef, useEffect } from 'react';
import * as S from './reports-camera.style';

export default function ReportsCamera({ stream, onCapture, onStreamReady }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleCapture = async () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);

      const imageData = canvas.toDataURL('image/jpeg', 1);

      // 이미지를 Blob으로 변환
      const response = await fetch(imageData);
      const blob = await response.blob();

      onCapture(blob);
    }
  };

  return (
    <>
      <S.Container>
        <S.Video ref={videoRef} autoPlay playsInline />
        <S.CaptureButtonWrapper>
          <S.CaptureButton onClick={handleCapture}>
            <S.CaptureButtonInner />
          </S.CaptureButton>
        </S.CaptureButtonWrapper>
      </S.Container>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  );
}
