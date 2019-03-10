import React, { Component } from 'react';
import io from 'socket.io-client'

import NaviationBar from './components/NavigationBar/NavigationBar';
import Chatroom from './components/Chatroom/Chatroom';
import Lobby from './components/Lobby/Lobby'
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  container:{
    height: '100%',
    display: 'flex'
  },
  nav: {
    paddingTop: '50px',
    width: '300px',
    borderRight: '1px solid gray',
    height: '100%'
  },
  main: {
    flex: 1,
    height: '100%'
  }
})

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      socket:  io('https://infinite-waters-19418.herokuapp.com/'),
      invitations: [],
      index: -1,
      chatrooms: {},
      chatroomIndex: [],
      name: '', intro: '', id: -1,
    }
  }

  componentDidMount = () => {
    this.handleLogin();
  }

  handleLogin = () => {
    const { socket } = this.state;
    socket.emit('login', (info) => {
      this.setState(info,
        () => socket.on(`user#${info.id}`, ({type, value}) => {
          let { invitations } = this.state;
          switch(type){
            case 'new_invitation':
              invitations = [...invitations, value];
              break;
            default:
              console.log('default');
          }
          this.setState({invitations});
        })
      );
    });
  }
  handleUserInvite = (chatroomId) => (inviteeId) => {
    const { socket } = this.state;
    socket.emit('invite_user', {
      inviteeId, chatroomId
    }, console.log);
  }
  handleChatroomRead = (id, other) => {
    const { chatrooms } = this.state;
    const newChatroom = {...chatrooms[id], unread: 0}
    this.setState({...other, chatrooms: {...chatrooms, [id]: newChatroom}});
  }
  handleChatroomSelect = (index) => () => {
    if(index === this.state.index)
      return;
    else if(index >= 0){
      const id = this.state.chatroomIndex[index];
      this.handleChatroomRead(id, {index})
    } else {
      this.setState({index});
    }
  }
  handleChatroomJoin = (chatroomId) => () => {
    const { socket, chatrooms, chatroomIndex } = this.state;
    socket.emit("join_chatroom", chatroomId, chatroom => {
      if(!chatroom) return;
      const { id } = chatroom;
      this.setState({
        chatrooms: {...chatrooms, [id]: {...chatroom, unread: 0}},
        chatroomIndex: [...chatroomIndex, id]
      }, () => {
        socket.on(`chatroom#${id}`, data => {
          const { type, value } = data;
          const { chatrooms } = this.state;
          let { members, messages, name, unread } = chatrooms[id];
          let i = -1, sysMsg = undefined;
          switch(type){
            case "new_message":
              messages = [...messages, value];
              unread = unread + 1;
              break;
            case "new_member":
              members = [...members, value];
              sysMsg = {
                name: '系統訊息',
                text: `${value.name || `User#${value.id}`} 加入聊天室`
              }
              break;
            case "delete_member":
              i = members.findIndex( m => m.id === value)
              sysMsg = {
                name: '系統訊息',
                text: `${members[i].name} 離開聊天室`
              }
              members.splice(i, 1);
              break;
            case "update_member":
              i = members.findIndex( m => m.id === value.id);
              messages = messages.map(m =>
                m.userId === value.id 
                ? {...m, name: value.name}
                : m
              );
              sysMsg = value.name === members[i].name
                ? undefined
                : {
                  name: "系統訊息",
                  text: `${members[i].name} 改名為 ${value.name}`
                }
              members.splice(i, 1, value);
              break;
            default:
              console.log("default");
          }
          this.setState({chatrooms: {...chatrooms, [id]:
            {id, name, members, unread,
              messages: sysMsg ? messages.concat(sysMsg) : messages
            }
          }});
        })
      })
    })
  }
  handleChatroomLeave = chatroomId => () => {
    const { socket, chatrooms, chatroomIndex, index } = this.state;
    socket.emit("leave_chatroom", chatroomId, id => {
      if(id !== chatroomId ) console.log('Wrong!!')
      else {
        const i = chatroomIndex.indexOf(id);
        const newIndex = chatroomIndex.filter( i => i !== id);
        const newChatrooms = { ...chatrooms, id: undefined};
        socket.off(`chatroom#${id}`);
        this.setState({
          chatrooms: newChatrooms,
          chatroomIndex: newIndex,
          index: index > i
            ? index - 1
            : index === i ? -1 : index,
        });
      }
    })
  }
  handleSendMessage = chatroomId => (text, callback) => {
    const { socket } = this.state;
    socket.emit("new_message", {chatroomId, text}, (err) => {
      if(!err) callback && callback();
    });
  }
  handleInfoUpdate = (info={}) => {
    const { socket } = this.state;
    socket.emit("update_info", info, ({name, intro}) => {
      this.setState({name, intro});
    });
  }
  handleDecline = (invitationId) => () => {
    const { socket } = this.state;
    socket.emit('decline_invitation', invitationId, (err) => {
      if(!err){
        const invitations = this.state.invitations.filter( i => i.id !== invitationId);
        this.setState({invitations});
      }
    })
  }
  handleAccept = (invitationId) => () => {
    const { socket } = this.state;
    socket.emit('accept_invitation', invitationId, (err, chatroomId) => {
      if(!err){
        const invitations = this.state.invitations.filter( i => i.id !== invitationId);
        this.setState({invitations}, this.handleChatroomJoin(chatroomId));
      }
    })
  }

  render() {
    const { classes } = this.props;
    const {
      chatroomIndex, chatrooms, index,
      invitations, socket, name, intro
    } = this.state;
    const {
      handleChatroomSelect,
      handleChatroomJoin, handleSendMessage,
      handleInfoUpdate, handleChatroomLeave, handleUserInvite,
      handleDecline, handleAccept, handleChatroomRead
    } = this;
    const chatroomList = chatroomIndex.map( id => chatrooms[id]);
    return <div className={classes.container}>
      <CssBaseline />
      <nav className={classes.nav}>
        <NaviationBar
          index={index}
          onAccept={handleAccept}
          onDecline={handleDecline}
          name={name}
          intro={intro}
          onInfoUpdate={handleInfoUpdate}
          chatrooms={chatroomList}
          onSelect={handleChatroomSelect}
          invitations={invitations}
          onLeave={handleChatroomLeave}
        />
      </nav>
      <section className={classes.main}>
        {
          index >= 0 
          ? <Chatroom
            onRead={handleChatroomRead}
            onInvite={handleUserInvite(chatroomIndex[index])}
            socket={socket}
            key={chatroomIndex[index]}
            chatroom={chatroomList[index]}
            onSend={handleSendMessage(chatroomIndex[index])}
          />
          : <Lobby socket={socket} onJoin={handleChatroomJoin}/>
        }
      </section>
    </div>
  }
}

export default withStyles(styles)(App);