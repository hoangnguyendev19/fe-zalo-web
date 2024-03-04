import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const Signup = ({ handleSignup }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(fullName, phoneNumber, password, rePassword);
    setFullName("");
    setPhoneNumber("");
    setPassword("");
    setRePassword("");
  };

  return (
    <Box>
      <TextField
        id="fullName"
        label="Họ và tên"
        variant="standard"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <TextField
        id="phoneNumber"
        label="Số điện thoại"
        variant="standard"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <TextField
        id="password"
        label="Mật khẩu"
        type="password"
        variant="standard"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <TextField
        id="rePassword"
        label="Nhập lại mật khẩu"
        type="password"
        variant="standard"
        value={rePassword}
        onChange={(e) => setRePassword(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        fullWidth
        style={{ margin: "20px 0" }}
        onClick={handleSubmit}
      >
        Đăng ký tài khoản
      </Button>
    </Box>
  );
};

export default Signup;
