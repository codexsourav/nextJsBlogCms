import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title> 404 | Page Not Found</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <div
        className="container"
        style={{
          textAlign: "center",
          marginTop: 300,
          fontSize: 25,
          fontFamily: '"Signika", sans-serif',
        }}
      >
        404 | Page Not Found
      </div>
    </>
  );
}
