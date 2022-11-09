import "../styles/globals.css";
import Navbar from "./component/Navbar";
import Fotter from "./component/fotter";
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
