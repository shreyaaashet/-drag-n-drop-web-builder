// pages/index.js

import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';


import { SettingsPanel } from '../components/SettingsPanel';



import { Button } from '../compoents/user/Button';
import { Card } from '../compoents/user/Card';
import { Text } from '../compoents/user/Text';
import { Toolbox } from '../compoents/Toolbox';
import { TopBar } from '../compoents/TopBar';
import { Container } from '../compoents/User/Container';


export default function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Grid container spacing={3} style={{paddingTop: "10px"}}>
        <TopBar />
        <Grid item xs>
          <Container padding={5} background="#eee">
            <Card />
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Paper>
              <Toolbox />
              <SettingsPanel />
          </Paper>          
        </Grid>
      </Grid>
    </div>
  );
}
