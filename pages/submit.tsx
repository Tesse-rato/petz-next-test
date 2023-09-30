import { SubHeader } from "../components/Containers";
import SubmitModal from "../components/Containers/SubmitModal";
import styles from "../styles/Submit.module.css";

export default function About() {
  return (
    <div style={{ height: "100%" }}>
      <SubHeader
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Agendar Consulta", link: "/scheduling" },
        ]}
        title="Agendar Consulta"
        subTitle="Recupere seus pokémons em 5 segundos"
      />
      <div className={styles.container}>
        <SubmitModal />
      </div>
    </div>
  );
}
