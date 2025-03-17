import {contactsApi} from "../../../../api";

export const contactsHoc = async (token: string) => {
  let pageContacts = 1;
  let contactsData: Array<any> = [];

  const intervalConnectContacts = setInterval(() => {

    contactsApi(token, pageContacts).then((res) => {

      const contactsRes = res.contacts.contacts;

      contactsData.push(...contactsRes.map((item:any) => ({
        id: item.id,
        name: item.name,
        contact: item.custom_fields_values
      })));

    }).catch(e => {

      console.dir(e);

      clearInterval(intervalConnectContacts);
    });

    pageContacts++;
  }, 1000);
  return contactsData;
};