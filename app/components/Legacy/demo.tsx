"use client";
import styles from "./styles.module.scss";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    const item = document.getElementById("card1");
    const item1 = document.getElementById("card2");
    const item2 = document.getElementById("card3");
    const textZoom = document.getElementById("text-zoom");
    const section = document.getElementById("container");

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray([item, item1, item2]);
      cards.reverse();
      const tl = gsap.timeline();

      gsap.set(textZoom, {
        scale: 1,
        opacity: 1,
      });

      tl.to(textZoom, {
        scale: 4,
        opacity: 0.25,
        duration: 3,
        marginTop: "35vh",
        scrollTrigger: {
          trigger: textZoom,
          start: "top center",
          end: "+=50%",
          scrub: true,
        },
      });

      tl.to(cards, {
        y: "-90vh",
        rotate: -90,
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=250%",
          pin: true,
          pinSpacing: true,
          scrub: true,
        },
      });
    }, []);

    return () => ctx.revert();
  }, []);

  const CARD_DATA = [
    {
      title: "aaaa",
      content: "lorem ispum",
    },
    {
      title: "bbb",
      content: "lorem ispum",
      src: "/assets/images/how-it-work2.webp",
    },
    {
      title: "ccc",
      content: "lorem ispum",
      src: "/assets/images/how-it-work1.webp",
    },
  ];

  return (
    <div id="container" className={styles["container"]}>
      <p className={styles["text"]} id="text-zoom">
        How to begin
      </p>
      {CARD_DATA.map((card, id) => {
        return (
          <CardItem
            key={id}
            {...{
              ...card,
              index: id + 1,
              style: { rotate: `${(id - (CARD_DATA.length - 1)) * 3}deg` },
            }}
          />
        );
      })}
    </div>
  );
}

interface CardProps {
  title: string;
  content: string;
  index: number;
  style: any;
}

const CardItem = (props: CardProps) => {
  const { title, content, index, style } = props;
  return (
    <div className={styles["card"]} id={`card${index}`} style={style}>
      <div className="px-24 pt-24">
        <p className="md:text-[30px] text-[20px] md:mb-16 mb-8 text-white font-bold">
          {title}
        </p>
        <p className="md:text-[18px] text-[14px] text-white">{content}</p>
      </div>
    </div>
  );
};
