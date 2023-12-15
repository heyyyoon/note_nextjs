import Link from 'next/link'
import styles from './layout.module.css'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="">여성옷</Link>
        <Link href="">남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  )
}