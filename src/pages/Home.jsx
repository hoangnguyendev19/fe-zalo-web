import * as React from "react";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  Popover,
  Typography,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import ContactsIcon from "@mui/icons-material/Contacts";
import SettingsIcon from "@mui/icons-material/Settings";

import { useState, lazy, Suspense } from "react";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import Loading from "../components/Loading";

const Messager = lazy(() => import("./Messager"));
const Contact = lazy(() => import("./Contact"));

const Home = () => {
  const [showMess, setShowMess] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Suspense fallback={<Loading />}>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={0.7} style={{ paddingLeft: "0px", paddingTop: "0px" }}>
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
                  backgroundColor: showMess ? "rgba(0,0,0,0.2)" : "transparent",
                }}
              >
                <ListItemIcon>
                  <ListItemButton onClick={() => setShowMess(true)}>
                    <ChatIcon sx={{ color: "#fff" }} />
                  </ListItemButton>
                </ListItemIcon>
              </ListItem>
              <ListItem
                sx={{
                  justifyContent: "center",
                  paddingRight: "0px",
                  paddingLeft: "14px",
                  backgroundColor: !showMess
                    ? "rgba(0,0,0,0.2)"
                    : "transparent",
                }}
              >
                <ListItemIcon>
                  <ListItemButton onClick={() => setShowMess(false)}>
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
          {showMess ? <Messager /> : <Contact />}
        </Grid>
      </Box>
    </Suspense>
  );
};

export default Home;
