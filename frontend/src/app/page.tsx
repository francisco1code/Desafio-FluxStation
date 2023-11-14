"use client";

import { MenuButton } from '@/app/components/MenuButton'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>  
          <MenuButton/> 
      </div>
    </main>
  )
}
