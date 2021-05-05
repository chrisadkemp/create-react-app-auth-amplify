import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({}));

const NameRoomBox = (props, ...rest) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Typography variant="h5" className="header-message">
        {props.roomName}
      </Typography>
    </Grid>
  );
};

export default NameRoomBox;
