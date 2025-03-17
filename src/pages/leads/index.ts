import {leadsHoc} from "./hoc/leadsHoc";
import {contactsHoc} from "./hoc/contactsHoc";

export const leadsPage = (token: string) => {

  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <table style="display: flex;justify-content: center;align-items: center;flex-direction: column">  
    <caption style="font-size: 25px;font-weight: 700">
        Leads list
    </caption>
    <thead>
      <tr style="display: flex;justify-content: center;align-items: center;">
        <th>Id</th>
        <th>Name</th>
        <th>Budget</th>
        <th>Name contacts</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody id="table__body">
    </tbody>
  </table> 
`;

  const tableLeads = document.querySelector<HTMLTableElement>("#table__body");

  contactsHoc(token);
  leadsHoc(token, tableLeads);
};