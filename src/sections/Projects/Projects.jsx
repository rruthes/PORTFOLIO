import React from 'react'
import styles from './ProjectsStyles.module.css'
import spotifyData from '../../../assets/spotify.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          < ProjectCard src={spotifyData} link="https://www.github.com/rruthes/spotify-data"/>
        </div>
    </section>
  )
}

export default Projects
