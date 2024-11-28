import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  // Function to handle card click
  const handleCardClick = () => {
    navigate(`/properties/${property.id}`, { state: { property } }); // Pass property data as state
  };
  

  return (
    <Box
      onClick={handleCardClick}
      border="1px"
      borderColor="gray.200"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      p="5"
      cursor="pointer" // Indicate that the card is clickable
      _hover={{ boxShadow: 'lg', transform: 'scale(1.02)', transition: 'all 0.3s' }} // Add hover effect
    >
      {/* Property Image */}
      <Image
        src={property.images && property.images[0]} // Assuming images array exists
        alt={property.propertyTitle}
        boxSize="100%"
        objectFit="cover"
        borderRadius="8px"
        mb="3"
      />

      {/* Property Details */}
      <VStack align="start" spacing="2">
        <Text fontWeight="bold" fontSize="lg" color="gray.700">
          {property.propertyTitle}
        </Text>
        <Text fontSize="md" color="gray.500">
          {property.propertyType} - {property.propertyStatus}
        </Text>
        <Text fontSize="md" color="gray.600">
          ₹{property.propertyPrice} - {property.propertyArea} sqm
        </Text>
        <Text fontSize="sm" color="gray.400">
          {property.propertyLocation.propertyAddress}
        </Text>
      </VStack>
    </Box>
  );
};

export default PropertyCard;
