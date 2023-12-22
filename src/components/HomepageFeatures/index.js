import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "初学者友好",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>面向初学者，快速上手</>,
  },
  {
    title: "官方文档驱动",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>基于官方文档，开箱即用</>,
  },
  {
    title: "奥卡姆剃刀",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>精简文档，缩短学习周期</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
