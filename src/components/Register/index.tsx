import { Box, Grid } from "@mui/material"
import { MainBanner } from "./MainBanner"
import { RegistrationFormContainer } from "./RegistrationFormContainer"

const RegisterationLayout = () => {

  return (
    <Box>
      <Grid container spacing={3}>
        <MainBanner />
        <RegistrationFormContainer />
      </Grid>
    </Box>
  )
}

export default RegisterationLayout;