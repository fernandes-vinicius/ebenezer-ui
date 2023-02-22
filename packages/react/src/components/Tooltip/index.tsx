import { ElementRef, forwardRef, ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { Arrow, Content } from './styles'

export interface TooltipProps {
  text: string
  children: ReactNode
}

const Trigger = TooltipPrimitive.Trigger

export const Tooltip = forwardRef<ElementRef<typeof Trigger>, TooltipProps>(
  ({ text, children, ...props }, ref) => {
    return (
      <TooltipPrimitive.Provider delayDuration={100}>
        <TooltipPrimitive.Root>
          <Trigger ref={ref} {...props} asChild>
            <span tabIndex={0}>{children}</span>
          </Trigger>

          <TooltipPrimitive.Portal>
            <Content sideOffset={20}>
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
