import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "./comStyles/navbar.module.css";
import NextNProgress from "nextjs-progressbar";

function Navbar() {
  const rout = useRouter().route;
  const [nav, setNav] = useState(false);
  const [Show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // mobiel close nav bar
  const closeClick = () => {
    if (window.innerWidth < 622) {
      setTimeout(() => {
        setNav(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 622) {
      setNav(false);
    } else {
      setNav(true);
    }
    // on resive responsive
    window.addEventListener("resize", () => {
      if (window.innerWidth < 622) {
        setNav(false);
      } else {
        setNav(true);
      }
    });
    // on scroll to hide
    window.addEventListener("scroll", () => {
      if (typeof window !== "undefined") {
        if (window.scrollY < lastScrollY) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    });
  }, [lastScrollY]);

  return (
    <>
      <NextNProgress
        color="#ee7660"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <div
        className={`${styles.navbar} ${Show ? `${styles.navhidden}` : null}`}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            width={500 / 2.5 - 10}
            height={120 / 2.5}
            alt="codexsourav logo"
            className={styles.navImg}
            loading="lazy"
          />
        </Link>

        {nav == false ? (
          <div
            className={styles.navbtn}
            onClick={() => {
              setNav(true);
            }}
          >
            <div className={styles.menubtn}></div>
          </div>
        ) : (
          <div
            className={styles.closenav}
            onClick={() => {
              setNav(false);
            }}
          >
            <div className={styles.cbtn}></div>
          </div>
        )}

        {nav == true ? (
          <div className={styles.mainmenu}>
            <ul>
              <li
                onClick={() => {
                  closeClick();
                }}
                className={rout == "/" ? styles.active : null}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => {
                  closeClick();
                }}
                className={rout == "/about" ? styles.active : null}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={() => {
                  closeClick();
                }}
                className={rout == "/contact" ? styles.active : null}
              >
                <Link href="/contact">Contact Us</Link>
              </li>
              <li
                onClick={() => {
                  closeClick();
                }}
                className={rout == "/search" ? styles.active : null}
              >
                <Link href="/search">Search</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
