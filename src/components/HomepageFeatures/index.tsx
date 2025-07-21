import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Quickstart",
    Svg: require("@site/static/img/get_started.svg").default,
    description: <>Guides to get you playing in minutes.</>,
  },
  {
    title: "Set Up",
    Svg: require("@site/static/img/set_up.svg").default,
    description: <>Prepare yourself with the right tools and addons.</>,
  },
  {
    title: "Mastery",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Dive more deeply into classes and gameplay strategies.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
