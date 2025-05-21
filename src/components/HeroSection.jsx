import { Box, Heading, Text, Button } from '@chakra-ui/react'

export default function HeroSection() {
  return (
    <Box as="section" className="space-y-4" pt={12}>
      <Heading as="h1" size="xl" className="font-bold">Hi, I'm Patrick</Heading>
      <Heading as="h2" size="lg" className="text-[#AE81FF] font-semibold">Senior PHP Developer</Heading>
      <Text fontSize="lg">E-Commerce • AI • Tech-Nerd since 1992</Text>
      <Text className="text-gray-400 max-w-xl">
        I'm a senior PHP developer specializing in e-commerce software, with a growing interest in AI and AI agents.
      </Text>
      <Button
        as="a"
        href="#blog"
        bg="#66D9EF"
        color="black"
        _hover={{ bg: '#AE81FF' }}
        className="mt-4"
        rounded="md"
      >
        Read the Blog
      </Button>
    </Box>
  )
} 