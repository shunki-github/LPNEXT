import Head from "next/head";
import {Header} from "@/components/Organisms/home/header";
import {Body} from "@/components/Organisms/home/body";
import {Footer} from "@/components/Organisms/footer";

export function TempHome(asPath, locale) {
  return (
    <div className={"container"}>
      <Head>
        <title>MAKASERU</title>
        <meta
          name="description"
          content="MAKASERU はビジネスに寄り添った形でモバイルアプリやWebアプリ、AIなどのシステム開発やその後のサポートをします。MAKASERUの魅力は技術選定とその後のサポートです。余計な予算を削ぎ落とし、マーケティング面までサポートします。"
        />
        <link rel="icon" href="/MakaseruICO.webp" />
        <script type="application/ld+json">
          {{
            "@context": "http://schema.org",
            "@type": "Product",
            "name": "MAKASERU",
            "image": `${process.env.NEXT_PUBLIC_LOGO_ICON_PATH}`,
            "description": "MAKASERUにはシステム開発とそのマーケティングの全てを'任せる'ことができます。モバイルアプリ、業務アプリ、業務ツール、AIなど幅広い製品に対応可能です。",
            "brand": {
                "@type": "Brand",
                "name": "MAKASERU"
            }
          }}
        </script>
      </Head>
      <main>
        {Header(asPath, locale)}
        {Body(locale)}
        {Footer("#project", "/contact", "#service", "/blog")}
      </main>
    </div>
  );
}
