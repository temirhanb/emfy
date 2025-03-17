import axios from "axios";
import {API_URL} from "../../shared/constants";

export const allLeadsApi = async (token: string, page: number = 1) => {

  const {data} = await axios.get(`${API_URL}/api/v4/leads?page=${page}&limit=2`, {
    headers: {
      "Access-Control-Allow-Headers": "*",
      Authorization: token,
      "Content-type": "application/json"
    }
  });
  console.log(data);
  return data;
};