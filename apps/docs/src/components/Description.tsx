import { ReactNode } from 'react'
import { Text } from '@ebenezer-ui/react'

export function Description({ children }: { children?: ReactNode }) {
  return (
    <Text size="lg" css={{ color: '#6B7280', margin: '2rem 0' }}>
      {children}
    </Text>
  )
}
