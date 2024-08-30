import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { baseURL, refreshToken } from "./constants";

// Tạo một Axios instance
const AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor để thêm token vào header yêu cầu
AxiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const tokenData = JSON.parse(localStorage.getItem("token") || "{}");

    if (tokenData && tokenData.accessToken) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${tokenData.accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Interceptor để xử lý lỗi và làm mới token
AxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      console.log("Received 403 error, attempting to refresh token...");

      const tokenData = JSON.parse(localStorage.getItem("token") || "{}");
      const payload = {
        refreshToken: tokenData.refreshToken,
      };

      try {
        // Gọi API làm mới token
        const apiResponse = await refreshToken({ payload });
        console.log(
          "vietanh ~ file: axiosInstance.tsx:46 ~ apiResponse:",
          apiResponse
        );
        const newTokenData = apiResponse.data;
        localStorage.setItem("token", JSON.stringify(newTokenData));

        // Cập nhật lại token vào header và thử lại yêu cầu gốc
        if (error.config) {
          error.config.headers = error.config.headers || {};
          error.config.headers[
            "Authorization"
          ] = `Bearer ${newTokenData.accessToken}`;
          return axios(error.config);
        }
      } catch (refreshError) {
        console.log("Refresh Token Error:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
