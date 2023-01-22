import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '1rem',
  borderRadius: '8px',
  backgroundColor: '$gray-700',
  border: '2px solid $gray-500',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'