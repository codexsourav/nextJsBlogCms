import "../styles/globals.css";
import "sweetalert2/src/sweetalert2.scss";
import Navbar from "../siteconponent/blogcomponent/Navbar";
import Fotter from "../siteconponent/blogcomponent/fotter";

import { useRouter } from "next/router";
import Head from "next/head";
import Blogfotter from "../siteconponent/blogcomponent/blogfotter";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  let route = useRouter().route;
  let url = route.split("/")[1];

  return (
    <>
      <Head>
        <title>CodeX Sourav</title>
      </Head>
      {url != "admin" && url != "sitemap.xml" ? (
        <>
          <div className="fixwidthview">
            <Navbar /> <Component {...pageProps} /> <Blogfotter /> <Fotter />
          </div>
        </>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
