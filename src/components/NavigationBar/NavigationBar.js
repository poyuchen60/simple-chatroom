import React, { Component, Fragment } from 'react';
import Modal from '../Modal';
import UserInfoDialog from './UserInfoDialog';
import InvitationDialog from './InvitationDialog';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ClearIcon from '@material-ui/icons/Clear';

import Badge from '@material-ui/core/Badge';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  charoomList: {
    width: '100%'
  }
})

class NavigationBar extends Component {
  state = {
    userDialog: true,
    invitationDialog: false
  }

  handleDialogOpen = dialog => () => this.setState({[dialog]: true});
  handleDialogClose = () => this.setState({
    userDialog: false,
    invitationDialog: false
  });
  handleSubmit = (info) => {
    const { onInfoUpdate } = this.props;
    onInfoUpdate(info);
  }

  render(){
    const { handleDialogClose, handleDialogOpen, handleSubmit } = this;
    const { userDialog, invitationDialog } = this.state;
    const {
      classes, chatrooms, invitations, index,
      onSelect, name, intro, onLeave, onDecline, onAccept
    } = this.props;

    return <Fragment>
      <Typography align='center' variant="h3" gutterBottom>
        Chatroom
      </Typography>
      <div className={classes.buttonGroup}>
        <IconButton
          onClick={handleDialogOpen('userDialog')}
          aria-label="UserInfo"
        >
          <FaceIcon />
        </IconButton>
        <IconButton
          onClick={handleDialogOpen('invitationDialog')}          
          aria-label="Invitation"
        >
          <Badge color="secondary" badgeContent={invitations.length}>
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={onSelect(-1)} aria-label="Lobby">
          <HomeIcon />
        </IconButton>
      </div>
      <List className={classes.charoomList}>
      {chatrooms.map( (c, i) => {
        const { name, members, id, unread } = c;
        return <ListItem
          onClick={onSelect(i)}
          button 
          key={`chatroom(${id})`}
        >
          <Badge color='secondary' badgeContent={index === i ? 0 : unread}>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </Badge>
          <ListItemText primary={name} secondary={`人數: ${members.length}`} />
          <ListItemSecondaryAction>
            <IconButton onClick={onLeave(id)}aria-label="LeaveChatroom">
              <ClearIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      })}
    </List>
    {userDialog && <Modal>
      <UserInfoDialog
        name={name}
        intro={intro}
        onClose={handleDialogClose}
        onSubmit={handleSubmit}
      />
    </Modal>}
    {invitationDialog && !userDialog &&<Modal>
      <InvitationDialog
        onAccept={onAccept}
        onDecline={onDecline}
        invitations={invitations}
        onClose={handleDialogClose}
      />
    </Modal>}
    </Fragment>
  }
}

export default withStyles(styles)(NavigationBar);