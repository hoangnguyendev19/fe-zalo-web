import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Box,
  Modal,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  List,
} from "@mui/material";
import { useState } from "react";
import CardItemUser from "./CardItemUser";
export default function AddFriend() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="text"
        sx={{ color: "black", minWidth: "0px" }}
        onClick={handleClickOpen}
      >
        <PersonAddAltIcon />
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
                Thêm bạn
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
              gap: "10px",
              flexDirection: "column",
              padding: "16px",
              paddingTop: "0px",
              height: "88%",
            }}
          >
            <Box marginBottom={2}>
              <TextField
                id="oSutlined-basic"
                label="Số điện thoại"
                variant="standard"
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                overflowY: "auto",
                height: "75%",
              }}
            >
              <Typography>Kết quả gần đây:</Typography>
              <List>
                <CardItemUser
                  avatarUrl="https://mui.com/static/images/avatar/1.jpg"
                  name="Lê Văn Tài"
                  message="0987654321"
                />
                <CardItemUser
                  avatarUrl="https://mui.com/static/images/avatar/2.jpg"
                  name="Đặng Thị Thơm"
                  message="0321654987"
                />
                <CardItemUser
                  avatarUrl="https://mui.com/static/images/avatar/1.jpg"
                  name="Lê Văn Tài"
                  message="0987654321"
                />
                <CardItemUser
                  avatarUrl="https://mui.com/static/images/avatar/2.jpg"
                  name="Đặng Thị Thơm"
                  message="0321654987"
                />
                <CardItemUser
                  avatarUrl="https://mui.com/static/images/avatar/1.jpg"
                  name="Lê Văn Tài"
                  message="0987654321"
                />
                <CardItemUser
                  avatarUrl="https://mui.com/static/images/avatar/2.jpg"
                  name="Đặng Thị Thơm"
                  message="0321654987"
                />
              </List>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                // marginTop: "30px",
                gap: "10px",
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
                Tìm kiếm
              </button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
