import { Modal, Box, Avatar } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

function Slide({children}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        variableWidth: true,
        fade: true,
        height: '40%',
      };
  return (
    // <div className="slider-container">
      <Slider {...settings}>
        {children}
      </Slider>
    // </div>
  );
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '80%',
  height: "80%",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

const StyledModal = styled(Modal)(({ theme }) => ({
  "& .MuiModal-dialog": {
    margin: 0,
    position: "absolute",
    width: '100%',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default function ModalImage({isImage ,srcs, styleOrigin,children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    waitForAnimate: false,
    fade: true,
  };
  return (
    <>
      {isImage 
      ? <img src={srcs} alt ="modal" onClick={handleOpen} style={styleOrigin}/> : 
      <Avatar src={srcs} onClick={handleOpen} style={styleOrigin}/> }
      {/* {isImage ?
      srcs.map((src, index) => {
        return <img src={src} alt="modal" onClick={handleOpen} style={styleOrigin} />;
      } ) 
      : <Avatar src={srcs[0]} onClick={handleOpen} style={styleOrigin} />} */}
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Slide> */}
            {children}
          {/* </Slide> */}
        </Box>
      </StyledModal>
    </>
  );
}

// Cấu hình cho slider
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// function ModalImage({ images, children }) {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [activeImage, setActiveImage] = useState(0);

//   const openModal = (index) => {
//     setActiveImage(index);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       {/* {images.map((image, index) => (
//         <img src={image} onClick={() => openModal(index)} />
//       ))} */}
//       {/* Lầy những thẻ img trong children thêm hàm onClick vào*/}
//       {children.map((child, index) => {
//         if (child.type === 'img') {
//           return React.cloneElement(child, {
//             onClick: () => openModal(index),
//           });
//         }
//         return child;
//       })}
//       <Modal isOpen={modalIsOpen} onClose={closeModal}>
//         <Slider {...settings} initialSlide={activeImage}>
//           {images.map((image, index) => (
//             <img src={image} data-index={index} />
//           ))}
//         </Slider>
//       </Modal>
//     </div>
//   );
// }

// export default ModalImage;