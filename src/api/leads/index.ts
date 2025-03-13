import axios from "axios";
import {REDIRECT_URI} from "../../shared/constants";

export const leadsApi =async ()=>{
  return await axios.get(`${REDIRECT_URI}/api/v4/leads`)
}