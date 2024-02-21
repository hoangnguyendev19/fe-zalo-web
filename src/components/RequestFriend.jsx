import {
  Avatar,
  Collapse,
  Box,
  Button,
  IconButton,
  Grid,
  TextField,
  Stack,
  Typography
} from "@mui/material";
import React from "react";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const RequestFriend = ({ listRequestFriends: listRequestFriends,
  listReceiveRequestFriend: listReceiveRequestFriend,
  listFriendsExample: listFriendsExample }) => {

  const [open, setOpen] = React.useState(false)

  const handleExpandExampleFriends = () => {
    setOpen(!open);
  }

  return (
    <>
      <Box
        sx={{
          padding: "20px 15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DraftsOutlinedIcon />
        <Typography fontWeight="bold" marginLeft={1}>
          Lời mời kết bạn
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#ccc", height: "590px", overflow: "auto" }}>
        <Box sx={{ height: "100%" }}>

          <Stack direction="column">
            <Stack spacing={1} ml={2} mt={3} mr={2}>
              <Box>
                <Typography variant="body2" fontWeight={"bold"}>Lời mời đã nhận ({listReceiveRequestFriend.length})</Typography>
              </Box>

              <Grid container>
                {listReceiveRequestFriend.map((item, key) => {
                  return (<Grid key={key} className="grid_item"
                    xs={4}
                    backgroundColor={"white"}
                    sx={{ borderRadius: 1, cursor: "pointer", marginRight: 1, marginTop: 1 }}>
                    <Stack direction="column" spacing={2} ml={2} mr={2} mt={2} mb={2}>
                      <Stack direction="row" justifyContent={"space-between"}>
                        <Stack direction="row" spacing={1.5}>
                          <Box>
                            <Avatar
                              alt={item.id.friend.name}
                              src={item.id.friend.image}
                            />
                          </Box>

                          <Stack direction="column">
                            <Typography fontSize={15} fontWeight={"bold"}>{item.id.friend.name}</Typography>
                            <Typography fontSize={13}>{
                              item.dateSendRequest + " "
                            } Từ nhóm trò chuyện</Typography>
                          </Stack>
                        </Stack>

                        <Box>
                          <IconButton>
                            <ChatOutlinedIcon />
                          </IconButton>
                        </Box>
                      </Stack>

                      <Box>
                        <TextField sx={{ backgroundColor: "lightgrey" }} InputProps={{
                          readOnly: true,
                        }} fullWidth defaultValue={item.message}> </TextField>
                      </Box>

                      <Stack direction="row" spacing={1} fullWidth>
                        <Button variant="contained" size="small" color="success" fullWidth>Chấp nhận</Button>
                        <Button variant="contained" size="small" color="error" fullWidth>Từ chối</Button>
                      </Stack>
                    </Stack>
                  </Grid>)
                })}
              </Grid>
            </Stack>

            <Stack spacing={1} ml={2} mt={3} mr={2}>
              <Box>
                <Typography variant="body2" fontWeight={"bold"}>Lời mời đã gửi ({listRequestFriends.length})</Typography>
              </Box>

              <Grid container>
                {listRequestFriends.map((item, key) => {
                  return (<Grid key={key} className="grid_item"
                    xs={4}
                    backgroundColor={"white"}
                    sx={{ borderRadius: 1, cursor: "pointer", marginRight: 1, marginTop: 1 }}>
                    <Stack direction="column" spacing={2} ml={2} mr={2} mt={2} mb={2}>
                      <Stack direction="row" justifyContent={"space-between"}>
                        <Stack direction="row" spacing={1.5}>
                          <Box>
                            <Avatar
                              alt={item.id.owner.name}
                              src={item.id.owner.image}
                            />
                          </Box>

                          <Stack direction="column">
                            <Typography fontSize={15} fontWeight={"bold"}>{item.id.owner.name}</Typography>
                            <Typography fontSize={13}>{
                              item.dateSendRequest
                            }</Typography>
                          </Stack>
                        </Stack>

                        <Box>
                          <IconButton>
                            <ChatOutlinedIcon />
                          </IconButton>
                        </Box>
                      </Stack>

                      <Stack direction="row" spacing={1} fullWidth>
                        <Button variant="contained" size="small" color="warning" fullWidth>Thu hồi lời mời</Button>
                      </Stack>
                    </Stack>
                  </Grid>)
                })}
              </Grid>
            </Stack>

            <Stack ml={2} mt={3} mr={2}>
              <Stack direction="row" sx={{ cursor: "pointer" }} onClick={handleExpandExampleFriends}>
                <Typography variant="body2" fontWeight={"bold"}>Gợi ý kết bạn ({listFriendsExample.length}) </Typography>
                <Stack>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </Stack>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid container>
                  {listFriendsExample.map((item, key) => {
                    return (<Grid key={key} className="grid_item"
                      xs={4}
                      backgroundColor={"white"}
                      sx={{ borderRadius: 1, cursor: "pointer", marginRight: 1, marginTop: 1 }}>
                      <Stack direction="column" spacing={2} ml={2} mr={2} mt={2} mb={2}>
                        <Stack direction="row" justifyContent={"space-between"}>
                          <Stack direction="row" spacing={1.5}>
                            <Box>
                              <Avatar
                                alt={item.name}
                                src={item.image}
                              />
                            </Box>

                            <Stack direction="column">
                              <Typography fontSize={15} fontWeight={"bold"}>{item.name}</Typography>
                              <Typography fontSize={13}>Có thể bạn quen</Typography>
                            </Stack>
                          </Stack>
                        </Stack>

                        <Stack direction="row" spacing={1} fullWidth>
                          <Button variant="contained" size="small" color="warning" fullWidth>Bỏ qua</Button>
                          <Button variant="contained" size="small" color="success" fullWidth>Kết bạn</Button>
                        </Stack>
                      </Stack>
                    </Grid>)
                  })}
                </Grid>
              </Collapse>
            </Stack>
          </Stack>

        </Box>
      </Box>
    </>
  );
};

export default React.memo(RequestFriend);
