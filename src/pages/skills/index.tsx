import Container from "@/components/Container/Container";
import styles from "@/styles/Skills.module.scss";

function Skills() {
  return (
    <div className={styles.skills}>
      <Container>
        <div className={styles.skills__wrapper}>
          I have a strong foundation in Frontend development and have experience
          in following technologies:
          <ul className={styles.skills__list}>
            <li>✔️ TypeScript</li>
            <li>✔️ React, React Router, Redux-Saga</li>
            <li>✔️ Vue, Vuex and Vue Router</li>
            <li>✔️ NextJS</li>
            <li>✔️ DvaJS (Redux toolkit analogue)</li>
            <li>✔️ Webpack, Vite</li>
            <li>✔️ HTML, CSS and JS</li>
            <li>✔️ Preprocessors: SCSS, SASS, Less</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
