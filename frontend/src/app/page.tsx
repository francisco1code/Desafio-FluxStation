import { MenuButton } from '@/componets/menu-button'
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
