import axios from "axios";
import {API_URL} from "../../shared/constants";

export const contactsApi = async (token: string, page: number) => {

  try {
    const {data: {_embedded: contacts, _links}} = await axios.get(`${API_URL}/api/v4/contacts?page=${page}&limit=2`, {
      headers: {
        "Access-Control-Allow-Headers": "*",
        Authorization: token,
        "Content-type": "application/json"
      }
    });

    return {contacts: contacts.contacts, next: _links.next};
  } catch (e) {
    console.log(e);
  }
};