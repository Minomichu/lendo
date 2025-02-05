import styles from './startpage.module.scss'

export default function Home() {
  return (
    <>
      <h1>Startsidan</h1>
      <div className={styles.scrollPage}>längd scroll header</div>
    </>
  )
}
