import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Button,
  List,
  Avatar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { useState, useEffect, useLayoutEffect } from "react";
import ListFriend from "../components/ListFriend";
import ListGroup from "../components/ListGroup";
import RequestFriend from "../components/RequestFriend";

import AddFriend from "../components/AddFriend";
import CreateGroup from "../components/CreateGroup";
import axios from "axios";
import { DatasetLinkedTwoTone } from "@mui/icons-material";

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

const Contact = () => {
  const [show, setShow] = useState("ListFriend");
  const [value, setValue] = useState(0);
  const [listFriends, setListFriends] = useState([]);
  const [listGroups, setListGroups] = useState([]);
  const [listRequestFriends, setListRequestFriends] = useState([]);
  const [listReceiveRequestFriends, setListReceiveRequestFriends] = useState([]);
  const [listFriendsExample, setListFriendsExample] = useState([]);

  useLayoutEffect(() => {
    async function fetchDataListFriends() {
      const response = await axios.get('http://localhost:8080/api/person/get-all')
      setListFriends(response.data)
    }

    async function fetchDataListGroups() {
      const response = await axios.get('http://localhost:8080/api/group-message/get-info-group-and-person-join')
      setListGroups(response.data)
    }

    async function fetchDataListRequestFriends() { 
      const reponseRequestFriends = await axios.get('http://localhost:8080/api/friends/get-send-request-friends/7')
      setListRequestFriends(reponseRequestFriends.data)
      const reponseReceiveRequestFriends = await axios.get('http://localhost:8080/api/friends/get-receive-request-friends/2')
      setListReceiveRequestFriends(reponseReceiveRequestFriends.data)
      const reponseFriendsExample = await axios.get('http://localhost:8080/api/person/get-all-persons-except-one-person/1')
      setListFriendsExample(reponseFriendsExample.data)
    }

    fetchDataListFriends()
    fetchDataListGroups()
    fetchDataListRequestFriends()
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid item xs={3}>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
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
            <AddFriend />
          </Box>
          <Box sx={{ marginLeft: "5px" }}>
            <CreateGroup />
          </Box>
        </Box>
        <Box sx={{ width: "100%", marginTop: "10px" }}>
          <Button
            sx={{
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "#000",
              textTransform: "none",
            }}
            fullWidth
            onClick={() => setShow("ListFriend")}
          >
            <PersonOutlineOutlinedIcon />
            <Typography fontSize={16} fontWeight="bold" marginLeft={3}>
              Danh sách bạn bè
            </Typography>
          </Button>
          <Button
            sx={{
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "#000",
              textTransform: "none",
            }}
            fullWidth
            onClick={() => setShow("ListGroup")}
          >
            <PeopleAltOutlinedIcon />
            <Typography fontSize={16} fontWeight="bold" marginLeft={3}>
              Danh sách nhóm
            </Typography>
          </Button>
          <Button
            sx={{
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              color: "#000",
              textTransform: "none",
            }}
            fullWidth
            onClick={() => setShow("RequestFriend")}
          >
            <DraftsOutlinedIcon />
            <Typography fontSize={16} fontWeight="bold" marginLeft={3}>
              Lời mời kết bạn
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={8.3}>
        {show === "ListFriend" && <ListFriend listFriends={listFriends} />}
        {show === "ListGroup" && <ListGroup listGroups={listGroups} />}
        {show === "RequestFriend" && <RequestFriend listRequestFriends={listRequestFriends}
          listReceiveRequestFriend={listReceiveRequestFriends} listFriendsExample={listFriendsExample} />}
      </Grid>
    </>
  );
};

export default Contact;
