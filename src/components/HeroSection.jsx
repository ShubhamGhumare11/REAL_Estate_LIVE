import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import heroImage from '../assets/Bg.png';  // Adjust the path as needed


const HeroSection = () => {
  return (
    
    <Box
    
    bgImage={`url(${heroImage})`}
    bgSize="cover"
  
    bgPos="center"
    // borderRadius="md"
    p={8}
    
    textAlign="center"
    color="white"
    height={['auto', '100vh']}  // Responsive height (auto for small screens, 100vh for large screens)
    display="flex"
    flexDirection="column"
    justifyContent="center"
  >
    
      <Heading as="h1" size={['xl', '4xl']} mb={4} 
      height={'180px'}
 >
      Find the Perfect Place <br></br>
      to Call Home
      </Heading>
      <Text fontSize={['lg', 'sm']} mb={111}>
      Explore a wide range of properties in the most desirable locations. Whether you’re looking for a cozy apartment, <br/>
      a spacious family home, or a luxurious estate, we have listings to suit every lifestyle and budget.      </Text>
      
    </Box>
  );
};

export default HeroSection;
