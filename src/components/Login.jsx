import { Box, Button, Link, TextField } from "@mui/material";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [password, setPassword] = useState("huynguyen@123");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(phoneNumber, password);
    setPhoneNumber("");
    setPassword("");
  };

  return (
    <Box>
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="standard"
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        fullWidth
        style={{ margin: "20px 0" }}
        onClick={(e) => handleSubmit(e)}
      >
        Đăng nhập với mật khẩu
      </Button>
      <Box textAlign="center">
        <Link href="#" textAlign="center" color="#000">
          Quên mật khẩu?
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
