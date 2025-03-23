import {leadsHoc} from "./hoc/leadsHoc";

export const leadsPage = (token: string) => {

  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <table style="display: flex;justify-content: center;align-items: center;flex-direction: column">  
    <caption style="font-size: 25px;font-weight: 700">
        Leads list
    </caption>
    <thead id="table__header">
      <tr id="table__header_row">
        <th class="table__header_th">
            <p class="table__header_p">
                ID
            </p>
        </th>
        <th class="table__header_th">
            <p class="table__header_p">
                Name lead
            </p>
        </th>
        <th class="table__header_th">
            <p class="table__header_p">
                Budget
            </p>
        </th>
        <th class="table__header_th">
            <p class="table__header_p">
                Name contacts
            </p>
        </th>
        <th class="table__header_th">
            <p class="table__header_p">
                Phone
            </p>
        </th>
      </tr>
    </thead>
    <tbody id="table__body">
    </tbody>
  </table> 
`;

  const tableLeads = document.querySelector<HTMLTableElement>("#table__body");

  leadsHoc(token, tableLeads);
};