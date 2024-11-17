// Footer.jsx
import React from 'react';
import { Box, Text, Flex, Link, VStack, HStack, Input, Button } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="#2E3B4E" color="white" p={10}>
      <Flex justify="space-between" flexWrap={{ base: 'wrap', md: 'nowrap' }}>
        {/* Company Info */}
        <VStack align="flex-start" spacing={4} mb={{ base: 6, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold">RealEstate</Text>
          <Text fontSize="sm">
            Specializes in providing high-class tours for those in need.
          </Text>
          <Text fontSize="sm">
            Lane No. 3, Balajinagar, Mahadev Nagar, Kharadi
          </Text>
          <Text fontSize="sm">+91 9075326686</Text>
          <Text fontSize="sm">realestate@gmail.com</Text>
        </VStack>

        {/* Links Section */}
        <Flex justify="space-between" flexWrap="wrap" w={{ base: '100%', md: 'auto' }}>
          <VStack align="flex-start" mr={{ base: 0, md: 10 }} spacing={2} mb={6} w={{ base: '100%', md: 'auto' }}>
            <Text fontWeight="bold">Categories</Text>
            <Link href="/pricing-plans" color="teal.200">Pricing Plans</Link>
            <Link href="/property-for-sale" color="teal.200">Property For Sale</Link>
            <Link href="/property-for-rent" color="teal.200">Property For Rent</Link>
            <Link href="/property-for-buy" color="teal.200">Property For Buy</Link>
          </VStack>
          <VStack align="flex-start" mr={{ base: 0, md: 10 }} spacing={2} mb={6} w={{ base: '100%', md: 'auto' }}>
            <Text fontWeight="bold">Our Company</Text>
            <Link href="/about-us" color="teal.200">About Us</Link>
            <Link href="/contact-us" color="teal.200">Contact Us</Link>
            <Link href="/our-agents" color="teal.200">Our Agents</Link>
          </VStack>
          <VStack align="flex-start" spacing={2} mb={6} w={{ base: '100%', md: 'auto' }}>
            <Text fontWeight="bold">Policies</Text>
            <Link href="/terms-of-services" color="teal.200">Terms Of Services</Link>
            <Link href="/privacy-policy" color="teal.200">Privacy Policy</Link>
            <Link href="/cookie-policy" color="teal.200">Cookie Policy</Link>
          </VStack>
        </Flex>
      </Flex>

      {/* Newsletter Section */}
      <VStack align="flex-start" mt={6} spacing={4} w="100%">
        <Text fontWeight="bold" fontSize="lg">Newsletter</Text>
        <Text fontSize="sm">
          Your Weekly/Monthly Dose of Knowledge and Inspiration
        </Text>
        <Flex w="100%" maxW={{ base: '100%', md: '60%' }}>
          <Input placeholder="Your email address" bg="white" color="black" borderRadius="md" mr={2} />
          <Button colorScheme="teal" borderRadius="md">Subscribe</Button>
        </Flex>
      </VStack>

      {/* Social Media Links */}
      <HStack spacing={4} mt={8} flexWrap={{ base: 'wrap', md: 'nowrap' }}>
        <Text>Follow Us:</Text>
        <Link href="https://facebook.com" isExternal><FaFacebook size={20} /></Link>
        <Link href="https://twitter.com" isExternal><FaTwitter size={20} /></Link>
        <Link href="https://instagram.com" isExternal><FaInstagram size={20} /></Link>
        <Link href="https://linkedin.com" isExternal><FaLinkedin size={20} /></Link>
      </HStack>
      <Text fontSize="xs" mt={4} textAlign={{ base: 'center', md: 'left' }}>&copy;2024 RealEstate. All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
