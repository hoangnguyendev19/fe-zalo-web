import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/users`,
  headers: { "Content-Type": "application/json" },
});

const signup = async (fullName, phoneNumber, password) => {
  try {
    const { data } = await axiosInstance.post("/signup", {
      fullName,
      phoneNumber,
      password,
    });

    if (data.data) {
      localStorage.setItem(
        "access_token",
        JSON.stringify(data.data.accessToken)
      );
    }
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (phoneNumber, password) => {
  try {
    const { data } = await axiosInstance.post("/login", {
      phoneNumber,
      password,
    });

    if (data.data) {
      localStorage.setItem(
        "access_token",
        JSON.stringify(data.data.accessToken)
      );
    }
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  try {
    localStorage.removeItem("access_token");
  } catch (error) {
    console.log(error);
  }
};

const updatePassword = async (password, newPassword, token) => {
  try {
    const { data } = await axiosInstance.put(
      "/update-password",
      { password, newPassword },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

const forgotPassword = async (email) => {
  try {
    const { data } = await axiosInstance.post("/forgot-password", {
      email,
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (userId) => {
  try {
    const { data } = await axiosInstance.get(`/${userId}`);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserByPhoneNumber = async (phoneNumber) => {
  try {
    const { data } = await axiosInstance.get(`?phoneNumber=${phoneNumber}`);

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const getMe = async (token) => {
  try {
    const { data } = await axiosInstance.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const updateMe = async (user, token) => {
  try {
    const { data } = await axiosInstance.put("/me", user, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

const requestFriend = async (userId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/request-friend/${userId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const acceptFriend = async (userId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/accept-friend/${userId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteAcceptFriend = async (userId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/delete-accept-friend/${userId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const revokeFriend = async (userId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/revoke-friend/${userId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteFriend = async (userId, token) => {
  try {
    const { data } = await axiosInstance.put(
      `/delete-friend/${userId}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

const UserAPI = {
  signup,
  login,
  logout,
  updatePassword,
  forgotPassword,
  getUserById,
  getUserByPhoneNumber,
  getMe,
  updateMe,
  requestFriend,
  acceptFriend,
  deleteAcceptFriend,
  revokeFriend,
  deleteFriend,
};

export default UserAPI;
