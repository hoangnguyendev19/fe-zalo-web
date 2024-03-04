import { Box, Button, Modal, Popover, Typography } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { convertToTime } from "../utils";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MessageSender = ({ message, handleRevokeMessage }) => {
  const { content, type, isRevoked, createdAt, likes, id } = message;
  const [anchorEl, setAnchorEl] = useState(null);
  const [opening, setOpening] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const uid = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        marginLeft: "auto",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        position: "relative",
      }}
    >
      {!isRevoked && <MoreVertIcon fontSize={"medium"} onClick={handleClick} />}
      <Box
        sx={{
          padding: "15px",
          backgroundColor: "#fff",
          borderRadius: 3,
        }}
      >
        {isRevoked ? (
          <Typography color={"gray"} fontStyle={"italic"}>
            Tin nhắn đã được thu hồi
          </Typography>
        ) : (
          <>
            {type === "TEXT" && (
              <>
                <Typography
                  color={"black"}
                  fontWeight={"bold"}
                  marginBottom="10px"
                >
                  {content}
                </Typography>
              </>
            )}
            {type === "IMAGE" && (
              <Button onClick={() => setOpening(true)}>
                <img
                  src={content}
                  alt="image"
                  style={{ width: "400px", height: "300px" }}
                />
              </Button>
            )}
            {type === "VIDEO" && (
              <>
                <video width="600" height="400" controls>
                  <source src={content} type="video/mp4" />
                </video>
              </>
            )}
            <Typography fontSize={14}>{convertToTime(createdAt)}</Typography>
          </>
        )}
      </Box>
      {!isRevoked && (
        <Box
          sx={{
            position: "absolute",
            bottom: "-20px",
            right: "10px",
            backgroundColor: "#fff",
            padding: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
            boxShadow: "0 0 5px 0px #000",
            borderRadius: "10px",
          }}
        >
          <FavoriteIcon fontSize="small" color="error" />
          <Typography fontSize="14px" color="inherit" marginLeft="5px">
            {likes.length}
          </Typography>
        </Box>
      )}
      <Popover
        id={uid}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Button
          style={{ display: "flex", alignItems: "center", paddingX: "10px" }}
          color="inherit"
          onClick={() => {
            handleRevokeMessage(id);
            handleClose();
          }}
        >
          <KeyboardReturnIcon fontSize={"small"} />
          <Typography sx={{ p: 2 }} fontSize="14px">
            Thu hồi
          </Typography>
        </Button>
      </Popover>
      <Modal
        open={opening}
        onClose={() => setOpening(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          {type === "IMAGE" && (
            <img
              src={content}
              alt="image"
              style={{ width: "590px", height: "390px" }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default MessageSender;
