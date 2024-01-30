import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Link,
} from "@mui/material";
import logo from "../assets/images/logo.png";
// import qr from "../assets/images/qr.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogin = () => {
    navigate("/home");
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
          <img src={logo} width="114" height="41" />
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
            <TextField
              id="phoneNumber"
              label="Số điện thoại"
              variant="standard"
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="password"
              label="Mật khẩu"
              type="password"
              variant="standard"
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <Button
              variant="contained"
              fullWidth
              style={{ margin: "20px 0" }}
              onClick={handleLogin}
            >
              Đăng nhập với mật khẩu
            </Button>
            <Box textAlign="center">
              <Link href="#" textAlign="center" color="#000">
                Quên mật khẩu?
              </Link>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <TextField
              id="fullName"
              label="Họ và tên"
              variant="standard"
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="phoneNumber"
              label="Số điện thoại"
              variant="standard"
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="password"
              label="Mật khẩu"
              type="password"
              variant="standard"
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="rePassword"
              label="Nhập lại mật khẩu"
              type="password"
              variant="standard"
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <Button variant="contained" fullWidth style={{ margin: "20px 0" }}>
              Đăng ký tài khoản
            </Button>
          </CustomTabPanel>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
