import React, { useState } from "react";
import { Box, VStack, Heading, Text, List, ListItem } from "@chakra-ui/react";
import AddProperty from "./AddProperty";
import DashboardHome from "./DashBoardHome";

const DashboardLayout = () => {
  const [currentComponent, setCurrentComponent] = useState("home");

  // Function to handle sidebar menu click
  const handleMenuClick = (componentName) => {
    setCurrentComponent(componentName);
  };

  // Render the current component dynamically
  const renderContent = () => {
    switch (currentComponent) {
      case "home":
        return <DashboardHome />;
      case "addproperty":
        return <AddProperty />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
    >
      {/* Header */}
      

      {/* Main Layout */}
      <Box display="flex" flex="1" overflow="hidden">
        {/* Sidebar */}
        <Box
          w="250px"
          bg="gray.100"
          color="Black"
          p="6"
          display="flex"
          flexDirection="column"
          minH="calc(100vh - 64px)" // Subtract the header height
        >
          <Heading size="md" mb="4">
            Dashboard
          </Heading>
          <List spacing={3}>
            <ListItem
              cursor="pointer"
              bg={currentComponent === "home" ? "pink.100" : "transparent"}
              borderRadius="md"
              p="2"
              _hover={{ bg: "pink.100" }}
              onClick={() => handleMenuClick("home")}
            >
              Dashboard Home
            </ListItem>
            <ListItem
              cursor="pointer"
              bg={currentComponent === "addproperty" ? "pink.100" : "transparent"}
              borderRadius="md"
              p="2"
              _hover={{ bg: "pink.100" }}
              onClick={() => handleMenuClick("addproperty")}
            >
              Add Property
            </ListItem>
          </List>
        </Box>

        {/* Content Area */}
        <Box
          flex="1"
          p="6"
          bg="gray.100"
          overflowY="auto"
          minH="calc(100vh - 64px)" // Subtract the header height
        >
          {renderContent()}
        </Box>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" p="4" textAlign="center">
        <Text fontSize="sm">&copy; 2024 Your Company. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
