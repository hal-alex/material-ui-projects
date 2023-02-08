import { Box, Stack } from "@mui/system"
import Typography from "@mui/material/Typography"
import Card from "./Card"

import strategy_svg from "../img/strategy.svg"
import design_svg from "../img/vector-art-and-design-svgrepo-com.svg"
import development_svg from "../img/code-coding-development-programming-web-webpage-svgrepo-com.svg"

const CreativeDesign = () => {
  const data = [
    { title: "Strategy", svg: strategy_svg },
    { title: "Product Design", svg: design_svg },
    { title: "Development", svg: development_svg },
  ]

  const styles = {
    creativeDesign: (theme) => ({
      padding: "60px 20px 80px",
      textAlign: "center",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
        justifyContent: "center",
        padding: "190px 20px",
      },
    }),
    wrapper: (theme) => ({
      [theme.breakpoints.up("md")]: {
        maxWidth: "1240px",
        alignItems: "center",
        gap: "35px",
      },
    }),
    stack: (theme) => ({
      marginTop: "44px",
      gap: "35px",
      flexDirection: "initial",
      flexWrap: "wrap",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      [theme.breakpoints.up("lg")]: {
        maxWidth: "1240px",
        alignItems: "center",
        gap: "15px",
      },
    }),
  }

  return (
    <Box sx={styles.creativeDesign}>
      <Box sx={styles.wrapper}>
        <Typography variant="h2">creative design solutions</Typography>
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", margin: "25px 0" }}
        >
          professional design agency to provide solutions
        </Typography>
        <Stack sx={styles.stack}>
          {data.map((item, index) => {
            return (
              <Card title={item.title} imgSrc={item.svg} key={index}></Card>
            )
          })}
        </Stack>
      </Box>
    </Box>
  )
}

export default CreativeDesign
