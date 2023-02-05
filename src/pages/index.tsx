import Image from "next/image";
import styles from "@/styles/AboutMe.module.scss";
import Container from "@/components/Container/Container";
import myPhoto from "public/myPhoto.jpg";

export default function Home() {
  return (
    <div className={styles.aboutMe}>
      <Container>
        <div className={styles.aboutMe__wrapper}>
          <Image src={myPhoto} alt="My photo" height={250}></Image>
          <div className={styles.aboutMe__mainText}>
            <h3>Hello World! 👋</h3>
            <p>
              I&apos;m Dauren, a Frontend Developer passionate about creating{" "}
              <i>
                <b>beautiful</b>
              </i>{" "}
              and{" "}
              <i>
                <b>functional</b>
              </i>{" "}
              web apps. With experience in React, Vue, HTML, CSS, and
              JavaScript, I&apos;m skilled in creating dynamic web applications.
            </p>
            <h3>Education</h3>
            <p>
              I received my Master&apos;s in Electrical and Computer Engineering
              from Nazarbayev University. During my studies, I developed a solid
              foundation in software development, web development, and data
              structures. I also learned the importance of creating
              user-friendly and accessible web applications.
            </p>
            <h3>Hobbies and Interests</h3>
            <p>
              Outside of work, I enjoy hiking, camping, and playing the guitar.
              I also love playing video games, especially action and adventure
              games.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
