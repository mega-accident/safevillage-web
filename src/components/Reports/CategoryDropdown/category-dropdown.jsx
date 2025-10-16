import { useState } from 'react';
import * as S from './category-dropdown.style';

const CATEGORIES = [
  '시설물 파손',
  '도로 위험',
  '환경 오염',
  '안전 위협',
  '기타',
];

export default function CategoryDropdown({ value = '', onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category) => {
    if (onChange) {
      onChange(category);
    }
    setIsOpen(false);
  };

  const displayValue = value || '카테고리 선택';

  return (
    <S.Container>
      <S.DropdownButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <S.SelectedText>{displayValue}</S.SelectedText>
        <S.Arrow $isOpen={isOpen}>▼</S.Arrow>
      </S.DropdownButton>

      {isOpen && (
        <S.DropdownList>
          {CATEGORIES.map((category) => (
            <S.DropdownItem
              key={category}
              onClick={() => handleSelect(category)}
              $isSelected={value === category}
            >
              {category}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.Container>
  );
}
