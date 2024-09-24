import axios from "axios";
import instance from "../../api/axios";

instance.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("access_token");
  accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);
  const BASE_URL = process.env.REACT_APP_CALLBACK_URL;
  const refreshToken = localStorage.getItem("refresh_token");
  const accessExpiredAt = localStorage.getItem("access_expired_at");
  const currentTime = new Date().getTime();

  if (refreshToken) {
    if (accessExpiredAt <= currentTime) {
      const params = new URLSearchParams();
      params.append("refresh", refreshToken);

      const { data } = await axios.post("/auth/reissue", paramms);

      localStorage.setItem("access_token", data.accessToken);
      localStorage.setItem("access_expired_at", data.accessTokenExpiredAt);
      config.headers["Authorization"] = `Bearer ${data.accessToken}`;
    }
  }

  return config;
});
