import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/upload-file`,
  headers: { "Content-Type": "multipart/form-data" },
});

const uploadFile = async (file) => {
  try {
    const { data } = await axiosInstance.post("/upload-file", file);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const UploadAPI = { uploadFile };

export default UploadAPI;
