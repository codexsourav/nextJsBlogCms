import React, { useEffect, useState } from "react";

function fotter() {
  const [Show, setShow] = useState(false);
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
      <div className={Show ? "fotter" : "fotter hidefotter"}>
        <div className="copyright">@Codex Souarv</div>
        <div className="fotter-link">
          <ul>
            <li>
              <a href="#">@instagram</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </fotter>
  );
}

export default fotter;
