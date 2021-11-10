/* eslint-disable */

import { BlogNum } from "../../lib/GraphQl"

describe("GraphQL Blog is active, and not 0", () => {
  it("GraphQL Blog is active, and not 0",async () => {
    let gqlBox = new BlogNum();
    gqlBox.url = Cypress.env('GRAPHQL_URL')
    let rawdata = await gqlBox.returnData();
    let dataList = rawdata.data.blogs;
    console.log(dataList)
  })
});
