import { styled } from '../../styles'

export const Container = styled('div', {
  width: '100%',
  maxWidth: '1220px',
  margin: '0 auto 3rem',

  h1: {
    marginTop: '3rem',
    color: '$white',
  }
})

export const GridContainer = styled('div', {
  marginTop: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '0.5rem'
})