import { Box } from "@mui/system"
import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import CreativeDesign from "./components/CreativeDesign"
import Experience from "./components/Experience"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"

function App() {
  return (
    <Box>
      <Header></Header>
      <Hero></Hero>
      <CreativeDesign></CreativeDesign>
      <Experience></Experience>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </Box>
  )
}

export default App
