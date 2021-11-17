import { useRouter } from "next/router";
import {TempHome} from "@/Templates/home";

export default function Home() {
  const { locale, asPath } = useRouter();

  return <>{TempHome(asPath, locale)}</>;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-if-error=60");
  return {
    props: {},
  };
}
