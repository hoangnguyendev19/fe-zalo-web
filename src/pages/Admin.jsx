import {
  Box,
  Typography,
  Grid,
  Avatar,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from 'react';

import PersonIcon from "@mui/icons-material/Person";
const Admin = () => {
  const [selectedContent, setSelectedContent] = useState('userManagement');
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={2.25} sx={{ borderRight: "1px solid rgba(0,0,0,0.3)" }}>
          <SideBar setSelectedContent={setSelectedContent}/>
        </Grid>
        <Grid item xs={9.75} sx={{ textAlign: "center" }}>
          <MainContent selectedContent={selectedContent}/>
        </Grid>
      </Grid>
    </Box>
  );
};
const SideBar = ({setSelectedContent}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        paddingTop: "10px",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px 0",
          }}
        >
          {/* Basic information  */}
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80, marginBottom: "20px" }}
          />
          <Typography>
            <strong>Admin</strong>
          </Typography>
        </Box>
        {/* List button */}
        <List sx={{ flexGrow: 1 }}>
          <UserManagement setSelectedContent={setSelectedContent}/>

        </List>
        {/* Button sign out */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <button>Sign out</button>
        </Box>
      </Box>
    </Box>
  );
};
// Content of Admin page
const MainContent = ({selectedContent}) => {
  
  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      {selectedContent === 'userManagement' && <UserList />}
      
    </Box>
  );
};
// User management
const UserManagement = ({ setSelectedContent }) => {
  const handleClick = () => {
    setSelectedContent('userManagement');
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ minWidth: 35 }}>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lí người dùng" />
      </ListItemButton>
    </ListItem>
  );
};
const UserList = () => {
  return (
    <Box sx={{ padding: "10px 20px" }}>
      <Typography>Không có tin nhắn chưa đọc</Typography>
    </Box>
  );
};

export default Admin;
