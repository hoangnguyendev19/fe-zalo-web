import {
  styled,
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
  AvatarGroup,
  Slider,
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
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModalImage from "../components/ModalImage";
import axios from "axios";
import { useEffect, useState, useRef, memo, useLayoutEffect } from "react";
import AvatarEditor from "react-avatar-editor";
import { Await } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "60vh",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  overflowY: "auto",
  p: 0,
};

export default function Profile() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    changeBody("default");
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  const [body, setBody] = useState("default");
  const changeBody = (body) => {
    setBody(body);
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
          {/* Modal navigation */}
          {body === "default" && (
            <InfoBody
              changeBody={changeBody}
              handleCloseModal={handleCloseModal}
            />
          )}
          {body === "avatar_editor" && (
            <AvatarEdit
              changeBody={changeBody}
              handleCloseModal={handleCloseModal}
            />
          )}
          {body === "image_uploader" && (
            <ImageUploader
              changeBody={changeBody}
              handleCloseModal={handleCloseModal}
            />
          )}
          {body === "info_edit" && (
            <InfoEdit
              changeBody={changeBody}
              handleCloseModal={handleCloseModal}
            />
          )}
          {body === "group_chat" && (
            <GroupChat
              changeBody={changeBody}
              handleCloseModal={handleCloseModal}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
function HeaderModal({ name, changeBody, back, handleCloseModal }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "10px",
        paddingTop: "10px",
        paddingRight: "10px",
        paddingLeft: "2px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "3px",
        }}
      >
        <IconButton
          onClick={() => {
            changeBody(back);
          }}
        >
          <ArrowBackIosNewOutlinedIcon />
        </IconButton>
        <Typography variant="h6" component="h2" fontWeight={"bold"}>
          {name}
        </Typography>
      </Box>
      <IconButton onClick={handleCloseModal} sx={{ color: "black" }}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

function InfoBody({ changeBody, handleCloseModal, data }) {
  return (
    <>
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
      <AvatarHome changeBody={changeBody} />
      {/* line break */}
      <Box sx={{ marginBottom: "10px" }}>
        <hr style={{ border: "1px solid #A0A0A0" }} />
      </Box>
      {/* Thông tin cá nhân */}
      <Info />
      {/* line break */}
      <Box sx={{ marginBottom: "10px" }}>
        <hr style={{ border: "1px solid #A0A0A0" }} />
      </Box>
      {/* Hình ảnh */}
      <Image />
      {/* line break */}
      <Box sx={{ marginBottom: "10px" }}>
        <hr style={{ border: "1px solid #A0A0A0" }} />
      </Box>
      {/* Chức năng xử lí thêm */}
      <AnotherFunctions changeBody={changeBody} />
      {/* line break */}
      <Box sx={{ marginBottom: "10px" }}>
        <hr style={{ border: "1px solid #A0A0A0" }} />
      </Box>
      {/* Cập nhật */}
      <ButtonUpdate changeBody={changeBody} />
    </>
  );
}
function AvatarHome({ changeBody }) {
  return (
    <>
      <Box>
        <ModalImage
          isImage={true}
          srcs="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          badgeContent={
            <Button
              sx={{
                minWidth: 0,
                padding: "5px",
                backgroundColor: "#C0C0C0",
                borderRadius: "50%",
                border: "1px solid #fff",
              }}
              variant="rounded"
              onClick={() => changeBody("avatar_editor")}
            >
              <CameraEnhanceOutlinedIcon sx={{ color: "#606060" }} />
            </Button>
          }
        >
          <ModalImage
            isOpen={false}
            srcs="/static/images/avatar/2.jpg"
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
        <IconButton
          sx={{ minWidth: 0, padding: 0 }}
          onClick={() => changeBody("info_edit")}
        >
          <BorderColorOutlinedIcon sx={{ color: "#000" }} />
        </IconButton>
      </Box>
    </>
  );
}
function AvatarEdit({ changeBody, handleCloseModal }) {
  const updateAvatar = (imageUrl) => {};
  return (
    <>
      <Box sx={{ ...style }}>
        <HeaderModal
          name="Cập nhật ảnh đại diện"
          changeBody={changeBody}
          back="default"
          handleCloseModal={handleCloseModal}
        />
        <Box>
          <ImageUploader
            changeBody={changeBody}
            handleCloseModal={handleCloseModal}
          />
        </Box>
        {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
      </Box>
    </>
  );
}
function ImageUploader({ changeBody, handleCloseModal }) {
  const [open, setOpen] = useState(false); // Hiển thị
  const [image, setImage] = useState(null);
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
    setOpen(true);
    // changeBody("image_uploader");
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    const file = dataURLtoFile(dataURL, "avatar.png");
    console.log(file);
  };
  return (
    <Box>
      {!open && (
        <Box>
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
          </Box>
          <Box marginLeft={2}>
            <Typography variant="h6" component="h2" fontWeight={"bold"}>
              Ảnh đại diện của bạn
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
      )}

      {open && (
        <Box sx={style}>
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
                paddingBottom: "10px",
                paddingTop: "10px",
                paddingRight: "10px",
                paddingLeft: "2px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <IconButton
                  onClick={() => {
                    changeBody("avatar_editor");
                    setOpen(false);
                  }}
                >
                  <ArrowBackIosNewOutlinedIcon />
                </IconButton>
                <Typography variant="h6" component="h2" fontWeight={"bold"}>
                  Cập nhật ảnh đại diện
                </Typography>
              </Box>
              <IconButton onClick={handleCloseModal} sx={{ color: "black" }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box />
            {image && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* <AvatarEditor
                  image={image}
                  width={250}
                  height={250}
                  border={50}
                  color={[255, 255, 255, 0.6]} // RGBA
                  scale={scale}
                  rotate={0}
                  borderRadius={150}
                /> */}
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
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              marginTop: "30px",
              gap: "10px",
              marginRight: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "#EAEDF0",
                color: "#38485B",
                fontSize: "1.2rem",
                border: "none",
                padding: "8px 16px",
              }}
              onClick={() => setOpen(false)}
            >
              Huỷ
            </button>
            <button
              onClick={() => {
                setOpen(false);
              }}
              style={{
                backgroundColor: "#0068FF",
                color: "white",
                fontSize: "1.2rem",
                border: "none",
                padding: "8px 16px",
              }}
            >
              Cập nhật
            </button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
function Info() {
  const data = [
    {
      name: "Đăng Quang",
      gender: "Nam",
      date: "20/12/2000",
      phone: "090225252",
    },
  ];
  return (
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
          <Typography variant="body1">{data[0].name}</Typography>
          <Typography variant="body1">{data[0].date}</Typography>
          <Typography variant="body1">{data[0].phone}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
function InfoEdit({ changeBody, handleCloseModal }) {
  const [value, setValue] = useState("Đăng Quang");
  const [checked, setChecked] = useState(true);
  const [date, setDate] = useState("2022-01-01");

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const handleChangeGender = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeName = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box sx={{ ...style }}>
      <HeaderModal
        name="Chỉnh sửa thông tin"
        changeBody={changeBody}
        back="default"
        handleCloseModal={handleCloseModal}
      />
      <Box
        sx={{
          width: "100%",
          height: "87%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
          }}
        >
          <Box>
            <Typography>Tên hiển thị</Typography>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #A0A0A0",
                boxSizing: "border-box",
              }}
              value={value}
              onChange={handleChangeName}
            />
          </Box>
          <Box>
            <Typography variant="h6" component="h2" fontWeight={"bold"}>
              Giới tính
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: "30px",
                marginY: "10px",
              }}
            >
              <div>
                <input
                  type="radio"
                  id="nam"
                  name="gt"
                  value="Nam"
                  checked={checked}
                  onChange={handleChangeGender}
                />
                <label htmlFor="nam">Nam</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="nu"
                  name="gt"
                  value="Nữ"
                  onChange={handleChangeGender}
                />
                <label htmlFor="nu">Nữ</label>
              </div>
            </Box>
          </Box>
          <Box>
            <Typography>Ngày sinh</Typography>
            <input
              type="date"
              style={{
                minWidth: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #A0A0A0",
                boxSizing: "border-box",
              }}
              value={date}
              onChange={handleChangeDate}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginTop: "30px",
            gap: "10px",
            marginRight: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "#EAEDF0",
              color: "#38485B",
              fontSize: "1.2rem",
              border: "none",
              padding: "8px 16px",
            }}
            onClick={() => changeBody("default")}
          >
            Huỷ
          </button>
          <button
            onClick={() => {
              changeBody("default");
            }}
            style={{
              backgroundColor: "#0068FF",
              color: "white",
              fontSize: "1.2rem",
              border: "none",
              padding: "8px 16px",
            }}
          >
            Cập nhật
          </button>
        </Box>
      </Box>
    </Box>
  );
}
function AnotherFunctions({ changeBody }) {
  return (
    <List>
      <ListItemButton onClick={() => changeBody("group_chat")}>
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
  );
}
function GroupChat({ changeBody, handleCloseModal }) {
  return (
    <Box sx={style}>
      <HeaderModal
        name="Nhóm chung"
        changeBody={changeBody}
        back="default"
        handleCloseModal={handleCloseModal}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingX: "10px",
        }}
      >
        <Box
          sx={{ position: "relative", display: "flex", alignItems: "center" }}
        >
          {/* Tìm kiếm nhóm theo tên */}
          <SearchOutlinedIcon sx={{ position: "absolute", left: "10px" }} />
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              boxSizing: "border-box",
              backgroundColor: "#EAEDF0",
              paddingLeft: "40px",
            }}
            placeholder="Tìm nhóm theo tên"
          />
        </Box>
        <div style={{ overflowY: "scroll", height: "430px" }}>
          <List>
            <ListItemButton>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  msFlexDirection: "row",
                  width: "100%",
                }}
              >
                <AvatarGroup>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                  />
                </AvatarGroup>
                <Typography>Nhóm 1</Typography>
              </Box>
            </ListItemButton>
            <ListItemButton>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  msFlexDirection: "row",
                  width: "100%",
                }}
              >
                <AvatarGroup total={30} max={5} spacing="small">
                  <AvatarGroup spacing="small">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://mui.com/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="https://mui.com/static/images/avatar/2.jpg"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="https://mui.com/static/images/avatar/3.jpg"
                    />
                  </AvatarGroup>
                </AvatarGroup>
                <Typography>Nhóm 2</Typography>
              </Box>
            </ListItemButton>
            <ListItemButton>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  msFlexDirection: "row",
                  width: "100%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
                <Typography>Nhóm 3</Typography>
              </Box>
            </ListItemButton>
          </List>
        </div>
      </Box>
    </Box>
  );
}
function ButtonUpdate({ changeBody }) {
  return (
    <Button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        color: "black",
        textTransform: "none",
      }}
      onClick={() => changeBody("info_edit")}
    >
      <BorderColorOutlinedIcon fontSize="medium" />
      <Typography variant="h6" component="h2" fontWeight={"medium"}>
        Cập nhật
      </Typography>
    </Button>
  );
}
function Image() {
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://65cdef30c715428e8b3f82d1.mockapi.io/person"
      );
      setData(result.data[0].picture);
    };
    fetchData();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(1);

  const openModal = (index) => {
    setActiveImage(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Box marginLeft={2}>
      <Typography variant="h6" fontWeight={"bold"}>
        Hình ảnh
      </Typography>
      <ImageList cols={4} rowHeight={100}>
        {data.map((src, index) => (
          <ImageListItem key={index}>
            <img src={src} alt="bla bla" onClick={() => openModal(index)} />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal open={modalIsOpen} onClose={closeModal}>
        <div
          sx={{
            maxWidth: "90%",
            maxHeight: "90%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {data.map((src, index) => (
            <img src={src} alt="bla bla" key={index} />
          ))}
        </div>
      </Modal>
    </Box>
  );
}

// function ImageGallery({ images }) {
//   return (
//     <ImageList cols={4} rowHeight={100}>
//       {images.map((image, index) => (
//         <ImageListItem key={index}>
//           <img src={image} alt="bla bla" />
//         </ImageListItem>
//       ))}
//     </ImageList>
//   );
// }
