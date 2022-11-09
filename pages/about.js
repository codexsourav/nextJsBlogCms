import Head from "next/head";
import React from "react";

function about() {
  return (
    <>
      <Head>
        <title>Codex Souarv | About Me</title>
      </Head>

      <div className="container">
        <h1 style={{ fontFamily: '"Signika", sans-serif' }}>About Us</h1>
        <br />
        <p
          style={{
            fontFamily: '"Libre Baskerville", serif',
            lineHeight: 2,
            textAlign: "justify",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
          similique id voluptates aliquid iusto temporibus corrupti harum quas
          tempora, excepturi amet, optio aperiam maxime suscipit vero aut
          repellat numquam exercitationem?
        </p>
      </div>
    </>
  );
}

export default about;
