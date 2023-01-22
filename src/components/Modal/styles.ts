import { styled } from '../../styles'
import { Box } from '../Box'

export const ModalContainer = styled('div', {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,


  variants: {
    isOpen: {
      true: {
        opacity: 1,
        'pointer-events': 'auto',
        transform: 'translateY(0)',
      },
      false: {
        opacity: 0,
        'pointer-events': 'none',
        transform: 'translateY(100%)',
      }
    }
  }
})

export const ModalContent = styled('div', {
  backgroundColor: '$gray-700',
  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ComicImage = styled('img', {
  width: 350,
  height: 530,
})

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 99,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Header = styled('header', {
  marginLeft: 'auto',
})

export const CloseButton = styled('button', {
  all: 'unset',

  cursor: 'pointer',
})

export const Content = styled(Box, {
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,

  maxWidth: 800,
  width: '100%',
  paddingBottom: '2rem',

  margin: '0 auto',
})

export const Main = styled('main', {
  display: 'flex',
  width: '100%',
  gap: '1.5rem',
})

export const ComicDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  '> h2': {
    fontSize: '2rem',
    fontWeight: 700,
    color: '$white',
  },

  '> p': {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '$gray-600',
  }
})

export const ComicCreators = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '3rem',
  marginTop: '1rem',
})

export const Creator = styled('div', {
  fontSize: '1.5rem',
  color: '$white',
  fontWeight: 700,

  span: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '$gray-600'
  }
})

