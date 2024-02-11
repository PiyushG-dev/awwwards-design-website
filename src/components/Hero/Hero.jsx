import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import one from "../../images/one.png";
import two from "../../images/two.webp";
import three from "../../images/three.webp";
import four from "../../images/four.webp";
import five from "../../images/five.webp";
import six from "../../images/six.webp";
import seven from "../../images/seven.webp";
import eight from "../../images/eight.webp";
import nine from "../../images/nine.webp";
import ten from "../../images/ten.webp";
import eleven from "../../images/eleven.webp";
import twelve from "../../images/twelve.webp";
import thirteen from "../../images/thirteen.webp";
import fourteen from "../../images/fourteen.webp";

const Hero = () => {
  const img_container = useRef(null);
  const line = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // loading line animation
    tl.fromTo(
      line.current,
      { height: 0 },
      { height: "20%", duration: 1, delay: 0.5 }
    );
    tl.to(line.current, { height: "100%", duration: 1, delay: -0.5 });

    tl.fromTo(line.current, { opacity: 1 }, { opacity: 0 });

    // img container animation
    gsap.fromTo(
      img_container.current,
      { y: "40vh" },
      { y: "0", duration: 0.5, delay: 2.5 }
    );

    // img animation
    let ctx = gsap.context(() => {
      gsap.fromTo("img", { zIndex: 0 }, { zIndex: 1, stagger: 0.1 });
    }, img_container.current);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div ref={img_container} className={styles.img_container}>
          <img src={two} alt="img" />
          <img src={three} alt="img" />
          <img src={four} alt="img" />
          <img src={five} alt="img" />
          <img src={six} alt="img" />
          <img src={seven} alt="img" />
          <img src={eight} alt="img" />
          <img src={nine} alt="img" />
          <img src={ten} alt="img" />
          <img src={eleven} alt="img" />
          <img src={twelve} alt="img" />
          <img src={thirteen} alt="img" />
          <img src={fourteen} alt="img" />
          <img src={one} alt="img" />
        </div>
      </div>
      <div className={styles.circles_container}>
        <div className={styles.circle}></div>
        <div className={styles.right_circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
      <div className={styles.intro_container}>
        <p>
          We're a New York-based design studio—with roots in the
          Netherlands—specializing in designing consumer products and brands.
        </p>
        <p>
          From initial idea to final production, we work with you to craft
          products that blend both form and function with exceptional elegance.
          We design. We develop. We get it done—nicely.
        </p>
        <p>
          68 Jay Street, Suite 1006 Brooklyn, NY 11201 +1.347.546.7865
          studio@loketdesign.com
        </p>
      </div>
      <div className={styles.tagline}>
        <span>I</span>
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>I</span>
        <span>C</span>
      </div>
      <div ref={line} className={styles.line}></div>
    </section>
  );
};

export default Hero;
