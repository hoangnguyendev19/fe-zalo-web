import {
  Modal,
  IconButton,
  Typography,
  Box,
  Avatar,
  Divider,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import ConversationAPI from "../api/ConversationAPI";
import { addUser } from "../redux/conversationSlice";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: "550px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  overflowY: "auto",
  // hide scrollbar
  "&::-webkit-scrollbar": {
    display: "none",
  },
  p: 0,
};

export default function AddMember({
  openModal,
  setOpenModal,
  conversation,
  setConversation,
}) {
  const handleCloseModal = () => setOpenModal(false);
  const { user, accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddMember = async (id) => {
    const data = await ConversationAPI.addUserForConversation(
      id,
      conversation.id,
      accessToken
    );
    if (data) {
      dispatch(addUser({ conversationId: conversation.id, user: data }));
      setConversation({
        ...conversation,
        members: [...conversation.members, data],
      });
      handleCloseModal();
      toast.success("Bạn đã thêm thành viên thành công!");
    }
  };

  return (
    <Modal
      keepMounted
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "10px",
            marginBottom: "6px",
            marginTop: "6px",
          }}
        >
          <Typography variant="subtitle1" component="h2" fontWeight={"bold"}>
            Thêm thành viên
          </Typography>
          <IconButton onClick={handleCloseModal} sx={{ color: "black" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{}}>
          {user?.friendList &&
            user?.friendList?.map((friend) => {
              if (
                conversation.members.find((member) => member.id === friend.id)
              ) {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <Avatar
                      src={friend.avatarUrl}
                      alt="avatar"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <Typography marginLeft="10px" fontWeight="bold">
                      {friend.fullName}
                    </Typography>
                  </Box>
                );
              } else {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <Avatar
                      src={friend.avatarUrl}
                      alt="avatar"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <Typography marginLeft="10px" fontWeight="bold">
                      {friend.fullName}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginLeft: "auto" }}
                      onClick={() => handleAddMember(friend.id)}
                    >
                      Thêm
                    </Button>
                  </Box>
                );
              }
            })}
        </Box>
      </Box>
    </Modal>
  );
}
