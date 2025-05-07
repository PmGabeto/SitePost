import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

import { Boneco } from "./Avatar";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <div className={styles.profile}>
        <Boneco hasBorder={true} src="https://github.com/PmGabeto.png" />
        <strong> Pedro Miguel</strong>
        <span>web developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
