/* eslint-disable */

import { useRouter } from "next/router";
import * as gtag from "@/src/gtag";
import React, { useState } from "react";

import {TempContact} from "@/components/Templates/contact";

export default function Contact() {
  const registerUser = async (event) => {
    event.preventDefault();
    const res = await fetch("/api/Send", {
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
    //await res.json();
    const result = await res
    //console.log(result.status)
    afterSend(result);
  };

  const testsend = async (event) => {
    event.preventDefault();
    afterSend(200);
  };

  const afterSend = (result) => {
    if (result.status === 200) {
      alert("送信が成功しました");
      handler();
      router.back();
    } else {
      alert("送信が失敗しました");
      console.log(result)
    }
  };

  const router = useRouter();
  const { locale, asPath } = useRouter();

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

  return <>{TempContact(asPath, locale, router, registerUser)}</>;
}
