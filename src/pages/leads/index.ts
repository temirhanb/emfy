import {contactsApi, leadsApi} from "../../api";

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

  const data: Array<any> = [];

  const contacts: Array<any> = [];

  let pageLeads = 1;

  let pageContacts = 1;

  const intervalConnectContacts = setInterval(() => {

    contactsApi(token, pageContacts).then((res) => {

      if (!res.next) return clearInterval(intervalConnectContacts);

      const contactsRes = res.contacts.contacts;

      contacts.push(...contactsRes.map((item) => ({id:item.id,name: item.name, contact: item.custom_fields_values})));

      console.log(contacts);
    }).catch(e => {

      console.dir(e);

      clearInterval(intervalConnectContacts);
    });

    pageContacts++;
  }, 1000);

  const intervalConnectLeads = setInterval(() => {

    leadsApi(token, pageLeads).then((res) => {

      if (!res.next || !res) return clearInterval(intervalConnectLeads);

      data.push(...res.leads);

    }).catch(e => {

      console.dir(e);

      clearInterval(intervalConnectLeads);
    });

    pageLeads++;

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
  }, 1000);
  console.log(contacts, data);
};