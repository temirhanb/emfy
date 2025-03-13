import axios from "axios";
import {API_URL, ID_INTEGRATION, REDIRECT_URI, SECRET_KEY, TOKEN} from "../../shared/constants";

export const authApi = async () => {

  return await axios.post(`${REDIRECT_URI}/api/v4/leads`, {
    client_id: API_URL,
    client_secret: SECRET_KEY,
    grant_type: "authorization_code",
    code: TOKEN,
    redirect_uri: ID_INTEGRATION
  });
};