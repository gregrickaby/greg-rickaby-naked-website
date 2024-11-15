import Image from 'next/image'
import styles from './Portfolio.module.css'

export function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h2>My Favorite Photos</h2>
      <Image
        alt="A photo of a sunset"
        height={427}
        src="https://blog.gregrickaby.com/wp-content/uploads/2024/11/DSC5659__20241104.jpg"
        width={640}
      />
    </div>
  )
}
