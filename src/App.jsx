import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* You can add more routes for Profile, Settings, etc */}
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
