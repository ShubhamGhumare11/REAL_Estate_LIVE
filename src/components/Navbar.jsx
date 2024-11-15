import React from 'react'
import { Box, Flex, Text, Button, Stack, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Menu, MenuButton, MenuList, MenuItem, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="white" color="red" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* App Title (Left Aligned) */}
        <Text fontSize="2xl" fontWeight="bold">
          Real Estate App
        </Text>
        
        {/* Centered Menu Links */}
        <Center flex="1">
          <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }} align="center">
            <Link to="/dashboard">
              <Button variant="link" color="black">Dashboard</Button>
            </Link>
            
            {/* Buy Dropdown */}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="black">
                Buy
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/buy">Buy Option 1</MenuItem>
                <MenuItem as={Link} to="/buy">Buy Option 2</MenuItem>
              </MenuList>
            </Menu>

            {/* Sell Dropdown */}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="black">
                Sell
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/sell">Sell Option 1</MenuItem>
                <MenuItem as={Link} to="/sell">Sell Option 2</MenuItem>
              </MenuList>
            </Menu>

            {/* Rent Dropdown */}
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="black">
                Rent
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/rent">Rent Option 1</MenuItem>
                <MenuItem as={Link} to="/rent">Rent Option 2</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Center>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          display={{ base: 'block', md: 'none' }}  // Show on mobile (smaller screens)
          icon={<HamburgerIcon />}
          onClick={onOpen}  // Open the menu when clicked
          variant="outline"
          aria-label="Open Menu"
          position="absolute"
          right={4}
        />
      </Flex>

      {/* Mobile Menu (Drawer) */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody >
              <Stack spacing={4} align="center">
                <Link to="/dashboard">
                  <Button variant="link" color="red" onClick={onClose}>Dashboard</Button>
                </Link>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="red">
                    Buy
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} to="/buy" onClick={onClose}>Buy Option 1</MenuItem>
                    <MenuItem as={Link} to="/buy" onClick={onClose}>Buy Option 2</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="red">
                    Sell
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} to="/sell" onClick={onClose}>Sell Option 1</MenuItem>
                    <MenuItem as={Link} to="/sell" onClick={onClose}>Sell Option 2</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="red">
                    Rent
                  </MenuButton>
                  <MenuList>
                    <MenuItem as={Link} to="/rent" onClick={onClose}>Rent Option 1</MenuItem>
                    <MenuItem as={Link} to="/rent" onClick={onClose}>Rent Option 2</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  )
}

export default Navbar
