import styles from "../styles/Header.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>NBA Gallery</h1>
      <p className={styles.subtitulo}>Os maiores jogadores da temporada</p>
    </header>
  )
}
