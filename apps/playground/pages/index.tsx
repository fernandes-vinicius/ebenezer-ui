import { Button, Flex, Heading, Text, TextInput } from '@ebenezer-ui/react'

export default function Home() {
  return (
    <Flex
      justify="center"
      direction="column"
      gap="9"
      css={{
        height: '100vh',
        maxWidth: 600,
        margin: '0 auto',
        textAlign: 'center',
        padding: '0 $4',
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

      <Flex as="form" direction="column" gap="4">
        <TextInput placeholder="Email" type="email" />
        <TextInput placeholder="Password" type="password" />
        <Button>Submit</Button>
      </Flex>
    </Flex>
  )
}
