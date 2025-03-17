import "../../style.css";
import {refreshTokenApi} from "../../api";
import {authApi} from "../../api";
import {leadsPage} from "../leads";

export function index() {

  const refreshToken = localStorage.getItem("refresh_token");

  if (!refreshToken) {
    authApi().then(res => {

      const token = res.data.access_token;
      const refreshToken = res.data.refresh_token;
      localStorage.setItem("refresh_token", refreshToken);
      localStorage.setItem("access_token", token);
      return leadsPage(token);
    });
  } else {
    refreshTokenApi().then(res => {
      const token = res.data.access_token;
      const refreshToken = res.data.refresh_token;
      localStorage.setItem("refresh_token", refreshToken);
      localStorage.setItem("access_token", token);
      return leadsPage(token);
    });
  }
  return document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div>
    Authentication...
    </div>
  </div>
`;
}

index();