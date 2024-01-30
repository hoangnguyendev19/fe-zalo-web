import { Box, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const ListFriend = () => {
  return (
    <>
      <Box
        sx={{
          padding: "20px 15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PersonOutlineOutlinedIcon />
        <Typography fontWeight="bold" marginLeft={1}>
          Danh sách bạn bè
        </Typography>
      </Box>
      <Box sx={{ maxHeight: "630px", overflow: "auto" }}>
        <Box sx={{ backgroundColor: "#ccc", height: "800px" }}></Box>
      </Box>
    </>
  );
};

export default ListFriend;
