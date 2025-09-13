import api from "./apiConfig";

const get = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
};

const post = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
};

const put = async (url, data = {}) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT request failed:", error);
    throw error;
  }
};

const del = async (url, params = {}) => {
  try {
    const response = await api.delete(url, { params });
    return response.data;
  } catch (error) {
    console.error("DELETE request failed:", error);
    throw error;
  }
};

export { get, post, put, del };
