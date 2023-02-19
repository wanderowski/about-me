import Container from "@/components/Container/Container";
import styles from "@/styles/Skills.module.scss";
import Image from "next/image";

const icons = [
  {
    url: "/icon_typescript.png",
    title: "Typescript",
  },
  {
    url: "/icon_react.png",
    title: "React",
  },
  {
    url: "/icon_react-router.png",
    title: "React Router",
  },
  {
    url: "/icon_redux.png",
    title: "Redux",
  },
  {
    url: "/icon_vue.png",
    title: "Vue",
  },
  {
    url: "/icon_next.png",
    title: "NextJS",
  },
  {
    url: "/icon_dva.png",
    title: "DvaJS",
  },
  {
    url: "/icon_webpack.png",
    title: "Webpack",
  },
  {
    url: "/icon_vite.png",
    title: "Vite",
  },
  {
    url: "/icon_html_css_js.png",
    title: "HTML, CSS, JS",
  },
  {
    url: "/icon_sass.png",
    title: "SASS, SCSS",
  },
  {
    url: "/icon_less.png",
    title: "Less",
  },
];

function Skills() {
  return (
    <div className={styles.skills}>
      <Container>
        <div className={styles.skills__wrapper}>
          <ul className={styles.skills__list}>
            {icons.map((icon) => (
              <li key={icon.title} className={styles.skills__list_item}>
                <div className={styles.skills__list_img}>
                  <Image
                    src={icon.url}
                    alt={icon.title}
                    fill
                    style={{ objectFit: "contain" }}
                  ></Image>
                </div>

                <span className={styles.skills__list_title}>{icon.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
