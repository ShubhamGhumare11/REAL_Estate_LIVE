import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  Spinner,
  Button,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Services = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch data from API
    axios
      .get("http://localhost:8080/property/getAll")
      .then((response) => {
        setProperties(response.data.object);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false);
      });
  }, []);

  // Filtered properties based on selected filter
  const filteredProperties =
    filter === "All"
      ? properties
      : properties.filter((property) => property.propertyType === filter);

  if (loading) {
    return (
      <Box textAlign="center" mt={10}>
        <Spinner size="xl" />
        <Text>Loading Properties...</Text>
      </Box>
    );
  }

  return (
    <Box p={5}>
      {/* Filter Buttons */}
      <Flex justify="center" mb={6} gap={4}>
        {["All", "Apartment", "Villa", "Studio", "Home", "Office"].map((type) => (
          <Button
            key={type}
            colorScheme={filter === type ? "red" : "gray"}
            onClick={() => setFilter(type)}
            variant={filter === type ? "solid" : "outline"}
          >
            {type}
          </Button>
        ))}
      </Flex>

      {/* Property Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Box
              key={property.propertyID}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              cursor="pointer"
              onClick={() =>
                navigate(`/properties/${property.propertyID}`, {
                  state: { property },
                })
              } // Navigate to the property details page
            >
              {/* Display First Image */}
              {property.images.length > 0 ? (
                <Image
                  src={`data:image/jpeg;base64,${property.images[0]}`}
                  alt={property.propertyTitle}
                  objectFit="cover"
                  w="100%"
                  h="200px"
                />
              ) : (
                <Box
                  w="100%"
                  h="200px"
                  bg="gray.200"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text>No Image</Text>
                </Box>
              )}

              {/* Property Details */}
              <Box p={5}>
                <VStack align="start" spacing={2}>
                  <Text fontSize="lg" fontWeight="bold">
                    {property.propertyTitle}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {property.propertyLocation.propertyCityName},{" "}
                    {property.propertyLocation.propertyState}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Price: ₹{property.propertyPrice.toLocaleString()}
                  </Text>
                  <HStack spacing={2}>
                    <Badge colorScheme="blue">{property.propertyType}</Badge>
                    <Badge colorScheme="green">{property.propertyStatus}</Badge>
                  </HStack>
                  <Text fontSize="sm" color="gray.500">
                    Area: {property.propertyArea} sq. ft.
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Rooms: {property.propertyRooms}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    Owner: {property.propertyOwnerDetails.fullName}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))
        ) : (
          <Text textAlign="center" color="gray.500" fontSize="lg">
            No properties available for the selected filter.
          </Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Services;
