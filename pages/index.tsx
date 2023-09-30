import Image from "next/image";
import styles from "../styles/Home.module.css";
import PokemonHero from "../public/images/pokemon-hero.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Image className={styles.backImage} src={PokemonHero} alt="PokemonHero" />
      <span className={styles.text}>
        Cuidamos bem do seu pokémon, para ele cuidar bem de você
      </span>
    </div>
  );
}
