import errorImage from '../../assets/error.svg'

import * as S from './styles'

interface ErrorProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorComponent({ title, message, onRetry }: ErrorProps) {
  return (
    <S.Container>
      <S.Main>
        
        <img src={errorImage} alt="" />
        <h1>{title || 'Ocorreu um erro'}</h1>
        <p>{message || 'Aconteceu um erro inesperado' }</p>
        {onRetry && (
          <button>Tentar novamente</button>
        )}
      </S.Main>
    </S.Container>
  )
}