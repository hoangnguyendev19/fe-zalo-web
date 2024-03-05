import {
  Box,
  TextField,
  Button,
  Avatar,
  Typography,
  AvatarGroup,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Drawer,
  ListItemIcon,
  CircularProgress,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useEffect, useState } from "react";
import CreateGroup from "./CreateGroup";
import { useSelector } from "react-redux";
import MessageSender from "./MessageSender";
import MessageReceiver from "./MessageReceiver";
import MessageAPI from "../api/MessageAPI";
import { io } from "socket.io-client";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import UploadAPI from "../api/UploadAPI";

const Chat = ({ conversation }) => {
  const { name, members, admin, type, id } = conversation;
  const { user, accessToken } = useSelector((state) => state.user);
  const [friend, setFriend] = useState({});
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [content, setContent] = useState("");
  const [typeMsg, setTypeMsg] = useState("TEXT"); // TEXT - IMAGE - FILE - VIDEO

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
      <Typography
        textAlign="center"
        fontWeight="bold"
        paddingTop="20px"
        paddingBottom="20px"
        fontSize="20px"
      >
        Thông tin hội thoại
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        {friend?.avatarUrl ? (
          <Avatar
            src={friend.avatarUrl}
            alt="avatar"
            sx={{ width: 60, height: 60 }}
          />
        ) : (
          <Avatar sx={{ width: 60, height: 60 }}>{friend.fullName}</Avatar>
        )}
        <Typography
          textAlign="center"
          paddingTop="10px"
          fontWeight="bold"
          fontSize="18px"
        >
          {friend.fullName}
        </Typography>
      </Box>
      <Divider />
      <List>
        {["Thông tin cá nhân", "Tắt thông báo", "Xoá cuộc trò chuyện"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ color: index === 2 ? "red" : "inherit" }}>
                <ListItemIcon>
                  {index === 0 && <AccountCircleIcon />}
                  {index === 1 && <NotificationsOffIcon />}
                  {index === 2 && <DeleteIcon color="error" />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await MessageAPI.getAllMessageForConversation(
          conversation?.id,
          accessToken
        );
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    if (type === "FRIEND") {
      const member = members.filter((mem) => mem.id !== user.id);
      setFriend(member[0]);
    }
  }, [conversation]);

  useEffect(() => {
    const newSocket = io(`${import.meta.env.VITE_REACT_APP_SOCKET_URL}`);
    newSocket.emit("join_room", {
      conversationId: conversation.id,
      userId: user.id,
    });
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socket.off("receive_message");
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("revoke_message", (messageId) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === messageId) {
              return { ...msg, isRevoked: true };
            }
            return msg;
          });
        });
      });

      return () => {
        socket.off("revoke_message");
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("like_message", (messageId) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === messageId) {
              return { ...msg, likes: [...msg.likes, user.id] };
            }
            return msg;
          });
        });
      });

      return () => {
        socket.off("like_message");
      };
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("unlike_message", (messageId) => {
        setMessages((prevMessages) => {
          return prevMessages.map((msg) => {
            if (msg.id === messageId) {
              const newLikes = msg.likes.filter((uid) => uid !== user.id);
              return { ...msg, likes: [...newLikes] };
            }
            return msg;
          });
        });
      });

      return () => {
        socket.off("unlike_message");
      };
    }
  }, [socket]);

  const handleSendMessage = () => {
    const message = {
      content,
      type: typeMsg,
      conversationId: conversation.id,
      senderId: user.id,
    };
    if (socket) {
      socket.emit("send_message", message);
      setContent("");
    }
  };

  const handleRevokeMessage = (messageId) => {
    if (socket) {
      socket.emit("revoke_message", { messageId, userId: user.id });
    }
  };

  const handleLikeMessage = (messageId) => {
    if (socket) {
      socket.emit("like_message", { messageId, userId: user.id });
    }
  };

  const handleUnlikeMessage = (messageId) => {
    if (socket) {
      socket.emit("unlike_message", { messageId, userId: user.id });
    }
  };

  const handleSendImage = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const imageUrl = await UploadAPI.uploadFile(formData);

    if (imageUrl) {
      const message = {
        content: imageUrl,
        type: "IMAGE",
        conversationId: conversation.id,
        senderId: user.id,
      };
      if (socket) {
        socket.emit("send_message", message);
        setLoading(false);
      }
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100%", paddingLeft: "30px" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <Box sx={{ marginRight: "10px" }}>
            {type === "FRIEND" ? (
              <Avatar alt={friend?.fullName} src={friend?.avatarUrl} />
            ) : (
              <AvatarGroup max={2}>
                {members?.length > 0 &&
                  members?.map((mem) => (
                    <Avatar
                      key={mem.id}
                      alt={mem.fullName}
                      src={mem.avatarUrl}
                    />
                  ))}
              </AvatarGroup>
            )}
          </Box>
          <Box>
            {type === "FRIEND" ? (
              <Typography fontWeight="bold">{friend?.fullName}</Typography>
            ) : (
              <Typography fontWeight="bold">{name}</Typography>
            )}
            <Box>
              <PersonOutlineIcon sx={{ color: "gray" }} />
            </Box>
          </Box>
          <Box sx={{ marginLeft: "auto", color: "#000", padding: "5px" }}>
            <VideocamIcon />
          </Box>
          <Button
            sx={{ marginLeft: "10px", color: "#000", padding: "5px" }}
            onClick={toggleDrawer(true)}
          >
            <DehazeIcon />
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          maxHeight: "500px",
          overflow: "auto",
          backgroundColor: "#ccc",
        }}
      >
        <Box sx={{ padding: "20px 10px", height: "450px" }}>
          {messages &&
            messages.length > 0 &&
            messages.map((msg) => {
              if (msg.senderId.id === user.id) {
                return (
                  <MessageSender
                    key={msg.id}
                    message={msg}
                    handleRevokeMessage={handleRevokeMessage}
                  />
                );
              } else {
                return (
                  <MessageReceiver
                    key={msg.id}
                    message={msg}
                    handleLikeMessage={handleLikeMessage}
                    handleUnlikeMessage={handleUnlikeMessage}
                  />
                );
              }
            })}
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", padding: "5px 0" }}>
          <Box sx={{ padding: "0px 20px" }}>
            <label htmlFor="upload">
              <ImageIcon />
            </label>
            <input
              id="upload"
              type="file"
              accept="image/*"
              style={{ display: "none", padding: "10px" }}
              onChange={handleSendImage}
            />
          </Box>
          <Button sx={{ color: "#000" }}>
            <AttachFileIcon />
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            placeholder="Nhập tin nhắn"
            variant="outlined"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            size="large"
            style={{ padding: "15px 20px" }}
            variant="outlined"
            onClick={handleSendMessage}
          >
            Gửi
            {loading && (
              <Box sx={{ display: "flex", marginLeft: "5px" }}>
                <CircularProgress color="inherit" size="20px" />
              </Box>
            )}
          </Button>
        </Box>
      </Box>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default Chat;
