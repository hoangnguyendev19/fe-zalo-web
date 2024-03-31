import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = ({ handleSignup }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [showPassword, setShowPassword] = useState("password");
  const [showRePassword, setShowRePassword] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(fullName, email, phoneNumber, password, rePassword);
    setFullName("");
    setPhoneNumber("");
    setEmail("");
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
        id="email"
        label="Email"
        variant="standard"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <Box
        sx={{
          position: "relative",
        }}
      >
        <TextField
          id="password"
          label="Mật khẩu"
          type={showPassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="standard"
          fullWidth
          style={{ marginBottom: "20px" }}
        />
        {showPassword === "password" ? (
          <VisibilityIcon
            onClick={() => setShowPassword("text")}
            style={{
              position: "absolute",
              right: "10px",
              top: "15px",
              cursor: "pointer",
            }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={() => setShowPassword("password")}
            style={{
              position: "absolute",
              right: "10px",
              top: "15px",
              cursor: "pointer",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <TextField
          id="rePassword"
          label="Nhập lại mật khẩu"
          type={showRePassword}
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          variant="standard"
          fullWidth
          style={{ marginBottom: "20px" }}
        />
        {showRePassword === "password" ? (
          <VisibilityIcon
            onClick={() => setShowRePassword("text")}
            style={{
              position: "absolute",
              right: "10px",
              top: "15px",
              cursor: "pointer",
            }}
          />
        ) : (
          <VisibilityOffIcon
            onClick={() => setShowRePassword("password")}
            style={{
              position: "absolute",
              right: "10px",
              top: "15px",
              cursor: "pointer",
            }}
          />
        )}
      </Box>
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
