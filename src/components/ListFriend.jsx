import React from "react";
import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Menu,
  MenuList,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Divider
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ListFriend = () => {
  const [selectSortName, setSelectSortName] = React.useState('increase'); //Select for choosing type sort
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let currentAlphabet = '';

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const listFriends = [
    {
      id: 18,
      name: "Đặng Thảo Đoàn Tiến",
      image: "https://picsum.photos/720/348"
    },
    {
      id: 8,
      name: "Ngô Phan Vinh",
      image: "https://picsum.photos/640/480"
    },
    {
      id: 14,
      name: "Đoàn Mai Kha Tăng",
      image: "https://picsum.photos/640/350"
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
        <PersonOutlineOutlinedIcon />
        <Typography fontWeight="bold" marginLeft={1}>
          Danh sách bạn bè
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#ccc", height: "590px", overflow: "auto" }}>
        <Box sx={{ height: "100%" }}>
          <Stack>

            { /* Layer 1: Title */}
            <Box mt={3} ml={2} component='div'>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Bạn bè ({listFriends.length}) </Typography>
            </Box>

            { /* Layer 2: List friends */}
            <Stack ml={2} mt={3} mr={2} sx={{ backgroundColor: "#fff", borderTopLeftRadius: 5, borderTopRightRadius: 5 }} >

              { /* Filter friends */}
              <Stack ml={2} mt={2} mr={2} direction={"row"} component="div" spacing={1}>

                { /* Filter by typing name */}
                <Box component={"div"} width={300}>
                  <TextField variant="outlined" size="small" placeholder="Tìm bạn" InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }} fullWidth={true}/>
                </Box>

                { /* Filter by sorting alphabet name */}
                <Box component={"div"} width={300}>
                  <TextField size="small" defaultValue={selectSortName} select InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SwapVertIcon />
                      </InputAdornment>
                    )
                  }} fullWidth={true} onChange={(event) => handleOnChangeSelectSortName(event)}>
                    <MenuItem value="increase">
                      <Typography>Tên (A - Z)</Typography>
                    </MenuItem>
                    <MenuItem value="descrease">
                      <Typography>Tên (Z - A)</Typography>
                    </MenuItem>
                  </TextField>
                </Box>
              </Stack>

              {/* Show list friends */}
              <Stack component="div">
                {listFriends.map(data => {
                  return (
                    <Box key={data.id}>
                     <List>
                        <ListItem disablePadding secondaryAction={
                          <ListItemButton >
                            <MoreHorizIcon 
                              id="basic-button"
                              aria-controls={ open ? 'basic-menu' : undefined }
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              onClick={handleClick}
                            />
                            <Menu 
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                'aria-labelledby': 'basic-button',
                              }}
                              >
                                <MenuList>
                                  <MenuItem>
                                    Xem thông tin
                                  </MenuItem>
                                  <Divider />
                                  <MenuItem >
                                    Phân loại
                                  </MenuItem>
                                  <MenuItem>
                                    Đặt tên gợi nhớ
                                  </MenuItem>
                                  <Divider />
                                  <MenuItem>
                                    Chặn người này
                                  </MenuItem>
                                  <Divider />
                                  <MenuItem>
                                    <Typography sx={{ color: 'red' }}>Xoá bạn</Typography>
                                  </MenuItem>
                                </MenuList>
                            </Menu>
                          </ListItemButton>
                        }>
                          <ListItemButton divider={true}>
                            <ListItemAvatar>
                              <Avatar alt={data.name} src={data.image} />
                            </ListItemAvatar>
                            <ListItem>
                              <Typography variant="body2" fontWeight={600} fontSize={17}>{data.name}</Typography>
                            </ListItem>
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  )
                })}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(ListFriend);
