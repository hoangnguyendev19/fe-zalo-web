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
import qr from "../assets/images/qr.png";
import { useState } from "react";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <Tab label="VỚI MÃ QR" {...a11yProps(0)} sx={{ width: "50%" }} />
              <Tab
                label="VỚI SỐ ĐIỆN THOẠI"
                {...a11yProps(1)}
                sx={{ width: "50%" }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <img
              src={qr}
              width="100%"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            <Typography color="gray" textAlign="center">
              Sử dụng ứng dụng Zalo để quét mã QR
            </Typography>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
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
              variant="standard"
              fullWidth
              style={{ marginBottom: "20px" }}
            />
            <Button variant="contained" fullWidth style={{ margin: "20px 0" }}>
              Đăng nhập với mật khẩu
            </Button>
            <Button
              variant="outlined"
              fullWidth
              style={{ marginBottom: "40px" }}
            >
              Đăng nhập bằng thiết bị di động
            </Button>
            <Box textAlign="center">
              <Link href="#" textAlign="center" color="#000">
                Quên mật khẩu?
              </Link>
            </Box>
          </CustomTabPanel>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
