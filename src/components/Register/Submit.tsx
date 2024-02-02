import { Button, Grid } from "@mui/material"
import { Fragment } from "react"

export const Submit = () => {

  return (
    <Fragment>
      <Grid item xs={10}>
        <Button type="submit" variant="contained" data-test="button:submit">
          Register
        </Button>
      </Grid>
    </Fragment>
  )
}