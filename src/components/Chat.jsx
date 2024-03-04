import {
  Box,
  TextField,
  Button,
  Avatar,
  Typography,
  AvatarGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
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

const Chat = ({ conversation }) => {
  const { name, members, admin, type, id } = conversation;
  const { user, accessToken } = useSelector((state) => state.user);
  const [friend, setFriend] = useState({});
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [content, setContent] = useState("");
  const [typeMsg, setTypeMsg] = useState("TEXT"); // TEXT - IMAGE - FILE - VIDEO
  const [image, setImage] = useState("");

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
            <CreateGroup />
          </Box>
          <Button sx={{ marginLeft: "10px", color: "#000", padding: "5px" }}>
            <SearchIcon />
          </Button>
          <Button sx={{ marginLeft: "10px", color: "#000", padding: "5px" }}>
            <VideocamIcon />
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
          <Button sx={{ color: "#000" }}>
            <ImageIcon />
          </Button>
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
          <Button size="large" onClick={handleSendMessage}>
            Gửi
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
