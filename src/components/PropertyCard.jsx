import React from 'react';
import { Box, Image, Text, VStack } from '@chakra-ui/react';

const PropertyCard = ({ property }) => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      p="5"
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
