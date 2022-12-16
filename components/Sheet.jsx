import React from 'react'

import styles from "styles/components/Sheet.module.scss"

import {Menu, Skills, Stats} from "components"

export default function Sheet() {
  return (
    <main className={styles.main}>
        <Menu />
        <Skills type="Attributes"/>
        <Skills  type="Abilities"/>
        <Skills  type="Advantages"/>
        <Stats />  
    </main>
  )
}
