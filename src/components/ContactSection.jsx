import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const ContactSection = () => {
  return (
    <Box mt={10} textAlign="center">
      <Heading as="h3" size="md" mb={4}>
        Contact Us
      </Heading>
      <Text>Have questions? Feel free to reach out at contact@example.com</Text>
      <Button mt={4} colorScheme="teal">
        Send a Message
      </Button>
    </Box>
  );
};

export default ContactSection;
