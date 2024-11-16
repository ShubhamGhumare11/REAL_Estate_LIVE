import React, { useState } from 'react';
import axios from 'axios';
import { Box, FormControl, FormLabel, Input, Textarea, Select, Checkbox, SimpleGrid, Button, VStack, Heading, useToast } from '@chakra-ui/react';

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    propertyGallery: [],
    propertyTitle: '',
    status: '',
    type: '',
    price: '',
    area: '',
    rooms: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    description: '',
    buildingAge: '',
    bedrooms: '',
    bathrooms: '',
    features: {
      airConditioning: false,
      swimmingPool: false,
      centralHeating: false,
      laundryRooms: false,
      gym: false,
      windowCovering: false,
    },
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        features: {
          ...formData.features,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      propertyGallery: e.target.files
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const requiredFields = [
      'propertyTitle', 'status', 'type', 'price', 'area', 'rooms', 'address',
      'city', 'state', 'zipCode', 'description', 'contactName', 'contactEmail', 'contactPhone', 'buildingAge', 'bedrooms', 'bathrooms'
    ];

    for (let field of requiredFields) {
      if (!formData[field] || (field === 'propertyGallery' && formData.propertyGallery.length === 0)) {
        toast({
          title: `${field} is required.`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
        return;
      }
    }

    const formDataToSend = new FormData();

    for (const key in formData) {
      if (key === 'propertyGallery') {
        Array.from(formData.propertyGallery).forEach((file) => {
          formDataToSend.append('propertyGallery', file);
        });
      } else if (key === 'features') {
        for (const feature in formData.features) {
          formDataToSend.append(`features[${feature}]`, formData.features[feature]);
        };
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('http://localhost:8080/property/Add', formDataToSend, {
        headers: {
          'Content-Type': 'application/json'  // Correct content type for JSON data
        }
      });
      toast({
        title: 'Property submitted successfully!',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
   
    
    } catch (error) {
      toast({
        title: 'Error submitting the form.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <Box bg="white" p={6} borderRadius="md" boxShadow="md">
      <Heading mb={6} fontSize="xl" textAlign="center" bg="#FCCBBE" p={3} borderRadius="md">
        Add Property Form
      </Heading>

      <VStack spacing={6} align="stretch" as="form" onSubmit={handleSubmit}>
        {/* Property Gallery Section */}
        <Box bg="pink.100" p={4} borderRadius="md" border="1px solid #ccc">
          <Heading mb={6} fontSize="xl" textAlign="center" bg="#FCCBBE" p={3} borderRadius="md">Property Gallery</Heading>
          <FormControl>
            <FormLabel textAlign="center">Choose Image</FormLabel>
            <Button 
              colorScheme="red" 
              _hover={{ bg: 'red.600' }} 
              display="block" 
              mx="auto"
              onClick={() => document.getElementById('file-input').click()} // Trigger file input on button click
            >
              Add Images
            </Button>
            <Input 
              id="file-input" 
              type="file" 
              accept="image/*" 
              multiple 
              onChange={handleFileChange} 
              style={{ display: 'none' }} // Hide the default file input
            />
            <Box mt={2} border="1px dashed gray" p={4} textAlign="center" cursor="pointer">
              Choose Image or drag image here to upload
            </Box>
          </FormControl>
        </Box>

        {/* Property Basic Information Section */}
        <Box bg="gray.100" p={4} borderRadius="md" border="1px solid #ccc">
          <Heading mb={6} fontSize="xl" textAlign="center" bg="#FCCBBE" p={3} borderRadius="md">Property Basic Information</Heading>

          <FormControl>
            <FormLabel>Property Title <span style={{ color: 'red' }}>*</span></FormLabel>
            <Input name="propertyTitle" value={formData.propertyTitle} onChange={handleChange} required />
          </FormControl>

          <FormControl>
            <FormLabel>Status <span style={{ color: 'red' }}>*</span></FormLabel>
            <Select name="status" value={formData.status} onChange={handleChange} required>
              <option value="">Select Status</option>
              <option value="Sale">Sale</option>
              <option value="Rent">Rent</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Type <span style={{ color: 'red' }}>*</span></FormLabel>
            <Select name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Price <span style={{ color: 'red' }}>*</span></FormLabel>
            <Input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </FormControl>

          <FormControl>
            <FormLabel>Area (sq ft) <span style={{ color: 'red' }}>*</span></FormLabel>
            <Input type="number" name="area" value={formData.area} onChange={handleChange} required />
          </FormControl>

          <FormControl>
            <FormLabel>Rooms <span style={{ color: 'red' }}>*</span></FormLabel>
            <Input type="number" name="rooms" value={formData.rooms} onChange={handleChange} required />
          </FormControl>
        </Box>

        {/* Building Age Section with Description */}
        
        <Box bg="gray.100" p={4} borderRadius="md" border="1px solid #ccc">
          <Heading mb={6} fontSize="xl" textAlign="center" bg="#FCCBBE" p={3} borderRadius="md">Address</Heading>
          <FormControl>
  <FormLabel>Address <span style={{ color: 'red' }}>*</span></FormLabel>
  <Input name="address" value={formData.address} onChange={handleChange} required />
</FormControl>

<FormControl>
  <FormLabel>City Name <span style={{ color: 'red' }}>*</span></FormLabel>
  <Input name="city" value={formData.city} onChange={handleChange} required />
</FormControl>

<FormControl>
  <FormLabel>State <span style={{ color: 'red' }}>*</span></FormLabel>
  <Input name="state" value={formData.state} onChange={handleChange} required />
</FormControl>

<FormControl>
  <FormLabel>Zip Code <span style={{ color: 'red' }}>*</span></FormLabel>
  <Input name="zipCode" value={formData.zipCode} onChange={handleChange} required />
</FormControl>

          </Box>
        <Box bg="gray.100" p={4} borderRadius="md" border="1px solid #ccc">
          <Heading mb={6} fontSize="xl" textAlign="center" bg="#FCCBBE" p={3} borderRadius="md">Building Age</Heading>
  {/* Description Textarea for Building Age */}
  <FormControl>
            <FormLabel>Building Description</FormLabel>
            <Textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              placeholder="Write a description about the building's age" 
            />
          </FormControl>
          <FormControl>
            <FormLabel>Building Age <span style={{ color: 'red' }}>*</span></FormLabel>
            <Select name="buildingAge" value={formData.buildingAge} onChange={handleChange} required>
              <option value="">Select an Option</option>
              <option value="0-1 Years">0-1 Years</option>
              <option value="0-5 Years">0-5 Years</option>
              <option value="0-10 Years">0-10 Years</option>
              <option value="0-20 Years">0-20 Years</option>
              <option value="0-50 Years">0-50 Years</option>
            </Select>
          </FormControl>

        

          <FormLabel>Bedrooms <span style={{ color: 'red' }}>*</span></FormLabel>
          <Select name="bedrooms" value={formData.bedrooms} onChange={handleChange} required>
            <option value="">Select an Option</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </Select>
          
          <FormLabel>Bathrooms <span style={{ color: 'red' }}>*</span></FormLabel>
          <Select name="bathrooms" value={formData.bathrooms} onChange={handleChange} required>
            <option value="">Select an Option</option>
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3+ Bathrooms</option>
          </Select>
        </Box>

        {/* Contact Info Section */}
        <Box bg="gray.100" p={4} borderRadius="md" border="1px solid #ccc">
          <Heading mb={6} fontSize="xl" textAlign="center" bg="#FCCBBE" p={3} borderRadius="md">Contact Information</Heading>

          <SimpleGrid columns={[1, 2]} spacing={4}>
            <FormControl>
              <FormLabel>Contact Name <span style={{ color: 'red' }}>*</span></FormLabel>
              <Input name="contactName" value={formData.contactName} onChange={handleChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Contact Email <span style={{ color: 'red' }}>*</span></FormLabel>
              <Input name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Contact Phone <span style={{ color: 'red' }}>*</span></FormLabel>
              <Input name="contactPhone" value={formData.contactPhone} onChange={handleChange} required />
            </FormControl>
          </SimpleGrid>
        </Box>

        {/* Submit Button */}
        <Button 
          colorScheme="red" 
          type="submit" 
          isFullWidth
        >
          Submit Property
        </Button>
      </VStack>
    </Box>
  );
};

export default AddPropertyForm;