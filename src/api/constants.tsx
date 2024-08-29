import AxiosInstance from "./axiosInstance";
interface RefreshTokenPayload {
  refreshToken: string;
}

export const baseURL = "https://api-test-web.agiletech.vn/";

export const refreshToken = async ({
  payload,
}: {
  payload: RefreshTokenPayload;
}) => {
  try {
    const res = await AxiosInstance.post("/auth/refresh-token", { payload });
    console.log("vietanh ~ file: constants.tsx:8 ~ refreshToken ~ res:", res);
    return res;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
};
