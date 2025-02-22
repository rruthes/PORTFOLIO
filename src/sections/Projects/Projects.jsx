import React from "react";
import styles from "./ProjectsStyles.module.css";
import spotifyData from "../../../assets/spotify.png";
import ProjectCard from "../../common/ProjectCard";
import carPrice from "../../../assets/carPrice.png"
import copa from "../../../assets/copa.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spotifyData}
          link="https://www.github.com/rruthes/spotify-data"
          h3="Spotify Data"
          p="Statistics project using Python and Spotify data."
        />
        <ProjectCard
          src={carPrice}
          link="https://www.github.com/rruthes/car-price-prediction"
          h3="Car price prediction"
          p="Using linear regression model to predict car prices with Python."
        />
        <ProjectCard
          src={copa}
          link="https://github.com/rruthes/soccer_data_analysis"
          h3="Soccer data analysis"
          p="Python project to analyze the nations at the 2022 World Cup."
        />
      </div>
    </section>
  );
}

export default Projects;
