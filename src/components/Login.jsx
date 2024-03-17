import {
  AccordionSummary,
  Box,
  Button,
  Link,
  TextField,
  Typography,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import { useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { toast } from "react-toastify";
import UserAPI from "../api/UserAPI";

const Login = ({ handleLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [password, setPassword] = useState("huynguyen@123");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(phoneNumber, password);
    setPhoneNumber("");
    setPassword("");
  };

  const handleResetPassword = async () => {
    if (email.trim() === "") {
      toast.error("Vui lòng nhập email");
      return;
    }

    if (!email.match(/.+@gmail.com/)) {
      toast.error("Email không hợp lệ");
      return;
    }

    const data = await UserAPI.forgotPassword(email);
    if (data) {
      toast.success("Kiểm tra email của bạn để đặt lại mật khẩu");
    } else {
      toast.error("Email không tồn tại trong hệ thống!");
    }
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography fontStyle="italic">Quên mật khẩu?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="email"
              label="Email"
              variant="standard"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              style={{ margin: "20px 0" }}
              onClick={handleResetPassword}
            >
              Làm mới mật khẩu
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Login;
