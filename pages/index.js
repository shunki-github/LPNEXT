import { useRouter } from "next/router";
import TempHome from "../components/Templates/home"
//componentは頭文字が大文字で読み込む必要がある

export default function Home() {
    const { locale, asPath } = useRouter();

    return (
        <>
        {TempHome(asPath, locale)}
        </>
    );
    }

export async function getServerSideProps({ res }) {
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-if-error=60");
    return {
        props: {},
    };
}
