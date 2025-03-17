import {leadsApi} from "../../api";

export const prevPage = (
  element: HTMLButtonElement,
  page: number = 1,
  tableLeads: HTMLTableElement | null,
  token: string
) => {

  element.addEventListener("click", () => {
    --page;
    leadsApi(token, page).then(res => {
      const leads = res.leads;

      return tableLeads!.innerHTML = leads.map(item => {
        return (`
        <tr>
            <th> 
                ${item.id}
            </th>
            <th> 
                ${item.name}
            </th>
            <th> 
                ${item.price}
            </th>
        </tr>
      `);
      }).join("");
    });

  });
};