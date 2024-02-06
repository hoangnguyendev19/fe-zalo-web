import {
  Modal,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  Avatar,
  Stack,
  Badge,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CameraEnhanceOutlinedIcon from '@mui/icons-material/CameraEnhanceOutlined';
import CloseIcon from "@mui/icons-material/Close";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModalImage from "../components/ModalImage";
import { useEffect, useState, memo } from "react";
import { styled } from '@mui/material/styles';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: '70vh',
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  overflowY: 'auto',
  p: 0,
};
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      // animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  
}));

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const handleOpenModal = () => setOpenModal(true); 
  const handleCloseModal = () => setOpenModal(false);



  return (
    <div>
      <ListItemButton onClick={handleOpenModal}>
        <Box sx={{ marginRight: "10px" }}>
          <PersonOutlineIcon />
        </Box>
        <Typography>Thông tin tài khoản</Typography>
      </ListItemButton>
      <Modal
        keepMounted
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {/* Title */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",

            }}
          >
            <Typography variant="h6" component="h2" fontWeight={'bold'} sx={{marginLeft: 2}}>
              Thông tin tài khoản
            </Typography>
            <Button onClick={handleCloseModal}>
              <CloseIcon />
            </Button>
          </Box>
          {/* Avatar */}
          <Box>
            <img src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bla bla" style={{width: '100%', height: 160, objectFit: 'cover'}}/>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              marginBottom: "0px",
              gap: '10px',
              position: 'relative',
              top: '-20px',
              marginLeft: '15px',
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Button sx={{minWidth: 0, padding: '5px', backgroundColor: '#C0C0C0', borderRadius: '50%', border: '1px solid #fff'}}
                  variant="rounded">
                  <CameraEnhanceOutlinedIcon sx={{color: '#606060'}} />
                </Button>
              }
            >
              <Avatar sx={{width: 70, height: 70, border: '1px solid #fff'}} alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
            </Badge>
            <Typography variant="h6" component="h2" fontWeight={'bold'}>
              Đăng Quang
            </Typography> 
            <Button sx={{minWidth: 0, padding: 0}}><BorderColorOutlinedIcon sx={{color: "#000"}}/></Button>
          </Box>
          {/* line break */}
          <Box sx={{marginBottom: '10px'}}>
            <hr style={{border: '1px solid #A0A0A0'}}/>
          </Box>
          {/* Thông tin cá nhân */}
          <Box marginLeft={2}>
            <Typography variant="h6" fontWeight={'bold'}> Thông tin cá nhân </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body1" sx={{ color: 'gray' }}>
                  Giới tính
                </Typography>
                <Typography variant="body1" sx={{ color: 'gray' }}>
                  Ngày sinh
                </Typography>
                <Typography variant="body1" sx={{ color: 'gray' }}>
                  Điện thoại
                </Typography>
              </Grid>
              <Grid item >
                <Typography variant="body1" >
                  Nam
                </Typography>
                <Typography variant="body1" >
                  20/12/2000
                </Typography>
                <Typography variant="body1" >
                  090225252
                </Typography>
              </Grid>
            </Grid>
          </Box>
          {/* line break */}
          <Box sx={{marginBottom: '10px'}}>
            <hr style={{border: '1px solid #A0A0A0'}}/>
          </Box>
          {/* Hình ảnh */}
          <Box marginLeft={2}>
            <Typography variant="h6" fontWeight={'bold'}> Hình ảnh </Typography>
            <ImageList cols={4} rowHeight={100}>
              <ImageListItem >
                {/* sử dụng modal image */}
                <img src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bla bla" style={{width: '100%', height: 100, objectFit: 'cotain'}} onClick={() => setOpenImage(true)}/>
                <ModalImage open={openImage} handleCloseImage={() => setOpenImage(false)}>
                  <img src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bla bla" style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                </ModalImage>
              </ImageListItem>
            </ImageList>
          </Box>
          {/* line break */}
          <Box sx={{marginBottom: '10px'}}>
            <hr style={{border: '1px solid #A0A0A0'}}/>
          </Box>
          {/* Chức năng xử lí thêm */}
          <List>
            <ListItemButton>
              <GroupOutlinedIcon sx={{marginRight: 2}}/>
              <Typography>
                Nhóm chung
              </Typography>
            </ListItemButton>
            <ListItemButton>
              <BlockOutlinedIcon sx={{marginRight: 2}}/>
              <Typography>
                Chặn tin nhắn
              </Typography>
            </ListItemButton>
            <ListItemButton>
              <DeleteOutlineOutlinedIcon sx={{marginRight: 2}}/>
              <Typography>
                Xoá bạn bè
              </Typography>
            </ListItemButton>
          </List>
          {/* line break */}
          <Box sx={{marginBottom: '10px'}}>
            <hr style={{border: '1px solid #A0A0A0'}}/>
          </Box>
          {/* Cập nhật */}
          <Button style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            color: 'black',
            // background: 'transparent',
            // border: '0px',
            // borderColor: 'transparent',
            // '&:hover': {
            //   backgroundColor: 'rgba(0,0,0,0.1)',
            // },
            textTransform: 'none',
          }} >
              <BorderColorOutlinedIcon fontSize="medium"/>
              <Typography variant="h6" component="h2" fontWeight={'medium'}>
                Cập nhật
              </Typography>
          </Button>

        </Box>
      </Modal>
    </div>
  );
}