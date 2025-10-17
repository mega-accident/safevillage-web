import styled from 'styled-components';

const STAGES = ['하', '중', '상', '최상'];
const COLORS = ['#35B644', '#EDBE00', '#F7710A', '#E43B3B'];
const PERCENTS = [3, 33.33, 64, 97];

const Container = styled.div`
  width: 100%;
  background: #f3f4f6;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
`;

const StageLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
`;

const StageLabel = styled.span`
  color: ${(props) => (props.$active ? props.$color : '#9ca3af')};
  font-size: ${(props) => (props.$active ? '1rem' : '0.75rem')};
  transition: color 150ms;
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 1rem;
  background: #d1d5db;
  border-radius: 100px;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: ${(props) => props.$percent}%;
    background: ${(props) => props.color};
    border-radius: 100px;
    transition: all 150ms;
    z-index: 5;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${(props) => props.$percent}%;
    width: 2rem;
    height: 2rem;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.15);
    transform: translate(-50%, -50%);
    transition: all 150ms;
    z-index: 20;
    pointer-events: none;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 10;
`;

const StageMarker = styled.div`
  position: absolute;
  top: 50%;
  left: ${(props) => props.$percent}%;
  width: 0.5rem;
  height: 0.5rem;
  background: #9ca3af;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none;
`;

export default function DangerSlider({ value = 1, onChange }) {
  const idx = value - 1;

  const handleChange = (e) => {
    const newValue = +e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Container>
      <StageLabels>
        {STAGES.map((s, i) => (
          <StageLabel key={s} $active={i === idx} $color={COLORS[i]}>
            {s}
          </StageLabel>
        ))}
      </StageLabels>
      <SliderWrapper $percent={PERCENTS[idx]} color={COLORS[idx]}>
        {PERCENTS.map((percent, i) => (
          <StageMarker key={i} $percent={percent} />
        ))}
        <StyledInput
          type="range"
          min="1"
          max="4"
          value={value}
          onChange={handleChange}
        />
      </SliderWrapper>
    </Container>
  );
}
