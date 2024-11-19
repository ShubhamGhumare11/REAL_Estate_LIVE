import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
// import Dashboard from './components/Dashboard';
import AddProperty from './components/AddProperty';
// import Sidebar from './components/Sidebar';
import DashboardLayout from './components/DashBoardLayout';
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';
// import PropertyDetailsPage from './components/PropertyDetailsPage';
// import PropertiesListPage from './components/PropertiesListPage';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        {/* Navbar at the top It is fixed */}
        <Navbar  />

        {/* Main content */}
        <Routes>
          {/* HomePage Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Additional Routes */}
          <Route path="/dashboardlayout/*" element={<DashboardLayout />} />
          <Route path="/addproperty" element={<AddProperty />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/properties" element={<PropertiesListPage />} /> */}
          {/* <Route path="/properties/:id" element={<PropertyDetailsPage />} /> */}
        </Routes>
        
        {/* Footer at the bottom */}
        <Footer />
      </Router>
    </ChakraProvider>
  );
};

export default App;
