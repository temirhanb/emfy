export const tableHoc = async (contacts: Array<any>, leads: Array<any>, tableLeads: HTMLTableElement | null) => {

  const tableCartContacts = contacts.map(item => {

    const phone = item.custom_fields_values.filter(el => el.field_code === "PHONE")
      .map(el => el.values.map(el => el.value));
    const email = item.custom_fields_values.filter(el => el.field_code === "EMAIL")
      .map(el => el.values.map(el => el.value));
    return {
      idContact: item.id,
      nameContact: item.name,
      phoneContact: phone.join(""),
      emailContact: email.join(""),
      firstNameContact: item.first_name,
      lastNameContact: item.last_name,
    };
  });
  const tableCartLeads = leads.map(item => {

    const tags = item._embedded.tags;
    const contacts = item._embedded.contacts.map(el => el.id);
    return {
      idLead: item.id,
      nameLead: item.name,
      priceLead: item.price,
      tagsLead: tags,
      contactsLead: contacts,
      laborCostLead: item.labor_cost,
      lastNameContact: item.last_name,
    };
  });

  const cartTable = tableCartLeads.map(lead => {
    const leadContacts = lead.contactsLead;
    const contactCart = tableCartContacts.filter(contact => {
      return leadContacts.includes(contact.idContact);
    });
    return {contactCart: contactCart, ...lead};
  });

  if (cartTable.length === 0) return;

  return tableLeads!.innerHTML = cartTable.map((item, index) => {

    return `
       <tr id="table__body_column" class="${item.idLead}">
            <th class="table__body_th">
            <button id="${item.idLead}">click</button>
                <p class="table__body_p">
                    ${item.idLead}
                </p>
            </th>
            <th class="table__body_th">
                <p class="table__body_p">
                    ${item.nameLead}
                </p>
            </th>
            <th class="table__body_th">
                <p class="table__body_p">
                    ${item.priceLead}
                </p>
            </th>
            <th class="table__body_th">
                ${item.contactCart.map(el => (`<p class="table__body_p">${el.nameContact}</p>`)).join("")}
            </th>
            <th class="table__body_th">
                ${item.contactCart.map(el => `<p class="table__body_p">${el.phoneContact}</p>`).join("")}
            </th>
       </tr>
       <div id="table__body_info"> RED </div>
    `;
  }).join("");
};