// ServicesSection.js (React component)
import React from 'react';
import { Box, Heading, Text, SimpleGrid, VStack, Button, Icon } from '@chakra-ui/react';
import { FaHome, FaKey, FaDollarSign } from 'react-icons/fa';

const AboutUsSection = () => {
  return (
    <Box
      bg="#f4f4f4"
      p={{ base: '20px', md: '40px' }}
      borderRadius="10px"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      textAlign="center"
      mt={{ base: '20px', md: '50px' }}
    >
      <Heading as="h6" color="red" fontSize={{ base: '14px', md: '18px' }} fontWeight="bold">
        OUR SERVICES
      </Heading>
      <Heading as="h1" color="#2E3B4E" fontSize={{ base: '28px', md: '36px' }} mt="10px">
        What We Do?
      </Heading>

      {/* Service Boxes */}
      <SimpleGrid columns={[1, 2, 3]} spacing={8} mt={10}>
        {/* Buy A New Home */}
        <VStack
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="sm"
          align="center"
        >
          <Icon as={FaHome} w={12} h={12} color="teal.500" />
          <Text fontSize="lg" fontWeight="bold">Buy A New Home</Text>
          <Text fontSize="sm" color="gray.600">
            Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.
          </Text>
          <Button variant="link" color="teal.600" mt={2}>Learn More</Button>
        </VStack>

        {/* Rent A Home */}
        <VStack
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="sm"
          align="center"
        >
          <Icon as={FaKey} w={12} h={12} color="orange.500" />
          <Text fontSize="lg" fontWeight="bold">Rent A Home</Text>
          <Text fontSize="sm" color="gray.600">
            Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.
          </Text>
          <Button variant="link" color="teal.600" mt={2}>Learn More</Button>
        </VStack>

        {/* Sell A Home */}
        <VStack
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="sm"
          align="center"
        >
          <Icon as={FaDollarSign} w={12} h={12} color="green.500" />
          <Text fontSize="lg" fontWeight="bold">Sell A Home</Text>
          <Text fontSize="sm" color="gray.600">
            Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.
          </Text>
          <Button variant="link" color="teal.600" mt={2}>Learn More</Button>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default AboutUsSection;
