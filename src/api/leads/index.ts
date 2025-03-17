import axios from "axios";
import {API_URL} from "../../shared/constants";

export const leadsApi = async (token: string, page: number = 1) => {

  const {data: {_page, _embedded}} = await axios.get(`${API_URL}/api/v4/leads?page=${page}&limit=2`, {
    headers: {
      "Access-Control-Allow-Headers": "*",
      Authorization: token
    }
  });

  return {page: _page, leads: _embedded.leads};
};