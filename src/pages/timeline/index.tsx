import styles from "@/styles/Timeline.module.scss";
import Container from "@/components/Container/Container";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SamgauLogo from "public/logo_samgau.png";
import NULogo from "public/logo_nu.png";
import Image from "next/image";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
function Timeline() {
  return (
    <div className={styles.time}>
      <Container>
        <VerticalTimeline animate layout="2-columns">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              border: "1px solid black",
              borderRadius: "12px",
              color: "#000",
            }}
            date="11/2021 - present"
            icon={<WorkOutlineOutlinedIcon />}
            iconStyle={{ border: "1px solid black" }}
          >
            <div className={styles.time__imageContainer}>
              <Image
                src={SamgauLogo}
                alt={"Samgau"}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="vertical-timeline-element-title">
              Frontend Developer at Samgau
            </h3>

            <p className="paragraph">
              Started as a junior developer, six months later I was promoted to
              the middle level. I was engaged in the development of a separate
              module in the govtech project. Over the course of a year, I{" "}
              <i>
                <b>optimized</b>
              </i>{" "}
              the old code, removing unnecessary components and rewriting
              obsolete components and functions. Refactored{" "}
              <i>
                <b>over ten pages</b>
              </i>{" "}
              from class components to functional ones using custom and built-in
              hooks. Optimized work with forms by rewriting all forms using{" "}
              <i>
                <u>Formik</u>
              </i>
              , thereby reducing the number of lines of code in the components
              by{" "}
              <i>
                <b>1.5-2.5 times</b>
              </i>
              . Finally, participated in code reviews, helped recently joined
              developers with code optimization and formatting.
            </p>
            <p className="paragraph">
              In parallel, I participated in another project, where I was also
              the only frontend developer. This project was developed to monitor
              the current situation in the region by aggregating data from
              various sources. For three months of work, I managed to work with{" "}
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
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              border: "1px solid black",
              borderRadius: "12px",
              color: "#000",
            }}
            date="01/2021 - 11/2021"
            icon={<WorkOutlineOutlinedIcon />}
            iconStyle={{ border: "1px solid black" }}
          >
            <h3 className="vertical-timeline-element-title">
              Graduate Research Assistant at NU
            </h3>
            <div className={styles.time__imageContainer}>
              <Image
                src={NULogo}
                alt={"NU"}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="paragraph">
              I started my work as a graduate research assistant with a
              professor who specialized in research in the field of
              telecommunications and networks. After six months of scientific
              analysis and preparation, I started developing my own DTN (delay /
              disruption tolerant networks) simulator using vanilla{" "}
              <i>
                <b>JavaScript</b>
              </i>
              .
            </p>
            <p className="paragraph">
              In this project, I managed to work closely with elements such as
              canvas, animation and interaction between components. The code was
              based on classes for each of the participants in communications
              within the network. This work formed the basis of my master&apos;s
              thesis. Also, in the course of work, I managed to work with{" "}
              <i>
                <b>Tailwind CSS</b>
              </i>{" "}
              and{" "}
              <i>
                <b>Bootstrap</b>
              </i>
              .
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}

export default Timeline;
