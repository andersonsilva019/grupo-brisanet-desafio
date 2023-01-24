import { styled } from '../../styles'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '1220px',
  margin: '0 auto 3rem',

  h1: {
    marginTop: '3rem',
    color: '$white',
  }
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const GridContainer = styled('div', {
  marginTop: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '0.5rem'
})

export const PaginationContainer = styled('div', {
  margin: '2rem 0 10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  '.rc-pagination-next': {
    backgroundColor: '$gray-500',
    borderColor: '$gray-500',

    '&:hover, &:focus': {
      borderColor: '$green-500',
      color: '$white',
      
      button: {
        borderColor: '$green-500',
        backgroundColor: 'inherit',
        color: 'inherit',
      }
    },

    button: {
      backgroundColor: 'inherit',
      borderColor: 'inherit',
      color: '$white',
    }
  },

  '.rc-pagination-prev': {
    backgroundColor: '$gray-500',
    borderColor: '$gray-500',

    '&:hover, &:focus': {
      borderColor: '$green-500',
      color: '$white',

      button: {
        backgroundColor: 'inherit',
        borderColor: 'inherit',
        color: 'inherit',
      }
    },


    button: {
      backgroundColor: 'inherit',
      borderColor: 'inherit',
      color: '$white',
    }
  },

  '.rc-pagination-item': {
    backgroundColor: '$gray-500',
    borderColor: '$gray-500',
    borderRadius: 6,

    '&:hover, &:focus': {
      borderColor: '$green-500',
      color: '$white',

      a: {
        color: '$white',
      }
    },

    a: {
      color: '$white',
    }
  },

  '.rc-pagination-item-active': {
    backgroundColor: '$green-500',
    borderColor: '$green-500',
  }
})