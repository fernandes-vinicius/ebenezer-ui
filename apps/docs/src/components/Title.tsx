import { ReactNode } from 'react'
import { Heading } from '@ebenezer-ui/react'

export function Title({ children }: { children?: ReactNode }) {
  return (
    <Heading
      as="h1"
      size="xl"
      css={{ color: '$gray900', marginBottom: '0.5rem' }}
    >
      {children}
    </Heading>
  )
}
