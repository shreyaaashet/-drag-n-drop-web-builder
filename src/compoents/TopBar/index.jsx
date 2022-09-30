// components/Topbar.js

import React from "react";
import { Box, FormControlLabel, Switch, Grid, Button as MaterialButton } from "@material-ui/core";



export const TopBar = () => {
  return (
    <Box px={1} py={1} mt={3} mb={1} sx={{backgroundColor:"#cbe8e7"}}>
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked={true} />}
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton size="small" variant="outlined" color="secondary">Serialize JSON to console</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};