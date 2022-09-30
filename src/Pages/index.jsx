// pages/index.js

import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';
import { SettingsPanel } from '../components/SettingsPanel';

import { Container } from '../components/User/Container';
import { Toolbox } from '../components/Toolbox';
// import { Text } from '../components/User/Text';
import { Card } from '../components/User/Card';
import { TopBar } from '../components/TopBar';
import { Button } from '../components/User/Button';
import { Text } from '../components/User/Text';
import { Editor } from '@craftjs/core';
import { Frame } from '@craftjs/core';
import { Element } from '@craftjs/core';

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
        <Editor resolver={{Card, Button, Text, Container}}> 
          <Grid container spacing={3}>
            <Grid item xs>
              <Frame>
                <Container padding={5} background="#eee">
                  <Card />
                  <Button size="small" variant="outlined">Click</Button>
                  <Text size="small" text="Hi world!" />
                  <Container padding={6} background="#999">
                    <Text size="small" text="It's me again!" />
                  </Container>
                </Container>
              </Frame>
            </Grid>
            <Grid item xs={3}>
              <Paper >
                  <Toolbox />
                  <SettingsPanel />
              </Paper>          
            </Grid>
          </Grid>
        </Editor>
    </div>
  );
}