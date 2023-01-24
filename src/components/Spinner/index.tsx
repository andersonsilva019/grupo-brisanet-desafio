import PulseLoader from 'react-spinners/PulseLoader'

import * as S from './styles'

interface SpinnerProps {
  color?: string;
  size?: number;
}

export function Spinner({ color, size }: SpinnerProps) {
  return (
    <S.Container>
      <S.Main>
        <PulseLoader color={color} size={size} />
      </S.Main>
    </S.Container>
  )
}