import axios from "axios";
import {API_URL} from "../../shared/constants";

export const leadsApi = async (token: string, page: number) => {

  try {
    const {data: {_embedded, _links}} = await axios.get(`${API_URL}/api/v4/leads?page=${page}&limit=2&with=contacts`, {
      headers: {
        "Access-Control-Allow-Headers": "*",
        Authorization: token,
        "Content-type": "application/json"
      }
    });

    return {leads: _embedded.leads, next: _links.next};
  } catch (e) {
    console.log(e);
  }
};