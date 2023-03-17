import styles from "./Footer.module.scss";
import SocialIcon from "@/components/SocialIcon/SocialIcon";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div>
            <span className={styles.footer__text}>
              Created by Dauren Beisenkhanov © Copyright 2023{" "}
            </span>
          </div>
          <div className={styles.footer__social}>
            <SocialIcon type="gm" href="mailto:dauren.beisenkhanov@gmail.com" />
            <SocialIcon type="tg" href="https://t.me/wanderowski"></SocialIcon>
            <SocialIcon
              type="in"
              href="https://www.linkedin.com/in/dauren-beisenkhanov-4829671b4/"
            ></SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
