export default function handler(req, res) {
  if (req.method === "POST") {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SEND_GRID); //SendGridのAPIキー

    const sendMsg = {
      to: req.body.email,
      from: "shunkiappdeveloper@gmail.com",
      subject: "お問合せありがとうございます。",
      text:
        "お問合せを受け付けました。回答をお待ちください。\n" + req.body.message,
      html:
        "お問合せを受け付けました。回答をお待ちください。\n" + req.body.message,
    }; //fromと送信者が同じメールアドレスだとうまくいかない

    const acceptMsg = {
      to: "shunkiappdeveloper@gmail.com",
      from: req.body.email,
      subject: "Formより問い合わせあり",
      text:
        "お問合せを受け付けました。回答してください。\n" +
        "名前： " +
        req.body.name +
        "\n電話番号： " +
        req.body.tel +
        "\nメッセージ内容： " +
        req.body.message,
      html:
        "お問合せを受け付けました。回答してください。\n" +
        "名前： " +
        req.body.name +
        "\n電話番号： " +
        req.body.tel +
        "\nメッセージ内容： " +
        req.body.message,
    };

    (async () => {
      try {
        await sgMail.send(sendMsg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error("返信メールでエラー： " + error.response.body);
        }
      }

      try {
        await sgMail.send(acceptMsg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error("返信メールでエラー： " + error.response.body);
        }
      }
    })();
  }

  res.status(200).end();
}
