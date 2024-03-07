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
  Avatar,
} from "@mui/material";
import { useState } from "react";
import CardItemUser from "./CardItemUser";
import UserAPI from "../api/UserAPI";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";

export default function AddFriend() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const { user, accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [friend, setFriend] = useState(null);
  const [status, setStatus] = useState("request"); // request - accept - revoke - friend

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setFriend(null);
    setOpen(false);
  };

  const handleSearchUser = async () => {
    const data = await UserAPI.getUserByPhoneNumber(phoneNumber);
    if (data) {
      setFriend(data);
      if (user.friendList.find((friend) => friend.id === data.id)) {
        setStatus("friend");
      } else if (
        user.sendedRequestList.find((friend) => friend.id === data.id)
      ) {
        setStatus("revoke");
      } else if (
        user.receivedRequestList.find((friend) => friend.id === data.id)
      ) {
        setStatus("accept");
      } else {
        setStatus("request");
      }
    }
  };

  const handleRequestFriend = async () => {
    const data = await UserAPI.requestFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus("revoke");
    }
  };

  const handleRevokeFriend = async () => {
    const data = await UserAPI.revokeFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus("request");
    }
  };

  const handleAcceptFriend = async () => {
    const data = await UserAPI.acceptFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus("friend");
    }
  };

  const handleDeleteAcceptFriend = async () => {
    const data = await UserAPI.deleteAcceptFriend(friend.id, accessToken);
    if (data) {
      dispatch(setUser(data));
      setStatus("request");
    }
  };

  return (
    <Box>
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
            borderRadius: "5px",
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
            <Box
              marginBottom={2}
              marginTop={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField
                id="input-with-icon-textfield"
                label="Số điện thoại"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography>+84</Typography>
                    </InputAdornment>
                  ),
                }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                variant="standard"
              />
              <Button variant="contained" onClick={handleSearchUser}>
                Tìm kiếm
              </Button>
            </Box>
            <Box
              sx={{
                overflowY: "auto",
                height: "75%",
              }}
            >
              <Typography fontStyle="italic">Kết quả tìm thấy:</Typography>
              {friend && (
                <Box display="flex" alignItems="center" marginTop="15px">
                  <Avatar
                    src={friend.avatarUrl}
                    alt="avatar"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <Typography
                    fontWeight="bold"
                    marginLeft="10px"
                    marginRight="auto"
                  >
                    {friend.fullName}
                  </Typography>
                  {status === "request" && (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={handleRequestFriend}
                    >
                      Gửi lời mời
                    </Button>
                  )}
                  {status === "accept" && (
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Button
                        size="small"
                        variant="contained"
                        onClick={handleAcceptFriend}
                        color="success"
                      >
                        Chấp nhận
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        style={{ marginTop: "5px" }}
                        onClick={handleDeleteAcceptFriend}
                        fullWidth
                        color="error"
                      >
                        Từ chối
                      </Button>
                    </Box>
                  )}
                  {status === "revoke" && (
                    <Button
                      size="small"
                      variant="contained"
                      onClick={handleRevokeFriend}
                      color="warning"
                    >
                      Thu hồi
                    </Button>
                  )}
                  {status === "friend" && (
                    <Typography fontSize="14px" fontStyle="italic">
                      Bạn bè
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
