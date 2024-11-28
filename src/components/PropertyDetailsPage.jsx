import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Button,
  HStack,
  Icon,
  Tooltip,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { FaBed, FaBath, FaParking, FaHome, FaPaw, FaArrowsAltV } from "react-icons/fa";
import { GiElevator } from "react-icons/gi";
import { MdOutlineLocalActivity } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PropertyDetailsPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const property = location.state?.property;

  if (!property) {
    return (
      <Box p="5" textAlign="center">
        <Text fontSize="lg" color="gray.600">
          No property details available.
        </Text>
      </Box>
    );
  }

  // Coordinates for Google Maps
  const { latitude, longitude } = property.propertyLocation;

  return (
    <Box p={{ base: "4", md: "8" }} maxW="1200px" mx="auto">
      {/* Property Header */}
      <Heading as="h1" size={{ base: "lg", md: "xl" }} mb="6" textAlign="center" color="gray.700">
        {property.propertyTitle}
      </Heading>

      {/* Image Slider */}
      <Box mb="6">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {property.images &&
            property.images.map((img, index) => (
              <Box key={index}>
                <Image
                  src={img}
                  alt={`Property Image ${index + 1}`}
                  borderRadius="8px"
                  objectFit="cover"
                  height={{ base: "300px", md: "500px" }}
                  width="100%"
                  loading="lazy"
                />
              </Box>
            ))}
        </Carousel>
      </Box>

      {/* Flex container for Rent Card and Contact Form */}
      <Flex direction={{ base: "column", md: "row" }} gap="6">
        {/* Property Card Details (Left Side) */}
        <Box bg="white" p="6" borderRadius="lg" boxShadow="lg" mb="6" maxW="100%" borderWidth="1px" flex="1">
          <VStack spacing="4" align="start">
            <HStack justify="space-between" width="100%">
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                FOR RENT
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="green.500">
                ₹{property.propertyPrice}
              </Text>
            </HStack>

            <Text fontSize="md" color="gray.600">
              <b>{property.propertyTitle}</b>
            </Text>
            <Text fontSize="md" color="gray.500">
              {property.propertyLocation.propertyAddress}
            </Text>

            {/* Features List */}
            <HStack wrap="wrap" spacing="6" align="center" mb="4">
              <HStack spacing="2">
                <Tooltip label="Bedrooms" aria-label="Bedrooms">
                  <Icon as={FaBed} boxSize={6} color="red.500" />
                </Tooltip>
                <Text fontSize="md" color="gray.700">
                  {property.propertyBedrooms} Bedrooms
                </Text>
              </HStack>

              <HStack spacing="2">
                <Tooltip label="Bathrooms" aria-label="Bathrooms">
                  <Icon as={FaBath} boxSize={6} color="red.500" />
                </Tooltip>
                <Text fontSize="md" color="gray.700">
                  {property.propertyBathrooms} Bathrooms
                </Text>
              </HStack>

              <HStack spacing="2">
                <Tooltip label="Parkings" aria-label="Parkings">
                  <Icon as={FaParking} boxSize={6} color="red.500" />
                </Tooltip>
                <Text fontSize="md" color="gray.700">
                  {property.propertyParking} Parkings
                </Text>
              </HStack>

              <HStack spacing="2">
                <Tooltip label="Lifts" aria-label="Lifts">
                  <Icon as={GiElevator} boxSize={6} color="red.500" />
                </Tooltip>
                <Text fontSize="md" color="gray.700">
                  {property.propertyLifts} Lifts
                </Text>
              </HStack>

              <HStack spacing="2">
                <Tooltip label="Pet Friendly" aria-label="Pet Friendly">
                  <Icon as={FaPaw} boxSize={6} color="red.500" />
                </Tooltip>
                <Text fontSize="md" color="gray.700">
                  {property.isPetFriendly ? "Pet Friendly" : "No Pets Allowed"}
                </Text>
              </HStack>

              <HStack spacing="2">
                <Tooltip label="Area (in SqFt)" aria-label="Area">
                  <Icon as={FaArrowsAltV} boxSize={6} color="red.500" />
                </Tooltip>
                <Text fontSize="md" color="gray.700">
                  {property.propertyArea} SqFt
                </Text>
              </HStack>
            </HStack>

            {/* Description */}
            <Text fontSize="md" color="gray.700">
              <b>Description:</b> {property.description || "No description available."}
            </Text>

            {/* Read More */}
            <Button
              colorScheme="red"
              variant="link"
              size="sm"
              mt="4"
              onClick={() => alert("More details...")}
            >
              Read more
            </Button>
          </VStack>
        </Box>

        {/* Contact Form (Right Side) */}
        <Box bg="white" p="6" borderRadius="lg" boxShadow="lg" mb="6" maxW="100%" borderWidth="1px" flex="1">
          <Heading size="md" mb="4" color="gray.700">
            Contact Agent
          </Heading>
          <VStack spacing="4" align="start">
            <Text fontSize="lg" color="gray.600">Anil Pore</Text>
            <Text fontSize="md" color="gray.500">+91 9075326686</Text>
            <Text fontSize="md" color="gray.500">anilpore@gmail.com</Text>

            {/* Contact Form */}
            <FormControl id="fullName" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" placeholder="Enter your full name" />
            </FormControl>
            <FormControl id="phoneNumber" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" placeholder="Enter your phone number" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Enter your email address" />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Your Message</FormLabel>
              <Textarea placeholder="Write your message here" />
            </FormControl>
            <Button colorScheme="red" size="lg" width="100%" mt="4">
              Send Message
            </Button>
          </VStack>
        </Box>
      </Flex>

      {/* Map Card */}
      <Box bg="white" p="6" borderRadius="lg" boxShadow="lg" mb="6" maxW="100%" borderWidth="1px">
        <Heading size="md" mb="4" color="gray.700">
          Location Map
        </Heading>
        <Box borderRadius="lg" overflow="hidden" boxShadow="lg" maxW="100%" height={{ base: "300px", md: "500px" }}>
          {/* Google Maps Embed API iframe */}
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>

      {/* Amenities and Features */}
      <Box bg="white" p="6" borderRadius="lg" boxShadow="lg" mb="6" maxW="100%" borderWidth="1px" flex="1">
        <Heading size="md" mb="4" color="gray.700">
          Amenities & Features
        </Heading>
      
      </Box>

       {/* What's Nearby */}
       <Box
          bg="white"
          p="6"
          borderRadius="lg"
          boxShadow="lg"
          mb="6"
          maxW="100%"
          borderWidth="1px"
          flex="1"
        >
          <Heading size="md" mb="4" color="gray.700">
            What's Nearby
          </Heading>
          <VStack spacing="4" align="start">
            <Text fontSize="sm" color="gray.600">
              Explore nearby amenities to precisely locate your property and identify surrounding conveniences, providing a comprehensive overview of the living environment and the property's convenience.
            </Text>
            {[
              { label: "School", value: property.nearby?.school || "Not Available" },
              { label: "Hospital", value: property.nearby?.hospital || "Not Available" },
              { label: "University", value: property.nearby?.university || "Not Available" },
              { label: "Metro Station", value: property.nearby?.metroStation || "Not Available" },
              { label: "Grocery Center", value: property.nearby?.groceryCenter || "Not Available" },
              { label: "Gym & Wellness", value: property.nearby?.gymWellness || "Not Available" },
              { label: "Market", value: property.nearby?.market || "Not Available" },
            ].map((nearby, index) => (
              <HStack key={index} spacing="2">
                <Text fontWeight="bold" color="gray.700">
                  {nearby.label}:
                </Text>
                <Text color="gray.600">{nearby.value}</Text>
              </HStack>
            ))}
          </VStack>
        </Box>
    </Box>
  );
};

export default PropertyDetailsPage;
