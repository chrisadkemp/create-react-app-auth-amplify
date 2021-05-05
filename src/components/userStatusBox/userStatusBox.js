import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(() => ({}));

const UserStatusBox = (props, ...rest) => {
  const classes = useStyles();

  return (
    <List>
      <ListItem button key="RemySharp">
        <ListItemIcon>
          <Avatar alt={props.userName} src={props.userImage} />
        </ListItemIcon>
        <ListItemText primary={props.userName}></ListItemText>
      </ListItem>
    </List>
  );
};

export default UserStatusBox;
