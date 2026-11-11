import { useState } from "react"
import { Header } from "./components/Header"
import { Card } from "./components/Card"
import styles from "./styles/App.module.css"

const jogadoresIniciais = [
  { id: 1, nome: "LeBron James", time: "Los Angeles Lakers", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdAqiwoRffTILgGBnuOR27MWiChkS0bSW-NilVssb_g&s" },
  { id: 2, nome: "Stephen Curry", time: "Golden State Warriors", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qlti9XWzYZ6Ch9f2_XIW2E5fJI3LG3k4Qz-ydT1rog&s=10" },
  { id: 3, nome: "Giannis Antetokounmpo", time: "Milwaukee Bucks", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAgcU9WDs_ZQvffyRH1J8oSu9rGEUa6lgTPpDLACDhQ&s=10" },
  { id: 4, nome: "Luka Dončić", time: "Los Angeles Lakers", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwS9pjO4izddbeb9lGiD0oVvKXUUfnMtuCoTuoyKTJA&s=10" },
  { id: 5, nome: "Nikola Jokić", time: "Denver Nuggets", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVERpr8N5qX0LrRx138qRlaIraccOJrMWDAjd39-4QGQ&s=10" },
  { id: 6, nome: "Jayson Tatum", time: "Boston Celtics", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkg5nPl73ySmAvQeOL_vTavwON9CAluiYsodL08gjcQ&s=10" }
]

function App() {
  const [jogadores] = useState(jogadoresIniciais)

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.galeria}>
        {jogadores.map((jogador) => (
          <Card key={jogador.id} jogador={jogador} />
        ))}
      </main>
    </div>
  )
}

export default App
