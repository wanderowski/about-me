import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <span className={styles.footer__text}>
            Created by Dauren Beisenkhanov © Copyright 2023{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
