import { keyframes, styled } from '../../styles'

export const ComicTitle = styled('strong', {
  fontSize: '1rem',
  color: '$white',
  display: 'block',
  marginTop: '0.5rem',
})

export const ComicCreators = styled('span', {
  fontSize: '0.875rem',
  color: '$gray-600',
  display: 'block',
  marginTop: '0.5rem',
})

const placeholderShimmer = keyframes({
  from: {
    backgroundPosition: '-40rem 0',
  },
  to: {
    backgroundPosition: '40rem 0',
  }
})

export const ImageBox = styled('div', {
  height: 320,
  width: '100%',
  background: '#f6f7f8',
  backgroundImage: 'linear-gradient( to right, #f6f7f8 0%, #ccc 20%, #f6f7f8 40%, #f6f7f8 100%)',
  backgroundSize: '80rem 14rem',
  animation: `${placeholderShimmer} 1s linear infinite forwards`,
})