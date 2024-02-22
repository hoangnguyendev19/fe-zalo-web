import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  Button,
  Box,
  Modal,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  List,
  Avatar,
  Checkbox,
  ListItemIcon,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import CardItemUser from "./CardItemUser";
export default function CreateGroup() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const data = [
    {
      avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
      name: "Lê Văn Tài",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
      name: "Đặng Thị Thơm",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/3.jpg",
      name: "Nguyễn Văn A",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/4.jpg",
      name: "Trần Thị B",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/5.jpg",
      name: "Lê Văn Tài",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/6.jpg",
      name: "Đặng Thị Thơm",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/7.jpg",
      name: "Nguyễn Văn A",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/8.jpg",
      name: "Trần Thị C",
    },
    {
      avatarUrl: "https://mui.com/static/images/avatar/10.jpg",
      name: "Đặng Thị CV",
    },
  ];
  return (
    <div>
      <Button
        variant="text"
        sx={{ color: "black", minWidth: "0px" }}
        onClick={handleClickOpen}
      >
        <GroupAddIcon />
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: "550px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: "6px",
              paddingRight: "10px",
              paddingLeft: "2px",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={"bold"}
                marginLeft={2}
              >
                Tạo nhóm
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              gap: "0px",
              flexDirection: "column",
              padding: "16px",
              paddingTop: "0px",
              height: "87%",
            }}
          >
            <Box
              marginBottom={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <IconButton sx={{ marginTop: "15px", border: "1px solid" }}>
                {/* <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                /> */}
                <CameraAltIcon />
              </IconButton>
              <TextField
                id="oSutlined-basic"
                label="Nhập tên nhóm"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                height: "75%",
                borderBox: "box-sizing",
                paddingTop: "2px",
              }}
            >
              <TextField
                placeholder="Tìm kiếm bạn bè"
                variant="outlined"
                sx={{
                  width: "100%",
                  marginBottom: "10px",
                  "& .MuiOutlinedInput-root": {
                    // Add a colon after the selector
                    borderRadius: "25px",
                  },
                  "& .MuiInputBase-input": {
                    padding: "8px",
                    paddingLeft: "0px",
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: {
                    paddingLeft: "10px",
                  },
                }}
              />
              <Box
                sx={{
                  borderTop: "1px solid #000",
                  overflowY: "auto",
                  height: "85%",
                }}
              >
                <Typography fontWeight={700} paddingTop={1}>
                  Trò chuyện gần đây
                </Typography>
                <List>
                  {data.map((item, index) => (
                    <CardCheck key={index} url={item.avatarUrl} name={item.name} />
                  ))}
                </List>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                // marginTop: "30px",
                gap: "10px",
                paddingTop: "10px",
                marginRight: "0",
              }}
            >
              <button
                style={{
                  backgroundColor: "#EAEDF0",
                  color: "#38485B",
                  fontSize: "1.2rem",
                  border: "none",
                  padding: "8px 16px",
                }}
                onClick={handleClose}
              >
                Huỷ
              </button>
              <button
                onClick={() => {}}
                style={{
                  backgroundColor: "#0068FF",
                  color: "white",
                  fontSize: "1.2rem",
                  border: "none",
                  padding: "8px 16px",
                }}
              >
                Tạo nhóm
              </button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
function CardCheck({ url, name }) {

  const [checked, setChecked] = useState(false);

  return (
  <ListItemButton
    sx={{
      display: "flex",
      paddingLeft: "5px",
      paddingRight: "0px",
    }}
    onClick={() => setChecked(!checked)}
  >
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: "10px" }}>
      <Checkbox checked={checked} />
      <Avatar alt={name} src={url} />
    </Box>
    <Box>
      <Typography fontWeight="bold">{name}</Typography>
    </Box>
  </ListItemButton>
  );
}