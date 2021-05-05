import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(() => ({}));

const SaySomethingBox = (message) => {
  const classes = useStyles();

  return (
    <Grid container style={{ padding: '20px' }}>
      <Grid item xs={11}>
        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
      </Grid>
      <Grid xs={1} align="right">
        <Fab color="primary" aria-label="add">
          <SendIcon />
        </Fab>
      </Grid>
    </Grid>
  );
};

export default SaySomethingBox;
