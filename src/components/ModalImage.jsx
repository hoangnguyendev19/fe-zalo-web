import { Modal, Box, Avatar } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

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

export default function ModalImage({isImage ,src, styleOrigin,children }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {isImage ? <img src={src} alt="modal" onClick={handleOpen} style={styleOrigin}/> : <Avatar src={src} onClick={handleOpen} style={styleOrigin}/> }
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </StyledModal>
    </>
  );
}
