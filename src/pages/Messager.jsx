import {
  Box,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Button,
  List,
  Avatar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CardItemUser from "../components/CardItemUser";
import CardItemGroup from "../components/CardItemGroup";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VideocamIcon from "@mui/icons-material/Videocam";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ListMessages from '../components/ListMessages'
import AddFriend from "../components/AddFriend";
import CreateGroup from "../components/CreateGroup";
import { useState } from "react";

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

const Messager = () => {
  const [value, setValue] = useState(0);
  const [indexMessage, setIndexMessage] = useState(1);

  const handleClickMessage = (value) => {
    console.log('Value: ', value)
    setIndexMessage(value)
  }

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
              handleClickMessage={() => handleClickMessage(1)}
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
              handleClickMessage={() => handleClickMessage(2)}
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
      <Grid item xs={8.3} sx={{}}>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "20px 0",
            }}
          >
            <Box sx={{ marginRight: "10px" }}>
              <Avatar
                alt="Nguyen Huy Hoang"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </Box>
            <Box>
              <Typography fontWeight="bold">Nguyen Huy Hoang</Typography>
              <Box>
                <PersonOutlineIcon sx={{ color: "gray" }} />
              </Box>
            </Box>
            <Box sx={{ marginLeft: "auto", color: "#000", padding: "5px" }}>
              <CreateGroup />
            </Box>
            <Button sx={{ marginLeft: "10px", color: "#000", padding: "5px" }}>
              <SearchIcon />
            </Button>
            <Button sx={{ marginLeft: "10px", color: "#000", padding: "5px" }}>
              <VideocamIcon />
            </Button>
          </Box>
        </Box>
        <Box sx={{ maxHeight: "500px", overflow: "auto" }}>

          { /* Show list messages from the personal chat or group chat */}
          <Box sx={{ backgroundColor: "#ccc", height: "800px" }}>
            <ListMessages data={indexMessage}/>
          </Box>

        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", padding: "5px 0" }}>
            <Button sx={{ color: "#000" }}>
              <ImageIcon />
            </Button>
            <Button sx={{ color: "#000" }}>
              <AttachFileIcon />
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              placeholder="Nhập tin nhắn"
              variant="outlined"
              fullWidth
            />
            <Button size="large">Gửi</Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Messager;
