import axios from "axios";
import {API_URL} from "../../shared/constants";

export const allLeadsApi = async (token: string) => {

  const {data: {_embedded}} = await axios.get(`${API_URL}/api/v4/leads`, {
    headers: {
      "Access-Control-Allow-Headers": "*",
      Authorization: token,
      "Content-type": "application/json"
    }
  });
  return { leads: _embedded.leads};
};