import { styled } from "../../styles";
import { Box } from "../Box";

export const Container = styled('div', {
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Main = styled(Box, {
  width: '100%',
  maxWidth: '500px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  '> h1': {
    fontSize: '2rem',
    margin: '1rem 0'
  },

  '> p': {
    fontSize: '1rem',
    color: '$gray-600',
    textAlign: 'center'
  },

  img: {
    width: '250px'
  },

  button: {
    all: 'unset',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1.5rem',
    width: '100%',
    fontWeight: 700,
    boxSizing: 'border-box',
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
  }
})