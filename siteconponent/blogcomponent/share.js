import Image from "next/image";
import React from "react";

function Share(props) {
  const host = props.host;
  const title = props.title;
  const poster = props.poster;

  return (
    <ul>
      <li>
        <a
          href={"https://www.facebook.com/sharer.php?u=" + host}
          target="blank"
        >
          <Image width={45} height={45} src="/icons/facebook_lite.png" />
        </a>
      </li>
      <li>
        <a
          href={
            "https://twitter.com/intent/tweet?url=" + host + "&text=" + title
          }
          target="blank"
        >
          <Image width={45} height={45} src="/icons/twitter.png" />
        </a>
      </li>

      <li>
        <a
          href={"https://www.linkedin.com/shareArticle?url=" + host}
          target="blank"
        >
          <Image width={45} height={45} src="/icons/linkedin.png" />
        </a>
      </li>
      <li>
        <a
          href={
            "https://www.pinterest.com/pin/create/button/?url=" +
            host +
            "&media=" +
            poster +
            "&description=" +
            title
          }
          target="blank"
        >
          <Image width={45} height={45} src="/icons/pinterest.png" />
        </a>
      </li>
      <li>
        <a
          href={"whatsapp://send?text= " + title + " | " + host}
          target="blank"
        >
          <Image width={45} height={45} src="/icons/whatsapp.png" />
        </a>
      </li>
      <li>
        <a href={"mailto:?subject=" + title + "&body=" + host} target="blank">
          <Image width={45} height={45} src="/icons/email_alt6.png" />
        </a>
      </li>
    </ul>
  );
}

export default Share;
