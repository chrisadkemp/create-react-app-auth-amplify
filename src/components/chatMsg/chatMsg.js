import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(() => ({}));

const ChatMsg = (props, ...rest) => {
  const classes = useStyles();

  const dummyUserId = 1;

  return (
    <Grid container>
      <Grid item xs={12}>
        <ListItemText
          align={props.msgUserID == dummyUserId ? 'right' : 'left'}
          primary={props.msgText}
        ></ListItemText>
      </Grid>
      <Grid item xs={12}>
        <ListItemText
          align={props.msgUserID == dummyUserId ? 'right' : 'left'}
          secondary={props.msgTimestamp}
        ></ListItemText>
      </Grid>
    </Grid>
  );
};

export default ChatMsg;
