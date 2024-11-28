

import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack, CheckboxGroup, Checkbox, Button } from "@chakra-ui/react";

const PropertiesList = ({ fetchProperties }) => {
  const [filters, setFilters] = useState({
    type: "All",
    keyword: "",
    location: "",
    rooms: "",
    bathrooms: "",
    bedrooms: "",
    priceRange: [0, 22000],
    securityDeposit: [0, 40000],
  });

  const [filteredProperties, setFilteredProperties] = useState([]);
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    // Fetch all properties when the component loads
    const fetchAllProperties = async () => {
      const properties = await fetchProperties();
      setAllProperties(properties);
    };

    fetchAllProperties();
  }, [fetchProperties]);

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSliderChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const applyFilters = () => {
    const filtered = allProperties.filter((property) => {
      // Apply filters here
      const {
        type,
        keyword,
        location,
        rooms,
        bathrooms,
        bedrooms,
        priceRange,
        securityDeposit,
      } = filters;

      return (
        (type === "All" || property.type === type) &&
        (!keyword || property.title.toLowerCase().includes(keyword.toLowerCase())) &&
        (!location || property.location.toLowerCase().includes(location.toLowerCase())) &&
        (!rooms || property.rooms === Number(rooms)) &&
        (!bathrooms || property.bathrooms === Number(bathrooms)) &&
        (!bedrooms || property.bedrooms === Number(bedrooms)) &&
        property.price >= priceRange[0] &&
        property.price <= priceRange[1] &&
        property.securityDeposit >= securityDeposit[0] &&
        property.securityDeposit <= securityDeposit[1]
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <Box display="flex" p={4}>
      {/* Filters Section */}
      <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg" w="300px">
        <VStack spacing={4} align="stretch">
          {/* Type Selection */}
          <CheckboxGroup
            onChange={(value) => handleInputChange("type", value)}
            defaultValue={["All"]}
          >
            <HStack>
              <Checkbox value="For Rent">For Rent</Checkbox>
              <Checkbox value="For Sale">For Sale</Checkbox>
            </HStack>
          </CheckboxGroup>

          {/* Keyword Search */}
          <Box>
            <Text>Keyword</Text>
            <input
              type="text"
              placeholder="Search Keywords"
              onChange={(e) => handleInputChange("keyword", e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </Box>

          {/* Location Search */}
          <Box>
            <Text>Location</Text>
            <input
              type="text"
              placeholder="Search Location"
              onChange={(e) => handleInputChange("location", e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </Box>

          {/* Type Dropdown */}
          <Box>
            <Text>Type</Text>
            <select
              onChange={(e) => handleInputChange("type", e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Home">Home</option>
              <option value="Villa">Villa</option>
              <option value="Studio">Studio</option>
            </select>
          </Box>

          {/* Rooms Dropdown */}
          <Box>
            <Text>Rooms</Text>
            <select
              onChange={(e) => handleInputChange("rooms", e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </Box>

          {/* Bathrooms Dropdown */}
          <Box>
            <Text>Bathrooms</Text>
            <select
              onChange={(e) => handleInputChange("bathrooms", e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </Box>

          {/* Bedrooms Dropdown */}
          <Box>
            <Text>Bedrooms</Text>
            <select
              onChange={(e) => handleInputChange("bedrooms", e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </Box>

          {/* Price Range Slider */}
          <Box>
            <Text>Price Range</Text>
            <HStack spacing={2}>
              <Text>₹{filters.priceRange[0]}</Text>
              <input
                type="range"
                min="0"
                max="22000"
                value={filters.priceRange[0]}
                onChange={(e) =>
                  handleSliderChange("priceRange", [
                    parseInt(e.target.value, 10),
                    filters.priceRange[1],
                  ])
                }
              />
              <Text>₹{filters.priceRange[1]}</Text>
            </HStack>
          </Box>

          {/* Security Deposit Slider */}
          <Box>
            <Text>Security Deposit</Text>
            <HStack spacing={2}>
              <Text>₹{filters.securityDeposit[0]}</Text>
              <input
                type="range"
                min="0"
                max="40000"
                value={filters.securityDeposit[0]}
                onChange={(e) =>
                  handleSliderChange("securityDeposit", [
                    parseInt(e.target.value, 10),
                    filters.securityDeposit[1],
                  ])
                }
              />
              <Text>₹{filters.securityDeposit[1]}</Text>
            </HStack>
          </Box>

          {/* Find Properties Button */}
          <Button colorScheme="red" onClick={applyFilters}>
            Find Properties
          </Button>
        </VStack>
      </Box>

      {/* Properties List Section */}
      <Box flex="1" ml={4}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Box key={property.id} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Text fontWeight="bold">{property.title}</Text>
              <Text>{property.location}</Text>
              <Text>₹{property.price}</Text>
            </Box>
          ))
        ) : (
          <Text>No properties found!</Text>
        )}
      </Box>
    </Box>
  );
};

export default PropertiesList;
