// import React, { useState } from 'react';
// import { Box, VStack, Link, Text } from '@chakra-ui/react';
// import { FaTachometerAlt, FaHome, FaFileInvoice, FaHeart, FaStar, FaUser, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [activeLink, setActiveLink] = useState('');

//   const handleLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   const getLinkColor = (link) => {
//     return activeLink === link ? 'teal.500' : 'gray.600';
//   };

//   const getBackgroundColor = (link) => {
//     return activeLink === link ? '#FCCBBE' : 'transparent';  // Change background color for active link
//   };

//   return (
//     <Box width="250px" h="100vh" bg="gray.200" color="white" p={4}>
//       <VStack align="start" spacing={6}>
//         <Text fontSize="2xl" color="teal.500">My Dashboard</Text>
// {/* 
//         <Link 
//           as={RouterLink} 
//           to="/dashboard" 
//           onClick={() => handleLinkClick('dashboard')} 
//           color={getLinkColor('dashboard')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('dashboard')} // Add background color change
//           p={2}
//           borderRadius="md"
//         >
//           <FaTachometerAlt />
//           <Text ml={2}>Dashboards</Text>
//         </Link>

//         <Link 
//           as={RouterLink} 
//           to="/properties" 
//           onClick={() => handleLinkClick('properties')} 
//           color={getLinkColor('properties')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('properties')}
//           p={2}
//           borderRadius="md"
//         >
//           <FaHome />
//           <Text ml={2}>My Properties</Text>
//         </Link>

//         <Link 
//           as={RouterLink} 
//           to="/invoices" 
//           onClick={() => handleLinkClick('invoices')} 
//           color={getLinkColor('invoices')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('invoices')}
//           p={2}
//           borderRadius="md"
//         >
//           <FaFileInvoice />
//           <Text ml={2}>My Invoices</Text>
//         </Link>

//         <Link 
//           as={RouterLink} 
//           to="/favourites" 
//           onClick={() => handleLinkClick('favourites')} 
//           color={getLinkColor('favourites')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('favourites')}
//           p={2}
//           borderRadius="md"
//         >
//           <FaHeart />
//           <Text ml={2}>My Favourites</Text>
//         </Link>

//         <Link 
//           as={RouterLink} 
//           to="/reviews" 
//           onClick={() => handleLinkClick('reviews')} 
//           color={getLinkColor('reviews')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('reviews')}
//           p={2}
//           borderRadius="md"
//         >
//           <FaStar />
//           <Text ml={2}>Reviews</Text>
//         </Link>

//         <Link 
//           as={RouterLink} 
//           to="/profile" 
//           onClick={() => handleLinkClick('profile')} 
//           color={getLinkColor('profile')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('profile')}
//           p={2}
//           borderRadius="md"
//         >
//           <FaUser />
//           <Text ml={2}>My Profile</Text>
//         </Link> */}

// <Link 
//           as={RouterLink} 
//           to="/addproperty"  // Simplified route path
//           onClick={() => handleLinkClick('addproperty')} 
//           color={getLinkColor('addproperty')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('addproperty')}
//           p={2}
//           borderRadius="md"
//           _hover={{ bg: '#FCCBBE', textDecoration: 'none' }} // Add hover effect
//         >
//           <FaPlusCircle />
//           <Text ml={2}>Add Property</Text>
//         </Link>
// {/* 
//         <Link 
//           as={RouterLink} 
//           to="/logout" 
//           onClick={() => handleLinkClick('logout')} 
//           color={getLinkColor('logout')} 
//           display="flex" 
//           alignItems="center" 
//           bg={getBackgroundColor('logout')}
//           p={2}
//           borderRadius="md"
//         >
//           <FaSignOutAlt />
//           <Text ml={2}>Logout</Text>
//         </Link> */}
//       </VStack>
//     </Box>
//   );
// };

// export default Sidebar;
