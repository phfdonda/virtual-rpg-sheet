import React from 'react'
import styles from "styles/components/Menu.module.scss"
import {Inventory, Avatar, Magic} from "components"

export default function Menu() {
  return (
    <div>
      <div className={styles.inventory}></div>
            {/* <Inventory /> */}
      <div className={styles.avatar}></div>
            {/* <Avatar /> */}
      <div className={styles.magic}></div>
            {/* <Magic /> */}
    </div>
  )
}
