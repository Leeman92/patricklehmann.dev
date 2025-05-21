import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

export default function ProjectsSection() {
  return (
    <Box as="section" className="space-y-4">
      <Heading as="h3" size="md" className="text-[#FD971F] font-semibold">Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {[1, 2, 3].map((_, idx) => (
          <Box key={idx} className="p-4 bg-[#2A2A2A] rounded shadow text-center text-gray-500">
            Coming Soon
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
} 