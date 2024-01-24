import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  Popover,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import CardItemUser from "../components/CardItemUser";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import CardItemGroup from "../components/CardItemGroup";
import MessageContent from "../components/MessageContent";

const listUser = [
  {
    id: 1,
    fullName: "Nguyen Huy Hoang",
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    fullName: "Do Chi Tuong",
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    fullName: "Truong Duong Minh Nhat",
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    fullName: "Nguyen Ho Dang Quang",
    avatarUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function CustomTabPanel(props) {
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
        <List sx={{ maxHeight: "560px", overflow: "auto" }}>{children}</List>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={0.7} style={{ paddingLeft: "0", paddingTop: "0" }}>
          <List
            sx={{
              backgroundColor: "#0091ff",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ListItem
              sx={{
                justifyContent: "center",
                paddingRight: "0px",
                paddingLeft: "14px",
                paddingTop: "30px",
              }}
            >
              <ListItemAvatar>
                <Box>
                  <Avatar
                    sx={{ margin: "0 auto" }}
                    alt="avatar"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </Box>
              </ListItemAvatar>
            </ListItem>
            <ListItem
              sx={{
                justifyContent: "center",
                paddingRight: "0px",
                paddingLeft: "14px",
              }}
            >
              <ListItemIcon>
                <ListItemButton>
                  <ChatIcon sx={{ color: "#fff" }} />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            <ListItem
              sx={{
                justifyContent: "center",
                paddingRight: "0px",
                paddingLeft: "14px",
              }}
            >
              <ListItemIcon>
                <ListItemButton>
                  <ContactsIcon sx={{ color: "#fff" }} />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
            <ListItem
              sx={{
                justifyContent: "center",
                paddingRight: "0px",
                paddingLeft: "14px",
                marginTop: "auto",
              }}
            >
              <ListItemIcon>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <List>
                    <ListItem sx={{ padding: "0px" }}>
                      <ListItemButton>
                        <Box sx={{ marginRight: "10px" }}>
                          <PersonOutlineIcon />
                        </Box>
                        <Typography>Thông tin tài khoản</Typography>
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ padding: "0px" }}>
                      <ListItemButton>
                        <Box sx={{ marginRight: "10px" }}>
                          <SettingsIcon />
                        </Box>
                        <Typography>Cài đặt</Typography>
                      </ListItemButton>
                    </ListItem>
                    <ListItem sx={{ padding: "0px" }}>
                      <ListItemButton>
                        <Box sx={{ marginRight: "10px" }}>
                          <LogoutIcon />
                        </Box>
                        <Typography>Đăng xuất</Typography>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Popover>
                <ListItemButton aria-describedby={id} onClick={handleClick}>
                  <SettingsIcon sx={{ color: "#fff" }} />
                </ListItemButton>
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <TextField
              placeholder="Tìm kiếm"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              size="small"
              fullWidth
            />
            <Box sx={{ marginLeft: "5px" }}>
              <Button variant="text" sx={{ color: "black", minWidth: "0px" }}>
                <PersonAddAltIcon />
              </Button>
            </Box>
            <Box sx={{ marginLeft: "5px" }}>
              <Button variant="text" sx={{ color: "black", minWidth: "0px" }}>
                <GroupAddIcon />
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: "100%", marginTop: "10px" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  label="Tất cả"
                  {...a11yProps(0)}
                  sx={{ fontSize: "12px", fontWeight: "bold" }}
                />
                <Tab
                  label="Chưa đọc"
                  {...a11yProps(1)}
                  sx={{ fontSize: "12px", fontWeight: "bold" }}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Nguyen Huy Hoang"
                message="Dang dau v"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Do Chi Tuong"
                message="Chua co tin nhan"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Minh Nhat"
                message="An gi chua ?"
              />
              <CardItemGroup
                listUser={listUser}
                name="IUH_CNM_2023ssssssssssssss"
                message="Chua co tin nhansssssssssssssssssssssssssssss"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Do Chi Tuong"
                message="Chua co tin nhan"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Minh Nhat"
                message="An gi chua ?"
              />
              <CardItemGroup
                listUser={listUser}
                name="IUH_CNM_2023ssssssssssssss"
                message="Chua co tin nhansssssssssssssssssssssssssssss"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Do Chi Tuong"
                message="Chua co tin nhan"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Minh Nhat"
                message="An gi chua ?"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Nguyen Huy Hoang"
                message="Dang dau v"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Do Chi Tuong"
                message="Chua co tin nhan"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Minh Nhat"
                message="An gi chua ?"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Nguyen Huy Hoang"
                message="Dang dau v"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Do Chi Tuong"
                message="Chua co tin nhan"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Minh Nhat"
                message="An gi chua ?"
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Nguyen Huy Hoang"
                message="Dang dau v"
              />
              <CardItemUser
                avatarUrl="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                name="Do Chi Tuong"
                message="Chua co tin nhan"
              />
            </CustomTabPanel>
          </Box>
        </Grid>
        <Grid item xs={8.3} sx={{ paddingRight: "16px" }}>
          <MessageContent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
