import React from 'react'

import styles from "styles/components/Skills.module.scss"

import sheetData from "data/sheets.json"

export default function Skills(props) {
    const {game = "mage_awakening", type} = props
    const attributesData = sheetData[game]["Attributes"]
    const abilitiesData = sheetData[game]["Abilities"]
    const advantagesData = sheetData[game]["Advantages"]

  return (
    <div className={styles.skills_button}>{type}</div>
  )
}
