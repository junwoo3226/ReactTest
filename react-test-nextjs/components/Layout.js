import Head from "next/head";
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>내 블로그</title>
                <meta keyword="블로그 powered by Next js" />
                <meta contents="practice by Next js" />
            </Head>
            <Nav />
            <div>{children}</div>
        </>
    );
};

export default Layout;
