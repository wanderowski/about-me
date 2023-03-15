import { Divider, Menu, MenuProps } from "antd";
import styles from "@/styles/Experience.module.scss";
import Container from "@/components/Container/Container";
import { useState } from "react";
import Image from "next/image";

type Item = {
  key: string;
  label: string;
  title: string;
  logoUrl: string;
  dates: string[];
  content: JSX.Element;
};

const items: Item[] = [
  {
    key: "Samgau",
    label: "Samgau",
    title: "Samgau",
    logoUrl: "/logo_samgau.png",
    dates: ["2021-11-08", "present time"],
    content: (
      <>
        <p className="paragraph">
          Started as a junior developer, six months later I was promoted to the
          middle level. I was engaged in the development of a separate module in
          the govtech project. Over the course of a year, I{" "}
          <i>
            <b>optimized</b>
          </i>{" "}
          the old code, removing unnecessary components and rewriting obsolete
          components and functions. Refactored{" "}
          <i>
            <b>over ten pages</b>
          </i>{" "}
          from class components to functional ones using custom and built-in
          hooks. Optimized work with forms by rewriting all forms using{" "}
          <i>
            <u>Formik</u>
          </i>
          , thereby reducing the number of lines of code in the components by{" "}
          <i>
            <b>1.5-2.5 times</b>
          </i>
          . Finally, participated in code reviews, helped recently joined
          developers with code optimization and formatting.
        </p>
        <p className="paragraph">
          In parallel, I participated in another project, where I was also the
          only frontend developer. This project was developed to monitor the
          current situation in the region by aggregating data from various
          sources. For three months of work, I managed to work with{" "}
          <i>
            <u>CubeJS</u>
          </i>
          ,{" "}
          <i>
            <u>Redux Toolkit</u>
          </i>
          ,{" "}
          <i>
            <u>Am Charts v4</u>
          </i>
          . Also, this project was written in{" "}
          <i>
            <u>Typescript</u>
          </i>
          , so I managed to hone my skills in this technology.
        </p>
      </>
    ),
  },
  {
    key: "NU",
    label: "Nazarbayev University",
    title: "Nazarbayev University",
    logoUrl: "/logo_nu.png",
    dates: ["2021-01-15", "2021-11-08"],
    content: (
      <>
        <p className="paragraph">
          I started my work as a graduate research assistant with a professor
          who specialized in research in the field of telecommunications and
          networks. After six months of scientific analysis and preparation, I
          started developing my own DTN (delay / disruption tolerant networks)
          simulator using vanilla{" "}
          <i>
            <b>JavaScript</b>
          </i>
          .
        </p>
        <p className="paragraph">
          In this project, I managed to work closely with elements such as
          canvas, animation and interaction between components. The code was
          based on classes for each of the participants in communications within
          the network. This work formed the basis of my master&apos;s thesis.
          Also, in the course of work, I managed to work with{" "}
          <i>
            <b>Tailwind CSS</b>
          </i>{" "}
          and{" "}
          <i>
            <b>Bootstrap</b>
          </i>
          .
        </p>
      </>
    ),
  },
];

function Experience() {
  const [selectedCompany, setSelectedCompany] = useState<Item>(items[0]);

  const onChange: MenuProps["onClick"] = (e) => {
    const selectedCompany = items.find((it) => it.key === e.key);
    setSelectedCompany(selectedCompany!);
  };
  return (
    <div className={styles.exp}>
      <Container>
        <div className={styles.exp__wrapper}>
          <div className={styles.exp__menu}>
            <Menu
              mode="vertical"
              onClick={onChange}
              items={items}
              className={styles.exp__menuComponent}
              defaultSelectedKeys={["Samgau"]}
            ></Menu>
          </div>
          <div className={styles.exp__content}>
            <h2>{selectedCompany.title}</h2>
            <Divider></Divider>
            <div className={styles.exp__imageContainer}>
              <Image
                src={selectedCompany.logoUrl}
                alt={selectedCompany.title}
                fill
                className={styles.exp__image}
              />
            </div>
            <p className={styles.exp__dates}>
              {selectedCompany.dates[0]} - {selectedCompany.dates[1]}
            </p>
            <Divider />
            {selectedCompany.content}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Experience;
