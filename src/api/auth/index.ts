import axios from "axios";
import {API_URL, ID_INTEGRATION, REDIRECT_URI, SECRET_KEY, TIME_TOKEN, TOKEN} from "../../shared/constants";

export const authApi = async () => {

  return await axios.post(`${API_URL}/oauth2/access_token`, {
      client_id: ID_INTEGRATION,
      client_secret: SECRET_KEY,
      grant_type: "authorization_code",
      code: TIME_TOKEN,
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