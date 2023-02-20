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
          I&apos;ve been working for more than a year on a govtech project in
          the field of taxes. Currently, I am a middle developer at that company
          and my main responsibilities are:
        </p>
        <ul>
          <li className="paragraph">
            - to develop new features according to the technical requirements
            provided by the Tax department of Kazakhstan
          </li>
          <li className="paragraph">
            - to fix bugs and rapidly react to the problems that appeared in the
            project
          </li>
          <li className="paragraph">
            - to help my teammates and share my thoughts and solutions to
            existing or newly appeared problems.
          </li>
          <li className="paragraph">
            - code review and mentoring of newcomers
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "NU",
    label: "Nazarbayev University",
    title: "NU",
    logoUrl: "/logo_nu.png",
    dates: ["2021-01-15", "2021-11-08"],
    content: <div></div>,
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
