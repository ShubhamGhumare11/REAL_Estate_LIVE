// Services.js (React component)
import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, SimpleGrid, Image, Flex, VStack, background, color } from '@chakra-ui/react';
import axios from 'axios';

const Services = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetching data from properties.json
    axios.get('/properties.json')
      .then(response => setProperties(response.data))
      .catch(error => console.error("Error fetching properties:", error));
  }, []);

  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  const filteredProperties = selectedType === "All" 
    ? properties 
    : properties.filter(property => property.type === selectedType);

  return (
    <Box
      textAlign="center"
      mt={{ base: '20px', md: '50px' }}
      bg="#f4f4f4"
      p={{ base: '20px', md: '30px' }}
      borderRadius="10px"
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
    >
      <Text as="h6" color="red" fontSize={{ base: '14px', md: '18px' }} fontWeight="bold">
        OUR SERVICES
      </Text>
      <Heading as="h1" color="#2E3B4E" fontSize={{ base: '28px', md: '36px' }} fontFamily="Arial, sans-serif" mt="10px">
        Recommended For You
      </Heading>

      {/* Buttons for Property Types */}
      <Box mt={6}>
      <Button
        onClick={() => handleButtonClick("All")}
        style={{
          backgroundColor: selectedType === "All" ? "red" : "transparent",
          color: selectedType === "All" ? "white" : "black",
        }}
      >
        View All
      </Button>
      <Button
        onClick={() => handleButtonClick("Apartment")}
        ml={3}
        style={{
          backgroundColor: selectedType === "Apartment" ? "red" : "transparent",
          color: selectedType === "Apartment" ? "white" : "black",
        }}
      >
        Apartment
      </Button>
      <Button
        onClick={() => handleButtonClick("Villa")}
        ml={3}
        style={{
          backgroundColor: selectedType === "Villa" ? "red" : "transparent",
          color: selectedType === "Villa" ? "white" : "black",
        }}
      >
        Villa
      </Button>
      <Button
        onClick={() => handleButtonClick("Studio")}
        ml={3}
        style={{
          backgroundColor: selectedType === "Studio" ? "red" : "transparent",
          color: selectedType === "Studio" ? "white" : "black",
        }}
      >
        Studio
      </Button>
      <Button
        onClick={() => handleButtonClick("Home")}
        ml={3}
        style={{
          backgroundColor: selectedType === "Home" ? "red" : "transparent",
          color: selectedType === "Home" ? "white" : "black",
        }}
      >
        Home
      </Button>
      <Button
        onClick={() => handleButtonClick("Office")}
        ml={3}
        style={{
          backgroundColor: selectedType === "Office" ? "red" : "transparent",
          color: selectedType === "Office" ? "white" : "black",
        }}
      >
        Office
      </Button>
    </Box>

      {/* Property Cards */}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6} mt={6}>
        {filteredProperties.map(property => (
          <Box key={property.id} bg="white" p={6} borderRadius="md" boxShadow="sm">
            <Image src={property.image} alt={property.name} borderRadius="md" />
            <VStack align="start" spacing={2} mt={4}>
              <Text fontWeight="bold">{property.name}</Text>

              <Text color="gray.500">{property.location}</Text>
              <Text>{property.price}</Text>
              <Flex justify="space-between" w="full">
                <Flex>
                  <Text fontSize="sm" mr={2}>🛏️ {property.bedrooms} Beds</Text>
                  <Text fontSize="sm">🛁 {property.bathrooms} Baths</Text>
                </Flex>
                <Text fontSize="sm">🚗 {property.parking} Parking</Text>
              </Flex>
              <Text fontSize="xs" color="gray.400">Posted by {property.user} • {property.posted}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
