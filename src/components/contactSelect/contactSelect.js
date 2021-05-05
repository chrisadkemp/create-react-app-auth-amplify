import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(() => ({}));

const ContactSelect = (props, ...rest) => {
  const classes = useStyles();

  return (
    <ListItem button key={props.contactName.replace(/[^0-9a-z]/gi, '')}>
      <ListItemIcon>
        <Avatar alt={props.contactName} src={props.contactImage} />
      </ListItemIcon>
      <ListItemText primary={props.contactName}>
        {props.contactName}
      </ListItemText>
      <ListItemText secondary="online" align="right"></ListItemText>
    </ListItem>
  );
};

export default ContactSelect;
