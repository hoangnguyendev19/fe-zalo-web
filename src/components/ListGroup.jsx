import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Divider,
  Avatar
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import EastIcon from '@mui/icons-material/East';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ListGroup = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const listGroups = [
    {
      id: 1,
      groupName: "Connecticut lycanthropes",
      image: "https://picsum.photos/640/200"
    },
    {
      id: 2,
      groupName: "Massachusetts gooses",
      image: "https://picsum.photos/1280/1024"
    },
    {
      id: 3,
      groupName: "Idaho dolphins",
      image: "https://picsum.photos/1280/1024"
    }
  ]

  return (
    <>
      <Box
        sx={{
          padding: "20px 15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PeopleAltOutlinedIcon />
        <Typography fontWeight="bold" marginLeft={1}>
          Danh sách nhóm
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#ccc", height: "590px", overflow: "auto" }}>
        <Box sx={{  height: "100%" }}>

          <Stack direction="column">
            <Box ml={2} mt={3}>
              <Typography variant="body2" fontWeight="bold">Nhóm ({listGroups.length})</Typography>
            </Box>

            <Box direction="column" spacing={2} ml={2} mt={3} mr={2} backgroundColor="white" sx={{ borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>

              { /* Filter data */}
              <Stack direction="row" ml={2} mt={2} mr={2} spacing={2}>
                <TextField size="small" placeholder="Tìm kiếm..." sx={{ width: 500 }} InputProps={{
                  startAdornment: <SearchIcon />
                }}>
                </TextField>
                <TextField size="small" defaultValue={"increase"} select sx={{ width: 500 }} InputProps={{
                  startAdornment: <SwapVertIcon />
                }}>
                  <MenuItem value="increase">
                    <Typography variant="body2">Tên (A - Z)</Typography>
                  </MenuItem>
                  <MenuItem value="decrease">
                    <Typography variant="body2">Tên (Z - A)</Typography>
                  </MenuItem>
                  <MenuItem value="new_action">
                    <Typography variant="body2" mr={0.5}>Hoạt động (mới</Typography>
                    <EastIcon fontSize="1" />
                    <Typography variant="body2" ml={0.5}>cũ)</Typography>
                  </MenuItem>
                  <MenuItem value="old_action">
                    <Typography variant="body2" mr={0.5}>Hoạt động (cũ</Typography>
                    <EastIcon fontSize="1" />
                    <Typography variant="body2" ml={0.5}>mới)</Typography>
                  </MenuItem>
                </TextField>
                <TextField size="small" defaultValue={"all"} select sx={{ width: 500 }} InputProps={{
                  startAdornment: <FilterAltIcon />
                }}>
                  <MenuItem value="all">
                    <Typography variant="body2">Tất cả</Typography>
                  </MenuItem>
                  <MenuItem value="my_own_group">
                    <Typography variant="body2">Nhóm của tôi</Typography>
                  </MenuItem>
                </TextField>
              </Stack>

              { /* Show list groups */}
              <Stack direction="column" mt={3}>

                {listGroups.map(item => {
                  return (
                    <>
                      <List disablePadding>
                        <ListItem disablePadding secondaryAction={
                          <ListItemButton>
                            <MoreHorizIcon
                              id="basic-button"
                              aria-controls={open ? 'basic-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleClick} />
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                'aria-labelledby': 'basic-button',
                              }}
                            >
                              <MenuItem>
                                <Typography variant="body2">Phân loại</Typography>
                              </MenuItem>
                              <Divider />
                              <MenuItem>
                                <Typography variant="body2">Xóa</Typography>
                              </MenuItem>
                            </Menu>
                          </ListItemButton>
                        }>
                          <ListItemButton>
                            <Stack direction="row" alignItems={"center"}>
                              <ListItemAvatar>
                                <Avatar alt={item.groupName} src={item.image} />
                              </ListItemAvatar>
                              <Stack direction="column" spacing={0.5}>
                                <Typography variant="button" fontWeight={"bold"}>{item.groupName}</Typography>
                              </Stack>
                            </Stack>
                          </ListItemButton>
                        </ListItem>
                        <Divider />
                      </List>
                    </>
                  )
                })}

              </Stack>
            </Box>
          </Stack>

        </Box>
      </Box>
    </>
  );
};

export default React.memo(ListGroup);
