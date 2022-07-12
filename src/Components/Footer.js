import React from "react";
import Ptext from "./Ptext";
import { IconContext } from "react-icons";
import { FaWhatsappSquare, FaLocationArrow } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import SocialMediaIcons from "./SocialMediaIcons";

export default function Footer() {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <div className="Footer">
        <div className="footer-main">
          <div className="footer-col footer-about">
            <h2>Sani Alhassan</h2>
            <Ptext>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nesciunt perspiciatis similique facilis ipsum perferendis
              necessitatibus porro delectus nostrum, accusamus qui maiores
              asperiores quia officia!
            </Ptext>
          </div>
          <div className="footer-col">
            <h4>Important Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-col footer-contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <FaWhatsappSquare color="#25d366" />
                <span style={{ marginLeft: ".3rem" }}>+23354 9853 041</span>
              </li>
              <li>
                <GrMail color="#c71610" />
                <span style={{ marginLeft: ".3rem" }}>
                  Sanialhassan853@gmail.com
                </span>
              </li>
              <li>
                <FaLocationArrow color="#4a89f3" />
                <span style={{ marginLeft: ".3rem" }}>
                  Zongo, Koforidua, Ghana
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <SocialMediaIcons drow={false} />
          </div>
        </div>
        <div className="footer-footer">
          <Ptext>
            © 2022 - Sani Alhassan (Keezy 🚀✨💫) | Designed By{" "}
            <a href="/" target="_blank" rel="noreferrer">
              Sani Alhassan
            </a>
          </Ptext>
        </div>
      </div>
    </IconContext.Provider>
  );
}
