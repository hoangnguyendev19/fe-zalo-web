import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { useState } from "react";
import ListFriend from "../components/ListFriend";
import ListGroup from "../components/ListGroup";
import RequestFriend from "../components/RequestFriend";
import AddFriend from "../components/AddFriend";
import CreateGroup from "../components/CreateGroup";
import Chat from "../components/Chat";
import { useDispatch, useSelector } from "react-redux";
import ConversationAPI from "../api/ConversationAPI";
import { createConversation } from "../redux/conversationSlice";

const Contact = () => {
  const [show, setShow] = useState("ListFriend");
  const [conversation, setConversation] = useState(null);
  const { conversations } = useSelector((state) => state.conversation);
  const { user, accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleOpenFriendChat = async (id) => {
    const conv = conversations.find((conver) => {
      if (
        conver.type === "FRIEND" &&
        conver.members.find((mem) => mem.id === id)
      ) {
        return conver;
      }
    });
    if (conv) {
      setConversation(conv);
    } else {
      const newConver = {
        type: "FRIEND",
        members: [user.id, id],
        admin: user.id,
      };
      const data = await ConversationAPI.createConversation(
        newConver,
        accessToken
      );
      if (data) {
        dispatch(createConversation(data));
        setConversation(data);
      }
    }
    setShow("Chat");
  };

  const handleOpenGroupChat = (conver) => {
    setConversation(conver);
    setShow("Chat");
  };

  return (
    <Grid container item xs={11.3}>
      <Grid item xs={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginRight: "10px",
          }}
        >
          <TextField
            placeholder="Tìm kiếm"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            fullWidth
          />
          <Box sx={{ marginLeft: "5px" }}>
            <AddFriend />
          </Box>
          <Box sx={{ marginLeft: "5px" }}>
            <CreateGroup />
          </Box>
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Button
            sx={{
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "#000",
              textTransform: "none",
            }}
            fullWidth
            onClick={() => setShow("ListFriend")}
          >
            <PersonOutlineOutlinedIcon />
            <Typography fontSize={16} fontWeight="bold" marginLeft={3}>
              Danh sách bạn bè
            </Typography>
          </Button>
          <Button
            sx={{
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "#000",
              textTransform: "none",
            }}
            fullWidth
            onClick={() => setShow("ListGroup")}
          >
            <PeopleAltOutlinedIcon />
            <Typography fontSize={16} fontWeight="bold" marginLeft={3}>
              Danh sách nhóm
            </Typography>
          </Button>
          <Button
            sx={{
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "#000",
              textTransform: "none",
            }}
            fullWidth
            onClick={() => setShow("RequestFriend")}
          >
            <DraftsOutlinedIcon />
            <Typography fontSize={16} fontWeight="bold" marginLeft={3}>
              Lời mời kết bạn
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={8.7}
        sx={{
          borderLeftWidth: 1,
          borderLeftColor: "rgba(0,0,0,0.3)",
          borderLeftStyle: "solid",
          height: "100%",
          paddingRight: "20px",
        }}
      >
        {show === "ListFriend" && (
          <ListFriend handleOpenChat={handleOpenFriendChat} />
        )}
        {show === "ListGroup" && (
          <ListGroup handleOpenChat={handleOpenGroupChat} />
        )}
        {show === "RequestFriend" && (
          <RequestFriend handleOpenChat={handleOpenFriendChat} />
        )}
        {show === "Chat" && (
          <Chat conversation={conversation} setConversation={setConversation} />
        )}
      </Grid>
    </Grid>
  );
};

export default Contact;
