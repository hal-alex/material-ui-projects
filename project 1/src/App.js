import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import CustomButton from "./components/Button"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Card from "./components/Card"
import CreativeDesign from "./components/CreativeDesign"
import Experience from "./components/Experience"

function App() {
  return (
    <Box>
      <Header></Header>
      <Hero></Hero>
      <CreativeDesign></CreativeDesign>
      <Experience></Experience>
    </Box>
  );
}

export default App;
