import { Box, Typography } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const ListGroup = () => {
  return (
    <>
      <Box
        sx={{
          padding: "20px 15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <PeopleAltOutlinedIcon />
        <Typography fontWeight="bold" marginLeft={1}>
          Danh sách nhóm
        </Typography>
      </Box>
      <Box sx={{ maxHeight: "630px", overflow: "auto" }}>
        <Box sx={{ backgroundColor: "#ccc", height: "800px" }}></Box>
      </Box>
    </>
  );
};

export default ListGroup;
