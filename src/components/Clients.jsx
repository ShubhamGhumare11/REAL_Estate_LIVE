// Clients.jsx
import React from 'react';
import { Box, Heading, Text, Flex, Image, Button, VStack, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { StarIcon } from '@chakra-ui/icons';

const clientReviews = [
  {
    id: 1,
    name: 'Kirti Agarwal',
    title: 'Project Manager',
    review: 'I truly appreciate the professionalism and in-depth knowledge of the brokerage team. They not only helped me find the perfect home but also assisted with legal and financial aspects, making me feel confident and secure in my decision.',
    rating: 5
  },
  {
    id: 2,
    name: 'Kirti Agarwal',
    title: 'Project Manager',
    review: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    rating: 4
  },
  {
    id: 3,
    name: 'Kirti Agarwal',
    title: 'Project Manager',
    review: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    rating: 4
  },  {
    id: 4,
    name: 'Kirti Agarwal',
    title: 'Project Manager',
    review: 'My experience with property management services has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.',
    rating: 4
  }
];

const Clients = () => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box mt={10} textAlign="center">
      <Heading color={'red'} as="h2" size="lg" mb={6}>OUR BLOG AND ARTICLES</Heading>
      <Heading as="h3" size="md" mb={4}>What Our Client Says</Heading>
      <Flex alignItems="center" justify="center" mb={6}>
        <Button onClick={() => scroll('left')} variant="outline" mr={2}>
          <ChevronLeftIcon boxSize={6} />
        </Button>
        <Box
          ref={scrollContainerRef}
          display="flex"
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <HStack spacing={4} flex="1" px={4} p={100}>
            {clientReviews.map((client) => (
              <Box key={client.id} p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" minWidth="300px" bg="white">
                <VStack    align="center">
                  <Heading size="sm" mb={1} >{client.name}</Heading>
                  <Text fontSize="xs" color="gray.500" mb={2}>{client.title}</Text>
                  <Flex mb={2}>
                    {[...Array(client.rating)].map((_, index) => (
                      <StarIcon key={index} color="yellow.400" />
                    ))}
                    {[...Array(5 - client.rating)].map((_, index) => (
                      <StarIcon key={index} color="gray.300" />
                    ))}
                  </Flex>
                  <Text fontSize="sm">{client.review}</Text>
                </VStack>
              </Box>
            ))}
          </HStack>
        </Box>
        <Button onClick={() => scroll('right')} variant="outline" ml={2}>
          <ChevronRightIcon boxSize={6} />
        </Button>
      </Flex>
    </Box>
  );
};

export default Clients;
