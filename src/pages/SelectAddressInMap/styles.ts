import { Box } from "../../components/Box";
import { keyframes, styled } from "../../styles";

export const Container = styled(Box, {
  width: '100%',
  height: '100%',
  maxWidth: '300px',
  maxHeight: '710px',
  overflowY: 'auto',
  overflowX: 'hidden',

  position: 'fixed',
  left: 10,
  top: 100,

  img: {
    width: 300,
    objectFit: 'cover',
  },

  '> h3': {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '$white',
    marginTop: '1rem',
  },

  '> p': {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '$gray-600',
  },

  '> strong': {
    fontSize: '1rem',
    marginTop: '1rem',
    display: 'block',
  }

})

export const Divider = styled('hr', {
  width: '100%',
  marginTop: '1.5rem',
  border: '1px solid $gray-500',
})

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  fontSize: '1rem',
  marginTop: '1.5rem',
  width: '100%',
  boxSizing: 'border-box',
  fontWeight: 700,
  color: '$white',
  backgroundColor: '$green-500',
  padding: '0.5rem 1rem',
  borderRadius: '6px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    filter: 'brightness(0.9)'
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$green-500',
      },
      secondary: {
        backgroundColor: 'transparent',
        border: '2px solid $gray-500',
        fontWeight: 400,
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }

})

const effect = keyframes({
  '0%': { opacity: 0 },
  '50%': { opacity: 0.5, backgroundColor: '$gray-100', borderRadius: 6 },
  '100%': { opacity: 1 }
})

export const Address = styled('span', {
  fontSize: '1rem',
  fontWeight: 400,
  color: '$gray-600',
  marginTop: '0.5rem',
  display: 'block',

  animation: `${effect} 0.8s ease-out`,
  animationDelay: '0.8s',
})