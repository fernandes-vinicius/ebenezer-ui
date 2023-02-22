import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  PasswordInput,
  Text,
  TextInput,
  Tooltip,
} from '@ebenezer-ui/react'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type FormData = z.infer<typeof formSchema>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    console.log(data)
  }

  const hasEmailError = !!errors.email
  const hasPasswordError = !!errors.password

  return (
    <Container size="sm">
      <Flex
        css={{ height: '100vh', textAlign: 'center' }}
        direction="column"
        justify="center"
        gap="9"
      >
        <Heading as="h1" size={{ '@initial': 'lg', '@lg': '2xl' }}>
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

        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <TextInput
              id="email"
              type="email"
              placeholder="Email address"
              isInvalid={hasEmailError}
              {...register('email')}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <PasswordInput
              placeholder="********"
              isInvalid={hasPasswordError}
              {...register('password')}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl>
            <Flex justify={{ '@md': 'end' }}>
              <Tooltip text="eu sou um Tooltip">
                <Button
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  loadingText="Signing in..."
                  type="submit"
                >
                  Sign In
                </Button>
              </Tooltip>
            </Flex>
          </FormControl>
        </Box>
      </Flex>
    </Container>
  )
}
