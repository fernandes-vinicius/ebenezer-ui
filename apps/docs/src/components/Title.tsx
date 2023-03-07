import { ReactNode } from 'react'
import { Heading } from '@ebenezer-ui/react'

export function Title({ children }: { children?: ReactNode }) {
  return (
    <Heading as="h1" size="xl" css={{ color: '$gray-900', marginBottom: '$2' }}>
      {children}
    </Heading>
  )
}
