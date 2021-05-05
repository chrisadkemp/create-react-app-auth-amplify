import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import NameRoomBox from '../components/nameRoomBox';
import ChatMsg from '../components/chatMsg';
import SaySomethingBox from '../components/saySomethingBox';
import ContactSelect from '../components/contactSelect';
import UserStatusBox from '../components/userStatusBox';

const useStyles = makeStyles(() => ({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '100%',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '75vh',
    overflowY: 'auto',
  },
}));

const Index = () => {
  const classes = useStyles();

  const dummyMessages = [
    {
      userID: 1,
      messageText: 'This is a test message',
      timestamp: '2021-04-08T13:32:03.587Z',
    },
    {
      userID: 2,
      messageText: 'This is a test response',
      timestamp: '2021-04-08T13:32:59.048Z',
    },
  ];

  const dummyUserData = [
    {
      userID: 1,
      userName: 'Matous Kundrik',
      userImage: '/people/matt.jpeg',
    },
    {
      userID: 2,
      userName: 'James Karat',
      userImage: '/people/james.jpeg',
    },
    {
      userID: 3,
      userName: 'Brendan Beekan',
      userImage: '/people/brendan.jpeg',
    },
    {
      userID: 4,
      userName: 'cryptotrader2001',
      userImage: '/people/generic.jpeg',
    },
  ];

  const dummyUser = {
    userID: 1,
    userName: 'Matous Kundrik',
    userImage: '/people/matt.jpeg',
  };

  return (
    <div>
      <Grid container>
        <NameRoomBox roomName="Test Room" />
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <UserStatusBox
            userName={dummyUser.userName}
            userImage={dummyUser.userImage}
          />
          <Divider />
          <Grid item xs={12} style={{ padding: '10px' }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            {dummyUserData.map((user, index) => {
              return (
                <ContactSelect
                  contactName={user.userName}
                  contactImage={user.userImage}
                />
              );
            })}
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            {dummyMessages.map((message, index) => {
              return (
                <ListItem key={index}>
                  <ChatMsg
                    msgUserID={message.userID}
                    msgText={message.messageText}
                    msgTimestamp={message.timestamp}
                  />
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <SaySomethingBox />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
