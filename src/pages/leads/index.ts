import {leadsApi} from "../../api";

export const leadsPage = async (token: string) => {
  let page: number = 1;

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
   <div>
        <button id="button__next">Next</button>
        <button id="button__prev">Prev</button>
    </div>
`;
  const tableLeads = document.querySelector<HTMLTableElement>("#table__body");

  const data = [];

  const {leads} = await leadsApi(token, page);

  data.push(...leads);

  tableLeads!.innerHTML = data.map(item => {
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
  document.querySelector<HTMLButtonElement>("#button__next")!.addEventListener("click", async () => {
    page++;
    const {leads} = await leadsApi(token, page);
    return data.push(...leads.leads);
  });
  console.log(data, "data next");
};