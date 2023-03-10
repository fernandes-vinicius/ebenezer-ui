import { ElementRef, forwardRef, ReactNode } from 'react'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { Arrow, Content } from './styles'

type TooltipRef = ElementRef<typeof TooltipPrimitive.Trigger>

export interface TooltipProps {
  text: string
  children: ReactNode
}

export const Tooltip = forwardRef<TooltipRef, TooltipProps>(
  ({ text, children, ...rest }, ref) => {
    return (
      <TooltipPrimitive.Provider delayDuration={100}>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger ref={ref} {...rest} asChild>
            {children}
          </TooltipPrimitive.Trigger>

          <TooltipPrimitive.Portal>
            <Content sideOffset={8}>
              {text}
              <Arrow />
            </Content>
          </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    )
  },
)

Tooltip.displayName = 'Tooltip'
