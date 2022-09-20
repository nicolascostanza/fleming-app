import React from "react";
import styles from "./styles.module.css";

type Props = {
  onView: () => void;
  screen: boolean;
};

const NavBar: React.FC<Props> = ({ onView, screen }) => {
  return (
    <nav className={styles.navBar}>
      <button
        className={styles.btn}
        disabled={screen}
        onClick={() => {
          onView();
        }}
      >
        Ejercicio 1
      </button>
      <button
        className={styles.btn}
        disabled={!screen}
        onClick={() => {
          onView();
        }}
      >
        Ejercicio 2
      </button>
    </nav>
  );
};

export default NavBar;
