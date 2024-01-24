import {
  Avatar,
  AvatarGroup,
  Box,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

const CardItemGroup = ({ listUser, name, message }) => {
  return (
    <ListItem sx={{ padding: "0px" }}>
      <ListItemButton
        sx={{
          display: "flex",
          paddingLeft: "5px",
          paddingRight: "0px",
        }}
      >
        <Box sx={{ marginRight: "10px" }}>
          <AvatarGroup max={2}>
            {listUser.length > 0 &&
              listUser.map((user) => (
                <Avatar
                  key={user.id}
                  alt={user.fullName}
                  src={user.avatarUrl}
                />
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
            {message}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default CardItemGroup;
