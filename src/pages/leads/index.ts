import {allLeadsApi, leadsApi} from "../../api";

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
`;
  const tableLeads = document.querySelector<HTMLTableElement>("#table__body");

  const data:Array<any> = [];
  const allLeads = await allLeadsApi(token);
  const allLeadsLength = allLeads.leads.length;

  const intervalConnectLeads = setInterval(async ()=>{

    if(Math.ceil(allLeadsLength/2)===page) {
      clearInterval(intervalConnectLeads)
    }

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

    page++
  },1000)
};