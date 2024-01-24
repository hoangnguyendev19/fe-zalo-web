import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SearchIcon from "@mui/icons-material/Search";

const MessageContent = () => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <Box sx={{ marginRight: "10px" }}>
            <Avatar
              alt="Nguyen Huy Hoang"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Box>
          <Box>
            <Typography fontWeight="bold">Nguyen Huy Hoang</Typography>
            <Box>
              <PersonOutlineIcon sx={{ color: "gray" }} />
            </Box>
          </Box>
          <Button sx={{ marginLeft: "auto", color: "#000", padding: "5px" }}>
            <GroupAddIcon />
          </Button>
          <Button sx={{ marginLeft: "10px", color: "#000", padding: "5px" }}>
            <SearchIcon />
          </Button>
          <Button sx={{ marginLeft: "10px", color: "#000", padding: "5px" }}>
            <VideocamIcon />
          </Button>
        </Box>
      </Box>
      <Box sx={{ maxHeight: "500px", overflow: "auto" }}>
        <Box sx={{ backgroundColor: "#ccc", height: "800px" }}></Box>
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
          <TextField placeholder="Nhập tin nhắn" variant="outlined" fullWidth />
          <Button size="large">Gửi</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageContent;
