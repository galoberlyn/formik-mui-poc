import { Card, Grid } from "@mui/material"
import { RegistrationForm } from "./RegistrationForm"
import { RegistrationTitle } from "./RegistrationTitle"

export const RegistrationFormContainer = () => {

  return (
    <Grid item md={6} className="vertical-align" sx={{ margin: { xs: 'auto' }}}>
      <Card variant="outlined" className="main-card">
        <RegistrationTitle />
        <RegistrationForm />
      </Card>
    </Grid>
  )
}