/* eslint-disable */

describe("SendGrid test", () => {
  it("send email via SendGrid",async () => {
    let url = "/pages/api/Send.js"
    let req = {
      body: JSON.stringify({
        email: "jest.react.next@gmail.com",
        message:"test message from jest",
        name: "test name from jest",
        tel: "test tel from jest",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      apiKey: Cypress.env('SENDGRID_APIKEY')
    }

    const res = await fetch(url, req);
    console.log(res)
    const result = await res.json();
    console.log(result)
  })
});
