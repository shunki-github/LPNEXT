/* eslint-disable */

describe("SendGrid test", () => {
  //it.only("only github action", () => {
    //console.log("send email skip.")
  //}),
  it("send email via SendGrid",async () => {
    let url = "http://localhost:3000/api/send"
    // forbidden access, it is because CORS
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
    const result = await res.json();
    if(result.status === 200) {
      console.log("OK")
      console.log(result)
    } else {
      console.log("Failed")
      console.log(result)
    }
  })
});
