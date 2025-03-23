import React from 'react'
import clsx from 'clsx'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={clsx("container section", styles.footer)}>
        <h3 className={styles.footer__title}>~ ROLAND CHEN ~</h3>
    </footer>
  )
}

export default Footer