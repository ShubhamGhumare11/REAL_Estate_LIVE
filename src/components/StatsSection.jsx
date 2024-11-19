import React from 'react';
import { Box, Text, SimpleGrid, VStack, Heading } from '@chakra-ui/react';

const StatsSection = () => {
  return (
    <Box
    
    
      width="full" // Full width for responsive behavior
      height="auto" // Auto height so it adjusts based on content
      py={{ base: '30px', md: '60px' }} // Padding adjusts on small (base) and medium (md) screens
      px={{ base: '20px', md: '178px' }} // Horizontal padding adjusts on smaller and larger screens
      bg="gray.100" // Background color
    >
      <SimpleGrid
       
        columns={{ base: 1, sm: 2, md: 4 }} // Changes the number of columns based on screen size
        spacing={{ base: 4, md: 10 }} // Adjusts the spacing between the items based on screen size
        width="full" // Full width of the container
        textAlign="center"
      >
        {/* Happy Clients */}
        <VStack>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={'red'}>300+</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500">Happy Clients</Text>
        </VStack>

        {/* Properties Ready */}
        <VStack>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={'red'}>1K+</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500">Properties Ready</Text>
        </VStack>

        {/* Completed Agents */}
        <VStack>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={'red'}>80+</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500">Completed Agents</Text>
        </VStack>

        {/* Years Growth */}
        <VStack>
          <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={'red'}>60%</Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500">Years Growth</Text>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;
