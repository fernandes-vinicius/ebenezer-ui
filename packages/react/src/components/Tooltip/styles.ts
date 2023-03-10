import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { keyframes, styled } from '@/styles'

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
  backgroundColor: '$gray-900',
  borderRadius: '$lg',
  boxShadow: '$md',

  fontFamily: '$default',
  fontWeight: '$semibold',
  fontSize: '$sm',
  lineHeight: '$5',
  textAlign: 'center',
  letterSpacing: '$normal',
  color: '$white',

  zIndex: '$40',
  cursor: 'default',
  userSelect: 'none',

  animation: `${scaleIn} 0.2s ease-in-out`,
})

export const Arrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray-900',

  width: '$4',
  height: '$2',
})
