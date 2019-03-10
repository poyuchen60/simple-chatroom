import React, { Component, Fragment } from 'react';
import Modal from '../Modal';
import UserInviteDialog from './UserInviteDialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import ArrowIcon from '@material-ui/icons/KeyboardArrowDown';

import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    paddingTop: '5px',
    height: 'calc(100% - 68px)',
    display: 'flex'
  },
  message: {
    flex: 1,
    height: '100%'
  },
  members: {
    width: '200px',
    height: '100%',
    backgroundColor: "#ffe6e6",
    overflowY: 'auto'
  },
  list:{
    height: 'calc(100% - 100px)',
    overflowY: 'scroll'
  },
  input: {
    height: '100px',
    backgroundColor: '#e6f7ff',
    display: 'flex',
  },
  inputButton: {
    height: '50px',
  },
  inputText: {
    height: '72px'
  },
  textWraper: {
    flex: 1,
    paddingLeft: '10px'
  },
  buttonWraper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px'
  },
  unreadButton: {
    position: 'fixed',
    left: '50%',
    bottom: '120px',
    zIndex: 10
  }
})

class ChatroomInput extends Component {
  constructor(props){
    super(props);
    this.state = ({
      text: '',
      locked: false
    });
    this.inputRef = React.createRef();
  }
 

  handleEnter = e => {
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault();
      this.handleSubmit();
    }
  }

  handleTextChange = event => {
    this.setState({text: event.target.value})
  };
  handleSubmitSuccess = () => {
    this.setState({locked: false, text: ''});
  };
  
  handleSubmit = () => {
    const { text, locked } = this.state;
    const { onSend } = this.props;
    if (!locked && text.length > 0){
      onSend(text, this.handleSubmitSuccess);
      this.setState({locked: true});
    }
  }

  render(){
    const { classes } = this.props;
    const { text } = this.state;
    const { handleTextChange, handleSubmit, handleEnter, inputRef } = this;
    return <div className={classes.input}>
      <div className={classes.textWraper}>
        <TextField
          autoFocus
          inputRef={inputRef}
          onKeyDown={handleEnter}
          value={text}
          onChange={handleTextChange}
          fullWidth
          multiline
          rowsMax="2"
          InputProps={{className: classes.inputText}}
          label="訊息"
          className={classes.inputText}
          placeholder="在此輸入訊息..."
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className={classes.buttonWraper}>
        <Button
          onClick={handleSubmit}
          color='default'
          className={classes.inputButton}
        >傳送</Button>
      </div>
    </div>
  }
}

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.scrollDownHelper = React.createRef();
    this.messagesDiv = React.createRef();
    this.state = {
      selectedMember: undefined,
      inviteDialog: false,
      atBottom: true,
    }
  }
  scrollToBottom = (behavior) => this.scrollDownHelper.current
    .scrollIntoView({ behavior: behavior || "auto" });
  componentDidUpdate = () => {
    const { chatroom: {id, unread}, onRead } = this.props;
    if(this.state.atBottom){
      this.scrollToBottom('auto');
      unread > 0 && onRead(id);
    }
  }
  componentDidMount = () => this.scrollToBottom('auto');
  handleScroll = () => {
    const {
      clientHeight, scrollTop, scrollHeight
    } = this.messagesDiv.current;
    const atBottom = scrollTop + clientHeight >= scrollHeight;
    (atBottom !== this.state.atBottom) && this.setState({atBottom});
  }
  handleDialogClose = () => this.setState({
    selectedMember: undefined,
    inviteDialog: false
  });
  handleMemberSelect = (member) => this.setState({selectedMember: member});
  handleInviteDialogOpen = () => this.setState({inviteDialog: true});

  render(){
    const { 
      chatroom: {
        name, members, messages, unread
      },
      classes, onSend, socket, onInvite
    } = this.props;
    const { selectedMember, inviteDialog } = this.state;
    const {
      handleDialogClose, handleMemberSelect, handleInviteDialogOpen,
      handleScroll, scrollToBottom
    } = this;
    return <Fragment>
      {selectedMember && <Modal>
        <Dialog
          open={true}
          onClose={handleDialogClose}
          aria-labelledby="chatroom-member-dialog"
        >
          <DialogTitle>{selectedMember.name}</DialogTitle>
          <DialogContent>{selectedMember.intro}</DialogContent>
        </Dialog>
      </Modal>}
      { inviteDialog && !selectedMember && <Modal>
        <UserInviteDialog
          onInvite={onInvite}
          onClose={handleDialogClose}
          socket={socket}
        />
      </Modal>}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {name}
          </Typography>
          <Button
            color='inherit'
            onClick={handleInviteDialogOpen}
          >邀請</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <div className={classes.message}>
            {unread > 0 && <Button
              onClick={() => scrollToBottom()}
              className={classes.unreadButton}
            >{`新訊息: ${unread}`}<ArrowIcon /></Button>}
          <div
            ref={this.messagesDiv}
            onScroll={handleScroll}
            className={classes.list}
          >
            <List className={classes.charoomList}>
              {messages.map( (m, index) => {
                const { name, text } = m;
                return <ListItem
                  key={index}
                >
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                  <ListItemText primary={name} secondary={text}/>
                </ListItem>
              })}
            </List>
            <div ref={this.scrollDownHelper}></div>
          </div>
          <ChatroomInput classes={classes} onSend={onSend}/>
        </div>
        <aside className={classes.members}>
          <List>
            {members.map( m => {
              const { name, id } = m;
              return <ListItem
                button 
                onClick={() => handleMemberSelect(m)}
                key={`user#${id}`}
              >
                <Avatar>
                  <PersonIcon />
                </Avatar>
                <ListItemText primary={name}/>
              </ListItem>
            })}
          </List>
        </aside>
      </div>
    </Fragment>
  }
}

export default withStyles(styles)(Chatroom);