import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { keyframes, styled } from '../../styles'

const scaleIn = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
})

export const Content = styled(TooltipPrimitive.Content, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  padding: '$3 $4',
  backgroundColor: '$gray900',
  borderRadius: '$lg',
  boxShadow: '$md',

  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$short',
  textAlign: 'center',
  letterSpacing: '-0.09px',
  color: '$gray100',

  zIndex: '$40',
  cursor: 'default',
  userSelect: 'none',

  animation: `${scaleIn} 0.1s ease-out`,
})

export const Arrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
  width: '$4',
  height: '$2',
})
