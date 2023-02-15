import { ReactNode } from 'react'
import { Text } from '@ebenezer-ui/react'

export function Description({ children }: { children?: ReactNode }) {
  return (
    <Text size="lg" css={{ color: '$gray500', margin: '$6 $0' }}>
      {children}
    </Text>
  )
}
