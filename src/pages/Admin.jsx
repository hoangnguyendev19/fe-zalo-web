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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";
// import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';

const Admin = () => {
  const [selectedContent, setSelectedContent] = useState("Quản lí người dùng");
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid container sx={{ height: "100vh" }}>
        <Grid item sx={{ borderRight: "1px solid rgba(0,0,0,0.3)", width: '230px' }}>
          <SideBar setSelectedContent={setSelectedContent} />
        </Grid>
        <Grid item xs sx={{ textAlign: "center" }}>
          <MainContent selectedContent={selectedContent} />
        </Grid>
      </Grid>
    </Box>
  );
};
const SideBar = ({ setSelectedContent }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        paddingTop: "10px",
        boxSizing: "border-box",
        backgroundColor: "#2F323B",
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
          <Typography sx={{color: 'white'}}>
            <strong>Admin</strong>
          </Typography>
        </Box>
        {/* List button */}
        <List sx={{ flexGrow: 1 }}>
          <Tab setSelectedContent={setSelectedContent} Title={"Quản lí người dùng"}/>
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
          <Button
            startIcon={<LogoutIcon/>}
            sx={{
              padding: "10px 20px",
              backgroundColor: "#546379",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "150px",
              marginBottom: "15px",
              '&:hover': {
                backgroundColor: '#7091BC', // Replace 'yourColor' with the color you want
              },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
// Content of Admin page
const MainContent = ({ selectedContent }) => {
  return (
    <Box sx={{ width: "100%", marginTop: "10px" }}>
      <Typography>Hello</Typography>
    </Box>
  );
};
// User management
const Tab = ({ setSelectedContent, Title }) => {
  const handleClick = () => {
    setSelectedContent(Title);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick} sx={{
          backgroundColor: '#3598DB',
          borderRadius: '5px',
          margin: '10px 5px',
          '&:hover': {
            backgroundColor: '#47D2EF', // Replace 'yourColor' with the color you want
          },  
        
      }}>
        <ListItemIcon sx={{ minWidth: 35, color: 'white' }}>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={Title} sx={{ color: 'white' }} />
      </ListItemButton>
    </ListItem>
  );
};


export default Admin;
