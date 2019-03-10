import React, { Component } from 'react';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class NewRoomDialog extends Component {
  state = {
    name: ''
  }

  handleTextChange = event => this.setState({name: event.target.value});
  handleSubmit = () => {
    const { onSubmit, onClose } = this.props;
    const { name } = this.state;
    onSubmit({name});
    onClose();
  }

  render(){
    const { name } = this.state;
    const { onClose } = this.props;
    const { handleTextChange, handleSubmit } = this;
    return <Dialog
      open={true}
      onClose={onClose}
    >
      <DialogTitle>建立新聊天室</DialogTitle>
      <DialogContent>
        <TextField
          value={name}
          onChange={handleTextChange}
          autoFocus
          margin="dense"
          label="房名"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          取消
        </Button>
        <Button onClick={handleSubmit} color="primary">
          確定
        </Button>
      </DialogActions>
    </Dialog>
  }
}


export default NewRoomDialog;