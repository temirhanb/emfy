import {leadsApi} from "../../api";

export const nextPage =  (
  element: HTMLButtonElement,
  page: number,
  data: Array<any>,
  token: string
) => {
  let nextData = data
  console.log(data, "first data");
  element.addEventListener("click", async () => {
    page++;
    const leads = await leadsApi(token, page);
    return nextData.push(...leads.leads);
  });
  console.log(nextData);
  return page;
};