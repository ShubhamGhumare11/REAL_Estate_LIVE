import React from 'react';
import { Box, Heading, Text, Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Box p={8} maxWidth="800px" mx="auto">
      <Heading as="h1" mb={6} textAlign="center">
        User Dashboard
      </Heading>
      <Text mb={4} fontSize="lg" textAlign="center">
        Welcome to your dashboard! Please update your profile information below.
      </Text>
      <Stack spacing={4}>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name" />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl id="phone">
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" placeholder="Enter your phone number" />
        </FormControl>

        <FormControl id="address">
          <FormLabel>Address</FormLabel>
          <Input type="text" placeholder="Enter your address" />
        </FormControl>

        <Button colorScheme="red" mt={4}>Submit</Button>
      </Stack>
    </Box>
  );
};

export default Dashboard;