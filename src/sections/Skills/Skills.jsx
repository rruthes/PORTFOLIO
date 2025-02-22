import React from 'react'
import styles from './SkillsStyles.module.css'
import checkSun from "../../../assets/check-sun.png"
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>\
            <SkillList src={checkSun} skill="Python"></SkillList>
            <SkillList src={checkSun} skill="Docker"></SkillList>
            <SkillList src={checkSun} skill="Java"></SkillList>
            <SkillList src={checkSun} skill="Rancher"></SkillList>
        </div>
        <hr />
        <div className={styles.skillList}>\
            <SkillList src={checkSun} skill="React"></SkillList>
            <SkillList src={checkSun} skill="JavaScript"></SkillList>
            <SkillList src={checkSun} skill="TailwindCSS"></SkillList>
            <SkillList src={checkSun} skill="Figma"></SkillList>
        </div>
        <hr />
        <div className={styles.skillList}>\
            <SkillList src={checkSun} skill="Bootstrap"></SkillList>
            <SkillList src={checkSun} skill="Git"></SkillList>
            <SkillList src={checkSun} skill="AWS BitBucket"></SkillList>
            <SkillList src={checkSun} skill="Google Cloud"></SkillList>
        </div>
        <hr />
    </section>
  )
}

export default Skills
