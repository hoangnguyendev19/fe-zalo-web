import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/messages`,
  headers: { "Content-Type": "application/json" },
});

const getAllMessageForConversation = async (conversationId, token) => {
  try {
    const { data } = await axiosInstance.get(
      `?conversation=${conversationId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const createMessage = async (message, token) => {
  try {
    const { data } = await axiosInstance.post("/", message, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const revokeMessage = async (messageId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/${messageId}`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const MessageAPI = {
  getAllMessageForConversation,
  createMessage,
  revokeMessage,
};
export default MessageAPI;
