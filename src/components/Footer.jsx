import React from "react";
import { openingHours, socials } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create("#contact h2", { type: "words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center"
      },
      ease: "power1.inOut"
    });
    tl.from(splitTitle.words, {
      opacity: 0,
      yPercent: 100,
      stagger: 0.02
    })
      .from("#contact h3 , #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02
      })
      .to("#f-right-leaf", {
        y: "-50px",
        duration: 1,
        ease: "power1.inOut"
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50px",
          duration: 1,
          ease: "power1.inOut"
        },
        "<"
      );
  }, []);
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="left-leaf"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit our bar</h3>
          <p>High Park, East Ywama, Insein, Yangon</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+959453346408</p>
          <p>heinzwe2626@gmail.com</p>
        </div>
        <div>
          <h3>Open everyday</h3>
          {openingHours.map((openingHour, index) => {
            return (
              <p key={index}>
                {openingHour.day}: {openingHour.time}
              </p>
            );
          })}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
