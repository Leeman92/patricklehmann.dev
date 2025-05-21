import { Box, Heading, Text } from '@chakra-ui/react'

export default function AboutSection() {
  return (
    <Box as="section" className="space-y-2">
      <Heading as="h3" size="md" className="text-[#FD971F] font-semibold">About Me</Heading>
      <Text className="max-w-2xl">
        As a senior PHP developer, I build robust and scalable applications for e-commerce. My current tech stack includes PHP, Laravel, and Docker, and I'm exploring the latest in AI and agent systems.
      </Text>
    </Box>
  )
} 