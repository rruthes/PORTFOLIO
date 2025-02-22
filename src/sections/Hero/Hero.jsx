import React, { useEffect } from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../../assets/heroImg.jpg";
import moon from "../../../assets/moon.png";
import sun from "../../../assets/sun.png"
import linkedinIconSun from "../../../assets/linkedin-sun.png";
import linkedinIconMoon from "../../../assets/linkedin-moon.png"
import githubIconSun from "../../../assets/github-sun.png";
import githubIconMoon from "../../../assets/github-moon.png";
import emailIconSun from "../../../assets/gmail-sun.png";
import emailIconMoon from "../../../assets/gmail-moon.png";
import resume from "../../../assets/Currículo.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon
    const githubIcon = theme === 'light' ? githubIconMoon : githubIconSun
    const emailIcon = theme === 'light' ? emailIconMoon : emailIconSun
    const linkedinIcon = theme === 'light' ? linkedinIconMoon : linkedinIconSun
  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.heroImg} src={heroImg} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rafael <br /> Ruthes
        </h1>
        <h2>Computer Science student</h2>
        <span>
          <a href="https://www.linkedin.com/in/rafaelruthes" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="mailto:rafael.c.ruthes@gmail.com" target="_blank">
            <img src={emailIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.github.com/rruthes" target="_blank">
            <img src={githubIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>Always working hard to be a better me.</p>
        <a href={resume}>
          <button className="hover" download>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
