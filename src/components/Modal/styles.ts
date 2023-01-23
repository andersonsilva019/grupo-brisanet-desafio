import { styled, keyframes } from '../../styles'
import { Box } from '../Box'

const modalIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const modalOut = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(-50px)',
  },
})


export const ModalContainer = styled('div', {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  zIndex: 100,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  variants: {
    isOpen: {
      true: {
        animation: `${modalIn} 200ms ease-in`,
      },
      false: {
        animation: `${modalOut} 200ms ease-out`,
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
  // position: 'relative',
  // top: '50%',
  // transform: 'translateY(-50%)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,

  maxWidth: 1100,
  width: '100%',
  paddingBottom: '2rem',

  margin: '0 auto',

  footer: {
    width: '100%',
    marginTop: '1rem',
    borderTop: '2px solid $gray-500',
    padding: '1rem 0 0',
    display: 'flex',
    justifyContent: 'flex-end',

    a: {
      all: 'unset',
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: 700,
      color: '$white',
      backgroundColor: '$green-500',
      padding: '1rem',
      borderRadius: '6px',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:hover': {
        filter: 'brightness(0.9)'
      }
    }
  }
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

