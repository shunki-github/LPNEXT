import Head from "next/head";
import styles from "../styles/Contact.module.css";
import {
  FormControl,
  FormLabel,
  ChakraProvider,
  Textarea,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import en from "../public/static/locales/en/common.json";
import ja from "../public/static/locales/ja/common.json";
import * as gtag from "../src/gtag.js";
import React, { useState } from "react";
//import {
//  GoogleReCaptchaProvider,
//  GoogleReCaptcha,
//} from "react-google-recaptcha-v3";

import { JA, EN } from "../components/i18n";
import contactBack from "../components/button/contactBack";
import contactSend from "../components/button/contactSend";

import bigLogo from "../components/logo";

export default function Contact() {
  const registerUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
        name: event.target.name.value,
        tel: event.target.tel.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    await res.json();
    //const result = await res.json();
    //console.log(result)
  };

  const router = useRouter();
  const { locale, asPath } = useRouter();
  let t = locale === "ja" ? ja : en;

  const [time, setTime] = useState(0);
  const handler = () => {
    setTime(time + 1);

    // Information for sending to Analytics
    gtag.event({
      action: "send_time",
      category: "time",
      label: time,
    });
  };

  return (
    <ChakraProvider>
      <div className={styles.container}>
        <Head>
          <title>MAKASERU</title>
          <meta
            name="description"
            content="MAKASERU への問い合わせフォームになります。"
          />
          <link rel="icon" href="/makaserulogo.webp" />
        </Head>
        <main>
          <div className={styles.top}>
            {bigLogo()}
            <div className={styles.top__language}>
              <div className={styles.top__language__JA}>
                {JA(locale, asPath)}
              </div>
              <div className={styles.top__language__EN}>
                {EN(locale, asPath)}
              </div>
            </div>
          </div>
          <div className={styles.back} onClick={() => router.back()}>
            {contactBack(t.contact.back)}
          </div>
          <div className={styles.service}>
            <div className={styles.service__title}>
              <p>{t.contact.contact}</p>
            </div>
            <form onSubmit={registerUser}>
              <div className={styles.service__form}>
                <FormControl isRequired>
                  <FormLabel>{t.contact.name}</FormLabel>
                  <Input type="text" id="name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>{t.contact.mailAddress}</FormLabel>
                  <Input type="email" id="email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>{t.contact.tel}</FormLabel>
                  <Input type="tel" id="tel" />
                </FormControl>
                <Text mb="8px">{t.contact.content}</Text>
                <Textarea
                  placeholder={t.contact.placefolder}
                  id="message"
                  isRequired
                />
              </div>
              <div
                className={styles.service__form__submit}
                onClick={() => {
                  router.back(), handler;
                }}
              >
                {contactSend(t.contact.submit)}
              </div>
            </form>
          </div>
        </main>
      </div>
    </ChakraProvider>
  );
}
