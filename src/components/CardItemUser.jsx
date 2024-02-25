import {
  Avatar,
  Box,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

const CardItemUser = ({ avatarUrl, name, message, handleClickMessage}) => {
  return (
    <ListItem sx={{ padding: "0px" }}>
      <ListItemButton
        sx={{
          display: "flex",
          paddingLeft: "5px",
          paddingRight: "0px",
        }}
        onClick = {handleClickMessage}
      >
        <Box sx={{ marginRight: "10px" }}>
          <Avatar alt={name} src={avatarUrl} />
        </Box>
        <Box>
          <Typography fontWeight="bold">{name}</Typography>
          <Typography color="gray" fontSize="14px">
            {message}
          </Typography>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};

export default CardItemUser;
