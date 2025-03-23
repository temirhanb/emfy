import {contactsApi, leadsApi} from "../../../../api";
import {tableHoc} from "../tableHoc";


export const leadsHoc = (token: string, tableLeads: HTMLTableElement | null) => {

  let pageLeads = 1;
  let leadsData: Array<any> = [];
  let contactsData: Array<any> = [];

  const intervalFetchingData = setInterval(() => {

    leadsApi(token, pageLeads).then((res) => {
      const leads = res.leads;
      leadsData.push(...leads);
    }).catch(e => console.dir(e));

    contactsApi(token, pageLeads).then(res => {
      contactsData.push(...res.contacts);
      if(!res.next) clearInterval(intervalFetchingData)
    });

    tableHoc(contactsData, leadsData,tableLeads).then(res=>{
      let clickToInfo = document.getElementById('table__body_column');
      let click = document.getElementById('table__body_info');

      clickToInfo?.addEventListener("click", () => {
        console.log("click clack");
        // click.style.display = 'node'
      });

    });

    ++pageLeads;
  }, 1000);
};