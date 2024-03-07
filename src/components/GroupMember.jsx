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
import { assignAdmin, removeUser } from "../redux/conversationSlice";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
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

export default function GroupMember({
  openModal,
  setOpenModal,
  conversation,
  setConversation,
}) {
  const handleCloseModal = () => setOpenModal(false);
  const { user, accessToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAssignAdmin = async (id) => {
    const data = await ConversationAPI.assignAdminForConversation(
      id,
      conversation.id,
      accessToken
    );
    if (data) {
      dispatch(assignAdmin({ conversationId: conversation.id, userId: id }));
      setConversation({ ...conversation, admin: id });
      handleCloseModal();
      toast.success("Bạn đã trao quyền trưởng nhóm thành công!");
    }
  };

  const handleRemoveUser = async (id) => {
    if (conversation.members.length === 3) {
      toast.warning("Nhóm phải có ít nhất 3 thành viên");
      return;
    }

    const data = await ConversationAPI.removeUserForConversation(
      id,
      conversation.id,
      accessToken
    );
    if (data) {
      dispatch(removeUser({ conversationId: conversation.id, userId: id }));
      setConversation({
        ...conversation,
        members: conversation.members.filter((mem) => mem.id !== id),
      });
      handleCloseModal();
      toast.success("Bạn đã xóa thành viên khỏi nhóm thành công!");
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
            Danh sách thành viên
          </Typography>
          <IconButton onClick={handleCloseModal} sx={{ color: "black" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{}}>
          {conversation &&
            conversation?.members?.map((member) => {
              if (member.id === conversation.admin) {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "15px",
                    }}
                  >
                    <Avatar
                      src={member.avatarUrl}
                      alt="avatar"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <Typography marginLeft="10px" fontWeight="bold">
                      {member.fullName}
                    </Typography>
                    <AdminPanelSettingsIcon
                      color="inherit"
                      style={{
                        width: "40px",
                        height: "40px",
                        marginLeft: "auto",
                      }}
                    />
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
                      src={member.avatarUrl}
                      alt="avatar"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <Typography marginLeft="10px" fontWeight="bold">
                      {member.fullName}
                    </Typography>
                    {conversation.admin === user.id && (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: "auto",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          style={{ marginLeft: "auto" }}
                          onClick={() => handleAssignAdmin(member.id)}
                        >
                          Trao
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          style={{ marginLeft: "5px" }}
                          onClick={() => handleRemoveUser(member.id)}
                        >
                          Xóa
                        </Button>
                      </Box>
                    )}
                  </Box>
                );
              }
            })}
        </Box>
      </Box>
    </Modal>
  );
}
