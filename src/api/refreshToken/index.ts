import axios from "axios";
import {API_URL, ID_INTEGRATION, REDIRECT_URI, SECRET_KEY, TIME_TOKEN, TOKEN} from "../../shared/constants";

export const refreshTokenApi = async () => {
  const refreshToken = localStorage.getItem("refresh_token");

  return await axios.post(`${API_URL}/oauth2/access_token`, {
      client_id: ID_INTEGRATION,
      client_secret: SECRET_KEY,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      redirect_uri: REDIRECT_URI
    },
    {
      headers: {
        "Access-Control-Allow-Headers": "*",
        Authorization: TOKEN
      }
    }
  );
};