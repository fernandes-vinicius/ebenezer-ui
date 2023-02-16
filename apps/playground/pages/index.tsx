import { Button, Flex, Heading, Text } from '@ebenezer-ui/react'

export default function Home() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap="9"
      css={{
        height: '100vh',
        maxWidth: 600,
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <Heading as="h1" size="2xl">
        👋 Hi, I&apos;m Ebenezer UI
      </Heading>

      <Text css={{ color: '$gray500' }}>
        Ever find yourself wasting hours of your time creating and tweaking UI
        components in your React project? Ever felt frustrated with having to
        deal with compatibility issues and design issues across different
        browsers?
      </Text>

      <Text css={{ color: '$gray500' }}>
        Ebenezer UI is a library of React components built with Stitches that
        solves all these problems for you. 🎉
      </Text>

      <Button variant="solid">Click me</Button>
    </Flex>
  )
}
