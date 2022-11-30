import Link from "next/link";
import React, { useEffect, useState } from "react";

function Fotter() {
  const [Show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    });
  }, [lastScrollY]);

  return (
    <fotter>
      <section className={Show ? "fotter" : "fotter hidefotter"}>
        <section className="copyright">@Codex Souarv</section>
        <section className="fotter-link">
          <ul>
            <li>
              <a href="http://instagram.com/codexsourav">@instagram</a>
            </li>
            <li>
              <Link href="/privacypolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </section>
      </section>
    </fotter>
  );
}

export default Fotter;
