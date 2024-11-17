// FindLocation.jsx
import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Flex, Button, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const locations = [
  {
    id: 1,
    name: 'Pimpri',
    image: 'pexels-asifmethar-789750.jpg'
  },
  {
    id: 2,
    name: 'Chinchwad',
    image: 'pexels-rajat-sahu-694036110-25681973.jpg'
  },
  {
    id: 3,
    name: 'Pune',
    image: 'pexels-asifmethar-789750.jpg'
  },
  {
    id: 4,
    name: 'Mumbai',
    image: 'pexels-rajat-sahu-694036110-25681973.jpg'
  },
  {
    id: 5,
    name: 'Thane',
    image: 'thane.jpg'
  },
  {
    id: 6,
    name: 'Nashik',
    image: 'nashik.jpg'
  }
];

const FindLocation = () => {
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
    <Box mt={8} p={4} bg="#f7f7f7" borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" textAlign="center" mb={4}>EXPLORE CITIES</Heading>
      <Text textAlign="center" mb={6} fontSize="md" color="gray.600">Our Location For You</Text>
      
      <Flex alignItems="center" justify="space-between">
        <Button onClick={() => scroll('left')} variant="outline" mr={2} display={{ base: 'none', md: 'block' }}>
          <ChevronLeftIcon boxSize={6} />
        </Button>
        <Box 
          display="flex"
          overflowX="auto"
          ref={scrollContainerRef}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            }
          }}
        >
          <HStack
            minChildWidth="200px"
            spacing={{ base: 2, sm: 4 }}
            flex="1"
            justify="flex-start"
            px={{ base: 2, sm: 4 }}
          >
            {locations.map((location) => (
              <Box key={location.id} borderRadius="md" overflow="hidden" position="relative" minWidth="200px">
                <Image
                  src={location.image}
                  alt={location.name}
                  width="100%"
                  height={{ base: '150px', sm: '180px' }}
                  objectFit="cover"
                />
                <Text 
                  position="absolute" 
                  bottom="10px" 
                  left="10px" 
                  bg="rgba(0, 0, 0, 0.5)" 
                  color="white" 
                  p={2} 
                  borderRadius="md"
                >
                  {location.name}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
        <Button onClick={() => scroll('right')} variant="outline" ml={2} display={{ base: 'none', md: 'block' }}>
          <ChevronRightIcon boxSize={6} />
        </Button>
      </Flex>
      
      {/* For mobile view - showing arrows */}
      <Flex display={{ base: 'flex', md: 'none' }} justify="space-between" mt={4}>
        <Button onClick={() => scroll('left')} variant="outline">
          <ChevronLeftIcon boxSize={6} />
        </Button>
        <Button onClick={() => scroll('right')} variant="outline">
          <ChevronRightIcon boxSize={6} />
        </Button>
      </Flex>
    </Box>
  );
};

export default FindLocation;
