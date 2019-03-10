import React, { Component } from 'react';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserInfoDialog extends Component {
  state = {
    name: this.props.name,
    intro: this.props.intro,
  }

  handleTextChange = name => 
    event => this.setState({[name]: event.target.value});
  
  handleSubmit = () => {
    const { name, intro } = this.state;
    const { onSubmit, onClose } = this.props;
    onSubmit({name, intro});
    onClose();
  }

  render(){
    const { onClose } = this.props;
    const { name, intro } = this.state;
    const { handleTextChange, handleSubmit } = this;
    return <Dialog
      open={true}
      onClose={onClose}
    >
      <DialogTitle>個人資料</DialogTitle>
      <DialogContent>
        <TextField
          value={name}
          onChange={handleTextChange("name")}
          margin="dense"
          label="名稱"
          type="text"
          fullWidth
        />
        <TextField
          value={intro}
          onChange={handleTextChange("intro")}
          margin="dense"
          label="自我介紹"
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


export default UserInfoDialog;