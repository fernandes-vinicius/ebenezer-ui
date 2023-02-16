import { ReactNode } from 'react'

export interface VisuallyHiddenProps {
  children?: ReactNode
}

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  if (children) {
    return null
  }
}

VisuallyHidden.displayName = 'VisuallyHidden'
