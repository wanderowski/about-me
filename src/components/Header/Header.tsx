import Image from "next/image";
import styles from "./Header.module.scss";
import developerIcon from "public/developer_emoji.png";
import { useRouter } from "next/router";
import Link from "next/link";

const sections = [
  { url: "/", text: "About me" },
  { url: "/skills", text: "Skills" },
  { url: "/timeline", text: "Experience" },
];

function Header() {
  const { route } = useRouter();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__name}>
            <span>Dauren Beisenkhanov</span>{" "}
            <Image src={developerIcon} alt="developer icon" width={28} />
          </div>
          <nav className={styles.header__nav}>
            {sections.map((it) => (
              <Link
                className={
                  route === it.url
                    ? styles.header__navElement_active
                    : styles.header__navElement
                }
                key={it.text}
                href={it.url}
              >
                {it.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
