import { Box, Typography } from "@mui/material";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";

const RequestFriend = () => {
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
      <Box sx={{ maxHeight: "630px", overflow: "auto" }}>
        <Box sx={{ backgroundColor: "#ccc", height: "800px" }}></Box>
      </Box>
    </>
  );
};

export default RequestFriend;
