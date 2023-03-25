import Container from "@/components/Container/Container";
import styles from "@/styles/Skills.module.scss";
import Image from "next/image";
import TypescriptIcon from "public/icon_typescript.png";
import ReactIcon from "public/icon_react.png";
import ReactRouterIcon from "public/icon_react-router.png";
import ReduxIcon from "public/icon_redux.png";
import DvaIcon from "public/icon_dva.png";
import VueIcon from "public/icon_vue.png";
import NextIcon from "public/icon_next.png";
import WebpackIcon from "public/icon_webpack.png";
import ViteIcon from "public/icon_vite.png";
import HtmlCssJsIcon from "public/icon_html_css_js.png";
import SassIcon from "public/icon_sass.png";
import LessIcon from "public/icon_less.png";
import TailwindIcon from "public/icon_tailwind.svg";
import AmChartsIcon from "public/icon_amcharts.jpg";
import FormikIcon from "public/icon_formik.png";
import CubeIcon from "public/icon_cube.jpg";

const icons = [
  {
    url: TypescriptIcon,
    title: "Typescript",
  },
  {
    url: ReactIcon,
    title: "React",
  },
  {
    url: ReactRouterIcon,
    title: "React Router",
  },
  {
    url: ReduxIcon,
    title: "Redux",
  },
  {
    url: DvaIcon,
    title: "DvaJS",
  },
  {
    url: VueIcon,
    title: "Vue",
  },
  {
    url: NextIcon,
    title: "NextJS",
  },
  {
    url: WebpackIcon,
    title: "Webpack",
  },
  {
    url: ViteIcon,
    title: "Vite",
  },
  {
    url: HtmlCssJsIcon,
    title: "HTML, CSS, JS",
  },
  {
    url: SassIcon,
    title: "SASS, SCSS",
  },
  {
    url: LessIcon,
    title: "Less",
  },
  {
    url: TailwindIcon,
    title: "Tailwind CSS",
  },
  {
    url: AmChartsIcon,
    title: "AM Charts 4",
  },
  {
    url: FormikIcon,
    title: "Formik",
  },
  {
    url: CubeIcon,
    title: "Cube JS",
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
