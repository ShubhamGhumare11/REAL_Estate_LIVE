// import React from 'react';
// import { Box, Flex, Image, Text, SimpleGrid, Heading, Circle, VStack, Icon } from '@chakra-ui/react';
// import { IoHomeSharp, IoBusinessSharp, IoGlobeSharp, IoMapSharp } from 'react-icons/io5';

// const FeaturesSection = () => {
//   return (
//     <Box mt={10} margin={5} borderRadius={'md'}>
//       <Heading as="h2" size="lg" textAlign="center" mb={6}>
//         Property Types
//       </Heading>
//       <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
//         {/* Residential Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="teal.500" color="white" mr={4}>
//               <Icon as={IoHomeSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">Residential</Text>
//               <Text color="gray.500">(55 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>

//         {/* Commercial Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="teal.500" color="white" mr={4}>
//               <Icon as={IoBusinessSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">Commercial</Text>
//               <Text color="gray.500">(88 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>

//         {/* Vacation & Resort Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="teal.500" color="white" mr={4}>
//               <Icon as={IoGlobeSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">Vacation & Resort</Text>
//               <Text color="gray.500">(74 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>

//         {/* The Land Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="red.400" color="white" mr={4}>
//               <Icon as={IoMapSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">The Land</Text>
//               <Text color="gray.500">(65 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>

//         {/* New Construction Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="red.400" color="white" mr={4}>
//               <Icon as={IoHomeSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">New Construction</Text>
//               <Text color="gray.500">(72 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>

//         {/* Luxury Estate Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="blue.200" color="white" mr={4}>
//               <Icon as={IoHomeSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">Luxury Estate</Text>
//               <Text color="gray.500">(49 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>

//         {/* Eco Friendly Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="blue.200" color="white" mr={4}>
//               <Icon as={IoHomeSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">Eco Friendly</Text>
//               <Text color="gray.500">(53 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>

//         {/* Historic Properties Card */}
//         <Box bg="gray.100" p={6} borderRadius="md" textAlign="center">
//           <Flex justify="center" align="center" mb={4}>
//             <Circle size="50px" bg="blue.200" color="white" mr={4}>
//               <Icon as={IoHomeSharp} boxSize={6} />
//             </Circle>
//             <VStack align="start" spacing={1}>
//               <Text fontWeight="bold">Historic Properties</Text>
//               <Text color="gray.500">(28 Properties)</Text>
//             </VStack>
//           </Flex>
//         </Box>
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default FeaturesSection;


import React from 'react';
import { Box, Flex, Text, SimpleGrid, Heading, Circle, VStack, Icon } from '@chakra-ui/react';
import { IoHomeSharp, IoBusinessSharp, IoGlobeSharp, IoMapSharp } from 'react-icons/io5';

const FeaturesSection = () => {
  const propertyTypes = [
    {
      name: "Residential",
      icon: IoHomeSharp,
      color: "teal.500",
      properties: 55
    },
    {
      name: "Commercial",
      icon: IoBusinessSharp,
      color: "teal.500",
      properties: 88
    },
    {
      name: "Vacation & Resort",
      icon: IoGlobeSharp,
      color: "teal.500",
      properties: 74
    },
    {
      name: "The Land",
      icon: IoMapSharp,
      color: "red.400",
      properties: 65
    },
    {
      name: "New Construction",
      icon: IoHomeSharp,
      color: "red.400",
      properties: 72
    },
    {
      name: "Luxury Estate",
      icon: IoHomeSharp,
      color: "blue.200",
      properties: 49
    },
    {
      name: "Eco Friendly",
      icon: IoHomeSharp,
      color: "blue.200",
      properties: 53
    },
    {
      name: "Historic Properties",
      icon: IoHomeSharp,
      color: "blue.200",
      properties: 28
    }
  ];

  return (
    <Box mt={10} p={1} margin={70} borderRadius={'md'}>
      {/* <Heading  color='red' as="h2" size="lg" textAlign="center" mb={6}>
        Property Types
      </Heading> */}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
        {propertyTypes.map((property, index) => (
          <Box key={index} bg="red.100" p={6} borderRadius="xl" textAlign="center">
            <Flex justify="center" align="center" mb={4}>
              <Circle size="50px" bg={property.color} color="white" mr={4}>
                <Icon as={property.icon} boxSize={6} />
              </Circle>
              <VStack align="start" spacing={1}>
                <Text fontWeight="bold">{property.name}</Text>
                <Text color="gray.500">({property.properties} Properties)</Text>
              </VStack>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
