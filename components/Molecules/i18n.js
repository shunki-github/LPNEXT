import React from "react";
import Link from "next/link";
import ContWhite from "../Atoms/button/contWhite";
import TextWhite from "../Atoms/button/textWhite";

export function JA(locale, asPath) {
  if (locale === "ja") {
    return (
      <Link href={asPath} locale="ja" passHref={true}>
        <div>{ContWhite("JA")}</div>
      </Link>
    );
  } else {
    return (
      <Link href={asPath} locale="ja" passHref={true}>
        <div>{TextWhite("JA")}</div>
      </Link>
    );
  }
}

export function EN(locale, asPath) {
  if (locale === "en") {
    return (
      <Link href={asPath} locale="en" passHref={true}>
        <div>{ContWhite("EN")}</div>
      </Link>
    );
  } else {
    return (
      <Link href={asPath} locale="en" passHref={true}>
        <div>{TextWhite("EN")}</div>
      </Link>
    );
  }
}
