import {
  Modal,
  Button,
  IconButton,
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
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import CloseIcon from "@mui/icons-material/Close";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Slider from '@mui/material/Slider';
import ModalImage from "../components/ModalImage";
import { useEffect, useState, useRef, memo } from "react";
import { styled } from "@mui/material/styles";
import AvatarEditor from "react-avatar-editor";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "70vh",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  overflowY: "auto",
  p: 0,
};
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      // animation: 'ripple 1.2s infinite ease-in-out',
      border: "1px solid currentColor",
      content: '""',
    },
  },
}));

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);
  // const [openImage, setOpenImage] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const hadleImgModal = (isOpen) => {
    if (isOpen) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  };
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
              marginLeft: "10px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <Typography variant="h6" component="h2" fontWeight={"bold"}>
              Thông tin tài khoản
            </Typography>
            <IconButton onClick={handleCloseModal} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          {/* Avatar */}
          <Box>
            {/* <img
              src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="bla bla"
              style={{ width: "100%", height: 160, objectFit: "cover" }}
              onClick={() => setOpen(true)}
            /> */}
            <ModalImage
              isImage={true}
              src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="bla bla"
              styleOrigin={{ width: "100%", height: 160, objectFit: "cover" }}
            >
              <img
                src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="bla bla"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </ModalImage>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              marginBottom: "0px",
              gap: "10px",
              position: "relative",
              top: "-20px",
              marginLeft: "15px",
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<AvatarModal />}
            >
              <ModalImage
                isOpen={false}
                src="/static/images/avatar/2.jpg"
                alt="load"
                styleOrigin={{
                  width: 70,
                  height: 70,
                  border: "1px solid #fff",
                }}
              >
                <img
                  src="/static/images/avatar/2.jpg"
                  alt="load"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </ModalImage>
            </Badge>
            <Typography variant="h6" component="h2" fontWeight={"bold"}>
              Đăng Quang
            </Typography>
            <IconButton sx={{ minWidth: 0, padding: 0 }}>
              <BorderColorOutlinedIcon sx={{ color: "#000" }} />
            </IconButton>
          </Box>
          {/* line break */}
          <Box sx={{ marginBottom: "10px" }}>
            <hr style={{ border: "1px solid #A0A0A0" }} />
          </Box>
          {/* Thông tin cá nhân */}
          <Box marginLeft={2}>
            <Typography variant="h6" fontWeight={"bold"}>
              {" "}
              Thông tin cá nhân{" "}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body1" sx={{ color: "gray" }}>
                  Giới tính
                </Typography>
                <Typography variant="body1" sx={{ color: "gray" }}>
                  Ngày sinh
                </Typography>
                <Typography variant="body1" sx={{ color: "gray" }}>
                  Điện thoại
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">Nam</Typography>
                <Typography variant="body1">20/12/2000</Typography>
                <Typography variant="body1">090225252</Typography>
              </Grid>
            </Grid>
          </Box>
          {/* line break */}
          <Box sx={{ marginBottom: "10px" }}>
            <hr style={{ border: "1px solid #A0A0A0" }} />
          </Box>
          {/* Hình ảnh */}
          <Box marginLeft={2}>
            <Typography variant="h6" fontWeight={"bold"}>
              Hình ảnh
            </Typography>
            <ImageList cols={4} rowHeight={100}>
              <ImageListItem>
                {/* sử dụng modal image */}

                <ModalImage
                  isImage={true}
                  src="https://images.unsplash.com/photo-1694439977524-e59aac9bd44c?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="bla bla"
                  styleOrigin={{
                    width: "100%",
                    height: 100,
                    objectFit: "cover",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1694439977524-e59aac9bd44c?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="bla bla"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </ModalImage>
              </ImageListItem>
            </ImageList>
          </Box>
          {/* line break */}
          <Box sx={{ marginBottom: "10px" }}>
            <hr style={{ border: "1px solid #A0A0A0" }} />
          </Box>
          {/* Chức năng xử lí thêm */}
          <List>
            <ListItemButton>
              <GroupOutlinedIcon sx={{ marginRight: 2 }} />
              <Typography>Nhóm chung</Typography>
            </ListItemButton>
            <ListItemButton>
              <BlockOutlinedIcon sx={{ marginRight: 2 }} />
              <Typography>Chặn tin nhắn</Typography>
            </ListItemButton>
            <ListItemButton>
              <DeleteOutlineOutlinedIcon sx={{ marginRight: 2 }} />
              <Typography>Xoá bạn bè</Typography>
            </ListItemButton>
          </List>
          {/* line break */}
          <Box sx={{ marginBottom: "10px" }}>
            <hr style={{ border: "1px solid #A0A0A0" }} />
          </Box>
          {/* Cập nhật */}
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              color: "black",
              textTransform: "none",
            }}
          >
            <BorderColorOutlinedIcon fontSize="medium" />
            <Typography variant="h6" component="h2" fontWeight={"medium"}>
              Cập nhật
            </Typography>
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

function AvatarModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          minWidth: 0,
          padding: "5px",
          backgroundColor: "#C0C0C0",
          borderRadius: "50%",
          border: "1px solid #fff",
        }}
        variant="rounded"
        onClick={handleOpen}
      >
        <CameraEnhanceOutlinedIcon sx={{ color: "#606060" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // marginLeft: "10px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <IconButton onClick={handleClose}>
                <ArrowBackIosNewOutlinedIcon />
              </IconButton>
              <Typography variant="h6" component="h2" fontWeight={"bold"}>
                Cập nhật ảnh đại diện
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <Box>
              {/* <label htmlFor="upload" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 15px',
                margin: '10px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
                backgroundColor: 'rgb(229, 239, 255)',
                color: 'rgb(0, 90, 224)',
                fontWeight: 500,
                fontSize: '18px',
              }} >
                <ImageOutlinedIcon />
                Tải ảnh từ máy lên
              </label>
              <input id="upload" type="file" accept="image/*" style={{display: 'none', padding: '10px 10px'}}/>
               */}
              <ImageUploader />
            </Box>
            <Box marginLeft={2}>
              <Typography variant="h6" component="h2" fontWeight={"bold"}>
                {" "}
                Ảnh đại diện của bạn{" "}
              </Typography>
              <Box>
                <Avatar
                  src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="bla bla"
                  style={{ width: 70, height: 70, border: "1px solid #fff" }}
                />
              </Box>
            </Box>
          </Box>
          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </Box>
      </Modal>
    </>
  );
}
function InformationModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // marginLeft: "10px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <IconButton onClick={handleClose}>
                <ArrowBackIosNewOutlinedIcon />
              </IconButton>
              <Typography variant="h6" component="h2" fontWeight={"bold"}>
                Cập nhật thông tin cá nhân
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          {/* <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p> */}
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </>
  );
}
function GroupModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // marginLeft: "10px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <IconButton onClick={handleClose}>
                <ArrowBackIosNewOutlinedIcon />
              </IconButton>
              <Typography variant="h6" component="h2" fontWeight={"bold"}>
                Nhóm chung
              </Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ color: "black" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </>
  );
}
function ImageUploader() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const inputRef = useRef();
  const canvasRef = useRef();
  const [scale, setScale] = useState(1.2);

const handleScaleChange = (event, newValue) => {
  setScale(newValue);
};

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
    handleOpen();
    // const img = new Image();
    // img.onload = () => {
    //   if (canvasRef.current) {
    //     const ctx = canvasRef.current.getContext('2d');
    //     canvasRef.current.width = img.width;
    //     canvasRef.current.height = img.height;

    //     // set the canvas position to absolute
    //     canvasRef.current.style.position = 'absolute';
    //     canvasRef.current.style.top = '50%';
    //     canvasRef.current.style.left = '50%';
    //     canvasRef.current.style.transform = 'translate(-50%, -50%)';

    //     ctx.drawImage(img, 0, 0, img.width, img.height);
    //   }

    // };
    // img.src = url;
    // handleOpen();
  };

  
  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const ctx = canvasRef.current.getContext('2d');
  //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   }
  // }, []);

  return (
    // <div>
    //   <input ref={inputRef} type="file" onChange={handleFileChange} />
    //   <canvas ref={canvasRef} width="500" height="500" />
    // </div>
    <Box>
      <label
        htmlFor="upload"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px 15px",
          margin: "10px 10px",
          borderRadius: "3px",
          cursor: "pointer",
          backgroundColor: "rgb(229, 239, 255)",
          color: "rgb(0, 90, 224)",
          fontWeight: 500,
          fontSize: "18px",
        }}
      >
        <ImageOutlinedIcon />
        Tải ảnh từ máy lên
      </label>
      <input
        id="upload"
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none", padding: "10px 10px" }}
        onChange={handleFileChange}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Box sx={{ // image editor
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
        }}>
          <Box
            sx={{ // crop container
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              flex: 1,
            }}
          >
            <Box
              sx={{ // crop locked
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                sx={{ // add on
                  position: 'absolute',
                  border: 'none',
                  maxWidth: '300px',
                  maxHeight: '300px',
                  zIndex: 1,
                }}
              >
              </Box>
              <Box
                sx={{ // crop preview
                  position: 'absolute',
                  border: '1px solid #fff',
                  maxWidth: '300px',
                  maxHeight: '300px',
                  cursor: 'move',
                  zIndex: 2,
                  transform: 'translate(-50%, -50%)',
                  boxshadow: '0 0 0 1000px rgba(0, 0, 0, 0.5)',
                }}
              >
              
              </Box>
              <Box
                sx={{ // crop background
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: '100%',
                  height: '100%',
                }}
              >
                <canvas ref={canvasRef} sx={{
                  position: 'relative',
                  aspectRatio: 'auto 240 / 424',
                  // top: '50%',
                  // left: '50%',
                  // transform: 'translate(-50%, -50%)',
                
                }}/>
              </Box>
            </Box>
          </Box>
          
        </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // marginLeft: "10px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={handleClose}>
                  <ArrowBackIosNewOutlinedIcon />
                </IconButton>
                <Typography variant="h6" component="h2" fontWeight={"bold"}>
                  Cập nhật ảnh đại diện
                </Typography>
              </Box>
              <IconButton onClick={handleClose} sx={{ color: "black" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            {image && (
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              
              }}>
                <AvatarEditor
                  image={image}
                  width={300}
                  height={300}
                  border={50}
                  color={[255, 255, 255, 0.6]} // RGBA
                  scale={scale}
                  rotate={0}
                  borderRadius={125}
                
                />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Slider
              value={scale}
              min={1}
              max={3}
              step={0.1}
              onChange={handleScaleChange}
            />
          </Box>
          <Box
          
          >
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                color: "black",
                textTransform: "none",
              }}
            >
              <BorderColorOutlinedIcon fontSize="medium" />
              <Typography variant="h6" component="h2" fontWeight={"medium"}>
                Cập nhật
              </Typography>
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

