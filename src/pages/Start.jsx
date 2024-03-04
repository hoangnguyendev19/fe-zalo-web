import { Box, Container, Typography, Tabs, Tab } from "@mui/material";
import { io } from "socket.io-client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "../api/UserAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login, signup } from "../redux/userSlice";
import Signup from "../components/Signup";
import Login from "../components/Login";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Start = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogin = async (phoneNumber, password) => {
    if (phoneNumber === "") {
      toast.error("Bạn chưa nhập số điện thoại!");
      return;
    }
    if (phoneNumber.length !== 10) {
      toast.error("Số điện thoại phải có 10 số!");
      return;
    }

    if (password === "") {
      toast.error("Bạn chưa nhập mật khẩu!");
      return;
    }

    if (password.length < 10) {
      toast.error("Mật khẩu phải có ít nhất 10 ký tự!");
      return;
    }

    const data = await UserAPI.login(phoneNumber, password);
    if (data) {
      const socket = io(`${import.meta.env.VITE_REACT_APP_SOCKET_URL}`);
      socket.emit("login", data.user.id);
      dispatch(login(data));

      navigate("/home");
    } else {
      toast.error("Số điện thoại hoặc mật khẩu không đúng!");
    }
  };

  const handleSignup = async (fullName, phoneNumber, password, rePassword) => {
    if (fullName.trim() === "") {
      toast.error("Bạn chưa nhập họ và tên!");
      return;
    }

    if (phoneNumber.trim() === "") {
      toast.error("Bạn chưa nhập số điện thoại!");
      return;
    }

    if (phoneNumber.length !== 10) {
      toast.error("Số điện thoại phải có 10 số!");
      return;
    }

    if (password.trim() === "") {
      toast.error("Bạn chưa nhập mật khẩu!");
      return;
    }

    if (password.length < 10) {
      toast.error("Mật khẩu phải có ít nhất 10 ký tự!");
      return;
    }

    if (password !== rePassword) {
      toast.error("Mật khẩu không khớp!");
      return;
    }

    const data = await UserAPI.signup(fullName, phoneNumber, password);
    if (data) {
      const socket = io(`${import.meta.env.EXPO_PUBLIC_SOCKET_URL}`);
      socket.emit("login", data.user.id);
      dispatch(signup(data));

      navigate("/home");
    } else {
      toast.error("Số điện thoại đã tồn tại!");
    }
  };

  return (
    <Container maxWidth="xl">
      <Box
        component="section"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component="div"
          sx={{ textAlign: "center", marginTop: "30px", marginBottom: "20px" }}
        >
          <img
            src="https://res.cloudinary.com/dthusmigo/image/upload/v1709463995/STORAGE/logo_mbm90e.png"
            width="114"
            height="41"
          />
        </Box>
        <Typography textAlign="center">Đăng nhập tài khoản Zalo</Typography>
        <Typography textAlign="center" marginBottom="20px">
          Để kết nối với ứng dụng Zalo Web
        </Typography>
        <Box sx={{ width: "400px", boxShadow: "0px 0px 5px #ccc" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs value={value} onChange={handleChange}>
              <Tab label="ĐĂNG NHẬP" {...a11yProps(0)} sx={{ width: "50%" }} />
              <Tab label="ĐĂNG KÝ" {...a11yProps(1)} sx={{ width: "50%" }} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Login handleLogin={handleLogin} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Signup handleSignup={handleSignup} />
          </CustomTabPanel>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default Start;
