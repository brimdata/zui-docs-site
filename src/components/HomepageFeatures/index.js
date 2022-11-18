import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Super-structured Data",
    description: (
      <>
        Zed is a new data model that unifies the JSON and relational models to
        make data as easy as ever.
      </>
    ),
  },
  {
    title: "Command-line Tooling",
    description: (
      <>
        Run lightning fast search and analytics queries from your command line
        over local Zed data.
      </>
    ),
  },
  {
    title: "Data Lake Scaling",
    description: (
      <>
        Run Zed command-line tools at cloud scale with Git-like transactional
        commits to the Zed lake storage format.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="padding-horiz--md">
        <h3 className={styles.featureHeader}>{title}</h3>
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
