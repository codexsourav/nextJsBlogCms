import "../styles/globals.css";
import "sweetalert2/src/sweetalert2.scss";
import Navbar from "../siteconponent/blogcomponent/Navbar";
import Fotter from "../siteconponent/blogcomponent/fotter";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  let route = useRouter().route;
  let url = route.split("/")[1];

  return (
    <>
      {url != "admin" ? <Navbar /> : null}
      <Component {...pageProps} />
      {url != "admin" ? <Fotter /> : null}
    </>
  );
}

export default MyApp;
