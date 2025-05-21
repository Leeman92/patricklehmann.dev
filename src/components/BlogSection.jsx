import { Box, Heading, SimpleGrid, Text, Tag } from '@chakra-ui/react'

const blogCards = [
  {}, {}, {}, {}
]

export default function BlogSection() {
  return (
    <Box as="section" id="blog" className="space-y-4">
      <Heading as="h3" size="md" className="text-[#FD971F] font-semibold">Blog</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {blogCards.map((_, idx) => (
          <Box key={idx} className="p-4 bg-[#2A2A2A] rounded shadow">
            <Heading as="h4" size="sm" className="text-[#AE81FF] font-semibold">Coming Soon</Heading>
            <Text fontSize="sm" className="text-gray-400">A small preview about what to come...</Text>
            <Box mt={2} className="text-xs space-x-2">
              <Tag className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">Example Tag</Tag>
              <Tag className="px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">Example Tag</Tag>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
} 