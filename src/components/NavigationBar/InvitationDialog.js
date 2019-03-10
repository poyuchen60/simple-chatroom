import React from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AcceptIcon from '@material-ui/icons/Check';
import DeclineIcon from '@material-ui/icons/Close';

const InvitationDialog = (props) => {
  const { invitations, onClose, onDecline, onAccept } = props;

  return <Dialog
    open={true}
    onClose={onClose}
    maxWidth='sm'
    fullWidth
  >
    <DialogTitle>邀請</DialogTitle>
    <DialogContent>
      <List>
        {invitations.map( ({id, user, chatroom}) => <ListItem
          key={id}
        >
          <ListItemText
            primary={`${user} 邀請你至 ${chatroom} 聊天室`}
          />
          <ListItemSecondaryAction>
            <IconButton onClick={onAccept(id)} aria-label="accept">
              <AcceptIcon />
            </IconButton>
            <IconButton onClick={onDecline(id)} aria-label="decline">
              <DeclineIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>)}
      </List>
    </DialogContent>
  </Dialog>
}

export default InvitationDialog;