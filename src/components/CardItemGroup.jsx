import {
  Avatar,
  AvatarGroup,
  Box,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

const CardItemGroup = ({ conver, setConversation }) => {
  let { name, members, admin, type, id } = conver;

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
          <AvatarGroup max={2}>
            {members?.length > 0 &&
              members?.map((mem) => (
                <Avatar key={mem.id} alt={mem.fullName} src={mem.avatarUrl} />
              ))}
          </AvatarGroup>
        </Box>
        <Box>
          <Typography
            fontWeight="bold"
            sx={{
              maxWidth: "230px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </Typography>
          <Typography
            color="gray"
            fontSize="14px"
            sx={{
              maxWidth: "230px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {admin?.fullName
              ? `${admin?.fullName} đã gửi tin nhắn`
              : "Nhóm chưa có tin nhắn"}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default CardItemGroup;
