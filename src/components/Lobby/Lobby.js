import React, { Component } from 'react';
import Modal from '../Modal';
import NewRoomDialog from './NewRoomDialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    maxWidth: 200,
    margin: 10
  },
  cardContainer: {
    margin: 20,
    display: 'flex',
    flexWrap: 'wrap'
  }
});

const RoomCard = ({name, members, classes, onJoin}) => <Card className={classes.card}>
  <CardContent>
    <Typography variant="h6">
      {name}
     </Typography>
    <Typography color="textSecondary" gutterBottom>
      {`成員: ${members}`}
    </Typography>
  </CardContent>
  <CardActions>
    <Button onClick={onJoin} size="small">Join</Button>
  </CardActions>
</Card>

class Lobby extends Component {
  state = {
    chatrooms: [],
    newRoomDialogOpen: false
  }
  handleLobbySub = () => {
    const { socket } = this.props;
    socket.emit("join_lobby", chatrooms => {
      this.setState({chatrooms}, () => {
        socket.on("lobby", ({type, value}) => {
          let chatrooms = [...this.state.chatrooms];
          let index, newChatroom;
          switch(type){
            case "new_chatroom":
              chatrooms.push(value);
              break;
            case "new_member":
              index = chatrooms.findIndex( c => c.id === value);
              newChatroom = {...chatrooms[index]};
              newChatroom.members = newChatroom.members + 1;
              chatrooms.splice(index, 1, newChatroom);
              break;
            case "delete_member":
              index = chatrooms.findIndex( c => c.id === value);
              newChatroom = {...chatrooms[index]};
              newChatroom.members = newChatroom.members - 1;
              chatrooms.splice(index, 1, newChatroom);
              break;
            default:
              console.log("default");
          }
          this.setState({chatrooms});
        });
      })
    })
  }
  handleLobbyUnsub = () => {
    const { socket } = this.props;
    socket.off("lobby");
  }
  componentDidMount = () => {
    this.props.connected && this.handleLobbySub();
  }
  componentWillUnmount = () => {
    this.handleLobbyUnsub();
  }
  componentDidUpdate = (prevPros) => {
    const { connected } = this.props;
    if(connected !== prevPros.connected){
      connected
      ? this.handleLobbySub()
      : this.handleLobbyUnsub()
    }
  }
  handleNewChatroom = (options={}) => {
    const { socket } = this.props;
    socket.emit('create_chatroom', options);
  }
  handleDialogOpen = () => this.setState({newRoomDialogOpen: true});
  handleDialogClose = () => this.setState({newRoomDialogOpen: false});

  render(){
    const { classes, onJoin, connected } = this.props;
    const { chatrooms, newRoomDialogOpen } = this.state;
    const {
      handleNewChatroom,
      handleDialogOpen, handleDialogClose
    } = this;
    return <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Lobby
          </Typography>
          <Button
            disabled={!connected}
            onClick={handleDialogOpen}
            color='inherit'
          >New</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.cardContainer}>
        {connected
          ? chatrooms.map( ({name, members, id}) =>
            <RoomCard
              key={id}
              name={name}
              members={members}
              classes={classes}
              onJoin={onJoin(id)}
            />
          )
          : <Typography variant="h5" gutterBottom>
            連線中
          </Typography>
        }
      </div>
      {newRoomDialogOpen && <Modal>
        <NewRoomDialog
          onSubmit={handleNewChatroom}
          onClose={handleDialogClose}
        />
      </Modal>}
    </div>
  }
}


export default withStyles(styles)(Lobby);