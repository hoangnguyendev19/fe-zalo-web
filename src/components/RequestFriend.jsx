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

const RequestFriend = () => {

  const [open, setOpen] = React.useState(false)

  const handleExpandExampleFriends = () => {
    setOpen(!open);
  }

  const persons = [
    {
      id: 1,
      name: "Đặng Ngọc",
      image: "https://picsum.photos/1024/768"
    },
    {
      id: 9,
      name: "Đặng Minh Tú Trung",
      image: "https://picsum.photos/1280/1024"
    },
    {
      id: 17,
      name: "Đoàn Đoàn Dương",
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
                <Typography variant="body2" fontWeight={"bold"}>Lời mời đã nhận ({persons.length})</Typography>
              </Box>

              <Grid container>
                {persons.map((item, key) => {
                  return (<Grid key={key} className="grid_item"
                    xs={3.89}
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
                          </Stack>
                        </Stack>

                        <Box>
                          <IconButton>
                            <ChatOutlinedIcon />
                          </IconButton>
                        </Box>
                      </Stack>

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
                <Typography variant="body2" fontWeight={"bold"}>Lời mời đã gửi ({persons.length})</Typography>
              </Box>

              <Grid container>
                {persons.map((item, key) => {
                  return (<Grid key={key} className="grid_item"
                    xs={3.89}
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
                <Typography variant="body2" fontWeight={"bold"}>Gợi ý kết bạn ({persons.length}) </Typography>
                <Stack>
                  {open ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </Stack>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Grid container>
                  {persons.map((item, key) => {
                    return (<Grid key={key} className="grid_item"
                      xs={3.89}
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
