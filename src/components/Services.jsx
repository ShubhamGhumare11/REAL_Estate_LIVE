// import React, { useEffect, useState } from 'react';
// import { Box, Button, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
// import axios from 'axios';
// import PropertyCard from './PropertyCard';  // Import the PropertyCard component

// const Services = () => {
//   const [selectedType, setSelectedType] = useState('All'); // Property type filter
//   const [properties, setProperties] = useState([]); // Array to hold property data
//   const [loading, setLoading] = useState(true); // State to manage loading state
//   const [error, setError] = useState(null); // State to manage error handling

//   // Function to fetch data from the API
//   const fetchProperties = async () => {
//     setLoading(true); // Set loading to true before making the API call
//     setError(null); // Reset error state

//     try {
//       const response = await axios.get('http://localhost:8080/property/getAll');
//       if (response.data && response.data.object) {
//         setProperties(response.data.object); // Set the fetched data to state
//       } else {
//         setError('No properties found or invalid response.');
//       }
//     } catch (err) {
//       setError('Failed to load properties. Please try again later.'); // Handle API errors
//     } finally {
//       setLoading(false); // Set loading to false after data is fetched or error occurred
//     }
//   };

//   useEffect(() => {
//     // Fetch the data when the component is mounted
//     fetchProperties();
//   }, []);

//   const handleButtonClick = (type) => {
//     setSelectedType(type); // Update the selected property type
//   };

//   const filteredProperties =
//     selectedType === 'All'
//       ? properties
//       : properties.filter((property) => property.propertyType === selectedType);

//   return (
//     <Box
//       textAlign="center"
//       mt="50px"
//       bg="gray.100"
//       p="30px"
//       borderRadius="10px"
//       boxShadow="xl"
//     >
//       <Heading as="h1" fontSize="3xl" color="gray.700">
//         Recommended Properties for You
//       </Heading>

//       {/* Property Type Buttons */}
//       <Box mt="30px">
//         {['All', 'Apartment', 'Villa', 'Home', 'Office'].map((type) => (
//           <Button
//             key={type}
//             onClick={() => handleButtonClick(type)}
//             bg={selectedType === type ? 'red.500' : 'gray.200'}
//             color={selectedType === type ? 'white' : 'black'}
//             mr="4px"
//             _hover={{ bg: 'red.400', color: 'white' }}
//           >
//             {type}
//           </Button>
//         ))}
//       </Box>

//       {/* Loading or Error Handling */}
//       {loading ? (
//         <Spinner size="xl" mt="40px" />
//       ) : error ? (
//         <Text color="red.500" mt="40px">
//           {error}
//         </Text>
//       ) : filteredProperties.length === 0 ? (
//         <Text mt="40px" color="gray.500">
//           No properties available for {selectedType}.
//         </Text>
//       ) : (
//         <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px" mt="40px">
//           {filteredProperties.map((property) => (
//             <PropertyCard key={property.propertyID} property={property} />
//           ))}
//         </SimpleGrid>
//       )}
//     </Box>
//   );
// };

// export default Services;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Heading,
//   Text,
//   SimpleGrid,
//   Image,
//   Flex,
//   Stack,
//   Icon,
// } from "@chakra-ui/react";
// import { FaBed, FaBath, FaDollarSign } from "react-icons/fa";

// function Services() {
//   const [properties, setProperties] = useState([]);
//   const [filter, setFilter] = useState("All");

//   useEffect(() => {
//     // Axios Request with Headers
//     axios
//       .get("http://localhost:8080/property/getAll",)
//       .then((response) => {
//         setProperties(response.data.object);
//       })
//       .catch((error) => {
//         console.error("Error fetching properties:", error);
//       });
//   }, []);

//   const filteredProperties = properties.filter(
//     (property) => filter === "All" || property.propertyType === filter
//   );

//   return (
//     <ChakraProvider>
//       <Box p={4}>
//         <Heading mb={6} textAlign="center">
//           Property Listings
//         </Heading>

//         {/* Filter Buttons */}
//         <Flex justify="center" mb={6} gap={4}>
//           {["All", "Apartment", "Home", "Villa", "Studio"].map((type) => (
//             <Button
//               key={type}
//               colorScheme={filter === type ? "red" : "gray"}
//               onClick={() => setFilter(type)}
//             >
//               {type}
//             </Button>
//           ))}
//         </Flex>

//         {/* Property Cards */}
//         <SimpleGrid columns={[1, 2, 3]} spacing={6}>
//           {filteredProperties.map((property) => (
//             <Box
//               key={property.propertyID}
//               borderWidth="1px"
//               borderRadius="lg"
//               overflow="hidden"
//               boxShadow="md"
//             >
//               {/* Image */}
//               <Image
//                 src={property.images[0] || "https://via.placeholder.com/300"}
//                 alt={property.propertyTitle}
//                 objectFit="cover"
//                 height="200px"
//                 width="100%"
//               />

//               {/* Content */}
//               <Box p={4}>
//                 <Heading size="md" mb={2}>
//                   {property.propertyTitle}
//                 </Heading>
//                 <Text mb={1}>
//                   <b>Type:</b> {property.propertyType}
//                 </Text>
//                 <Text mb={1}>
//                   <b>Status:</b> {property.propertyStatus}
//                 </Text>
//                 <Text mb={1}>
//                   <b>Location:</b> {property.propertyLocation.propertyCityName},{" "}
//                   {property.propertyLocation.propertyState}
//                 </Text>

//                 {/* Icons for additional details */}
//                 <Stack direction="row" align="center" mt={4}>
//                   <Flex align="center">
//                     <Icon as={FaBed} color="blue.500" mr={1} />
//                     <Text>{property.propertyInformation.propertyBedRooms}</Text>
//                   </Flex>
//                   <Flex align="center" ml={4}>
//                     <Icon as={FaBath} color="green.500" mr={1} />
//                     <Text>{property.propertyInformation.propertyBathRooms}</Text>
//                   </Flex>
//                   <Flex align="center" ml={4}>
//                     <Icon as={FaDollarSign} color="yellow.500" mr={1} />
//                     <Text>{property.propertyPrice}</Text>
//                   </Flex>
//                 </Stack>
//               </Box>
//             </Box>
//           ))}
//         </SimpleGrid>
//       </Box>
//     </ChakraProvider>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ChakraProvider,
  Box,
  Button,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Flex,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaDollarSign } from "react-icons/fa";

function Services() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/property/getAll")
      .then((response) => {
        console.log("API Response: ", response.data.object); // Debug response data
        setProperties(response.data.object);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);
  
  
  return (
    <ChakraProvider>
      <Box p={4}>
        <Heading mb={6} textAlign="center">
          Property Listings
        </Heading>

        {/* Property Cards */}
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {properties.map((property) => (
            <Box
              key={property.propertyID}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
            >
              {/* Image */}
              <Image
                src={property.images[0] || "https://via.placeholder.com/300"}
                alt={property.propertyTitle}
                objectFit="cover"
                height="200px"
                width="100%"
              />

              {/* Content */}
              <Box p={4}>
                <Heading size="md" mb={2}>
                  {property.propertyTitle}
                </Heading>
                <Text mb={1}>
                  <b>Type:</b> {property.propertyType}
                </Text>
                <Text mb={1}>
                  <b>Status:</b> {property.propertyStatus}
                </Text>
                <Text mb={1}>
                  <b>Location:</b> {property.propertyLocation.propertyCityName},{" "}
                  {property.propertyLocation.propertyState}
                </Text>

                {/* Icons for additional details */}
                <Stack direction="row" align="center" mt={4}>
                  <Flex align="center">
                    <Icon as={FaBed} color="blue.500" mr={1} />
                    <Text>{property.propertyInformation.propertyBedRooms}</Text>
                  </Flex>
                  <Flex align="center" ml={4}>
                    <Icon as={FaBath} color="green.500" mr={1} />
                    <Text>{property.propertyInformation.propertyBathRooms}</Text>
                  </Flex>
                  <Flex align="center" ml={4}>
                    <Icon as={FaDollarSign} color="yellow.500" mr={1} />
                    <Text>{property.propertyPrice}</Text>
                  </Flex>
                </Stack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default Services;
