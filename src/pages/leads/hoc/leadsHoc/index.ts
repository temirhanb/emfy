import {leadsApi} from "../../../../api";

export const leadsHoc = async (token: string, tableLeads: HTMLTableElement | null) => {
  let pageLeads = 1;
  let leadsData: Array<any> = [];

  const intervalConnectLeads = setInterval(() => {

    leadsApi(token, pageLeads).then((res) => {

      const leads = res.leads;

      leadsData.push(...leads);
      tableLeads!.innerHTML = leadsData.map(item => {

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
      pageLeads++;

    }).catch(e => {
      console.dir(e);
      clearInterval(intervalConnectLeads);
    });
  }, 1000);
  console.log(leadsData);
  return leadsData;
};