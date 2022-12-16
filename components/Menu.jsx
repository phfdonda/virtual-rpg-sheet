import React from 'react'
import styles from "styles/components/Menu.module.scss"
import {Inventory, Avatar, Magic} from "components"

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.inventory_button}>
      </div>
            {/* <Inventory /> */}
      <div className={styles.avatar_button}>
      <div className={styles.frame}></div>

      </div>
            {/* <Avatar /> */}
      <div className={styles.magic_button}></div>
            {/* <Magic /> */}
    </div>
  )
}
