import React, { Component } from 'react';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class UserInviteDialog extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      users: [],
      selected: [-1],
    }
  }
  handleSubmit = () => {
    const { onInvite, onClose } = this.props;
    const { selected } = this.state;
    if(selected[0] !== -1)
      onInvite(selected[0]);
    onClose();
  }
  handleSearchUsers = () => {
    const { socket } = this.props;
    const { text } = this.state;
    socket.emit('all_users', text , users => this.setState({users}));
  }
  handleUserSelect = (id) => () => this.setState({selected: [id]});

  componentDidMount = () => {
    this.handleSearchUsers();
  }

  render(){
    const { handleUserSelect, handleSubmit } = this;
    const { onClose } = this.props;
    const { users, selected } = this.state;
    return <Dialog
      open={true}
      onClose={onClose}
      aria-labelledby="user-invite-dialog"
    >
      <DialogTitle>邀請</DialogTitle>
      <DialogContent>
        <List>
          {users.map( ({id, name}) =>
            <ListItem
              button
              selected={selected[0] === id}
              onClick={handleUserSelect(id)}
              key={id}
            >
              <ListItemText primary={name}/>
            </ListItem>
          )}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit}
          disabled={selected[0] === -1}
          color="primary"
        >
          邀請
        </Button>
        <Button onClick={onClose} color="primary">
          取消
        </Button>
      </DialogActions>
  </Dialog>
  }
}

export default UserInviteDialog;