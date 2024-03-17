import {
  Modal,
  Button,
  IconButton,
  Typography,
  Box,
  ListItemButton,
  Divider,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect, useState, useRef, memo, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserAPI from "../api/UserAPI";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "380px",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  overflowY: "auto",
  // hide scrollbar
  "&::-webkit-scrollbar": {
    display: "none",
  },
  p: 0,
};

export default function ChangePassword() {
  const [openModal, setOpenModal] = useState(false);
  const { accessToken } = useSelector((state) => state.user);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const handleChangePassword = async () => {
    if (
      password.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới không trùng khớp");
      return;
    }

    const data = await UserAPI.updatePassword(
      password,
      newPassword,
      accessToken
    );

    if (data) {
      toast.success("Cập nhật mật khẩu thành công");
      handleCloseModal();
    } else {
      toast.error("Mật khẩu hiện tại không đúng");
    }
  };

  return (
    <Box>
      <ListItemButton onClick={handleOpenModal}>
        <Box sx={{ marginRight: "10px" }}>
          <SettingsIcon />
        </Box>
        <Typography>Đổi mật khẩu</Typography>
      </ListItemButton>
      <Modal
        keepMounted
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginLeft: "10px",
              marginBottom: "6px",
              marginTop: "6px",
            }}
          >
            <Typography variant="subtitle1" component="h2" fontWeight={"bold"}>
              Đổi mật khẩu
            </Typography>
            <IconButton onClick={handleCloseModal} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <Box>
              <Typography fontSize="14px" marginBottom="10px">
                Mật khẩu hiện tại
              </Typography>
              <input
                type="password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #A0A0A0",
                  boxSizing: "border-box",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>

            <Box>
              <Typography fontSize="14px" marginBottom="10px">
                Mật khẩu mới
              </Typography>
              <input
                type="password"
                style={{
                  minWidth: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #A0A0A0",
                  boxSizing: "border-box",
                }}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Box>
            <Box>
              <Typography fontSize="14px" marginBottom="10px">
                Nhập lại mật khẩu mới
              </Typography>
              <input
                type="password"
                style={{
                  minWidth: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #A0A0A0",
                  boxSizing: "border-box",
                }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              marginTop: "30px",
              gap: "10px",
              marginRight: "10px",
            }}
          >
            <Button onClick={() => handleCloseModal()} variant="outlined">
              Huỷ
            </Button>
            <Button variant="contained" onClick={handleChangePassword}>
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
