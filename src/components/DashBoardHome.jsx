import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const DashboardHome = () => {
  return (
    <Box>
      <Heading size="lg" mb="4">
        Welcome to the Dashboard
      </Heading>
      <Text>Click on the options in the sidebar to explore.</Text>
    </Box>
  );
};

export default DashboardHome;
