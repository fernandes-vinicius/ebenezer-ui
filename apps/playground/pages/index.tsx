import { Container, Flex, Heading, Text } from '@ebenezer-ui/react'

export default function Home() {
  return (
    <Container>
      <Flex
        css={{ height: '$h-screen', textAlign: 'center' }}
        direction="column"
        justify="center"
        gap="9"
      >
        <Heading as="h1" size={{ '@initial': 'lg', '@lg': '2xl' }}>
          👋 Hi, I&apos;m Ebenezer UI
        </Heading>

        <Text css={{ color: '$gray-500' }}>
          Ever find yourself wasting hours of your time creating and tweaking UI
          components in your React project? Ever felt frustrated with having to
          deal with compatibility issues and design issues across different
          browsers?
        </Text>

        <Text css={{ color: '$gray-500' }}>
          Ebenezer UI is a library of React components built with Stitches that
          solves all these problems for you. 🎉
        </Text>
      </Flex>
    </Container>
  )
}
