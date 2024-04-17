import {
  Avatar,
  Box,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CardItemUser = ({ conver, setConversation }) => {
  let { name, members, admin, type, id } = conver;
  const { user } = useSelector((state) => state.user);
  const [friend, setFriend] = useState({});

  useEffect(() => {
    if (user) {
      const member = members.filter((mem) => mem.id !== user.id);
      setFriend(member[0]);
    }
  }, []);

  return (
    <ListItem sx={{ padding: "0px" }}>
      <ListItemButton
        sx={{
          display: "flex",
          paddingLeft: "5px",
          paddingRight: "0px",
        }}
        onClick={() => setConversation(conver)}
      >
        <Box sx={{ marginRight: "10px" }}>
          <Avatar alt={name} src={friend?.avatarUrl} />
        </Box>
        <Box>
          <Typography fontWeight="bold">{friend?.fullName}</Typography>
          <Typography color="gray" fontSize="14px">
            {friend?.fullName} đã gửi tin nhắn
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default CardItemUser;
