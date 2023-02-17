import { Flex, FlexProps } from './Flex'

export interface CenterProps extends FlexProps {}

export function Center(props: CenterProps) {
  const { justify = 'center', align = 'center', ...rest } = props

  return <Flex {...rest} justify={justify} align={align} />
}

Center.displayName = 'Center'
