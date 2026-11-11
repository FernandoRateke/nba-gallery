import styles from "../styles/Card.module.css"

export function Card({ jogador }) {
  if (!jogador) return null

  return (
    <div className={styles.card}>
      <img className={styles.foto} src={jogador.foto} alt={jogador.nome} />
      <h3 className={styles.nome}>{jogador.nome}</h3>
      <p className={styles.time}>{jogador.time}</p>
    </div>
  )
}
