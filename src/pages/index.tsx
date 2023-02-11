import React, { ReactNode } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function Home() {
  const iconUrl = useBaseUrl("img/zui-icon.svg");
  const textUrl = useBaseUrl("img/zui-text.svg");
  const screenshotUrl = useBaseUrl("img/zui-home-screenshot.png");
  const zedLogoUrl = useBaseUrl("img/zed-logo.svg");

  return (
    <Layout
      title="Zui | Zed User Interface"
      description="A desktop application for working with data. Powered by Zed."
    >
      <Head>
        <html className={styles.html} />
        <meta property="og:title" content="Zui: Zed User Interface" />
      </Head>
      <div className={styles.gridTexture}>
        <div className={styles.radialGradient}></div>
        <div className={styles.gridContent}>
          <div className={clsx(styles.heroContainer, styles.wrap)}>
            <div className={styles.heroLeftSide}>
              <h1>
                <span style={{ visibility: "hidden", position: "absolute" }}>
                  Zui
                </span>
                <img src={textUrl} alt="Zui" />
              </h1>
              <h3 className={styles.boxedSubtitle}>Zed User Interface</h3>
            </div>

            <div className={styles.heroRightSide}>
              <img src={iconUrl} />
              <a
                href="https://brimdata.io/download"
                className={styles.primaryButton}
              >
                Download
              </a>
              <p className={clsx(styles.subText, styles.versionNumber)}>
                v1.0.0
              </p>
            </div>
          </div>

          <div className={styles.wrap}>
            <h3 className={styles.tagline}>
              A desktop app for{" "}
              <em>
                working with <b>data</b>
              </em>
            </h3>
          </div>

          <div className={styles.screenShot}>
            <div className={styles.wrap}>
              <div className={styles.dotTextureTopLeft}></div>
              <div className={styles.dotTextureBottomRight}></div>
              <img
                src={screenshotUrl}
                alt="Zui screenshot showing github pull request data being explored."
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <ul>
          <li>Drag-And-Drop Ingest</li>
          <li>Schema Inference</li>
          <li>Named Queries</li>
          <li>Filters And Pivots</li>
        </ul>
      </div>
      <div className={clsx(styles.wrap, styles.centered)}>
        <p className={styles.boxedSubtitle}>
          Powered By <b>ZED</b>
        </p>
      </div>
      <div className={clsx(styles.zedDescription, styles.wrap)}>
        <img
          src={zedLogoUrl}
          width={250}
          height={250}
          alt="Zed Logo: Two L-shaped bricks converging with the negative space forming a Z shape."
        />
        <div>
          <h3>What Is Zed?</h3>
          <p>
            Zed is system for managing, storing, and processing data. It's a{" "}
            <b>superset</b> of both schema-defined <b>tables</b>, and{" "}
            <b>unstructured documents</b>; an emerging concept we call{" "}
            <a href="https://zed.brimdata.io/docs/formats#2-zed-a-super-structured-pattern">
              super-structured data
            </a>
            .
          </p>
          <p>
            The <a href="https://zed.brimdata.io/docs/formats">storage layer</a>
            , <a href="https://zed.brimdata.io/docs/formats/zed">type system</a>
            ,{" "}
            <a href="https://zed.brimdata.io/docs/language/overview">
              query language
            </a>
            , and <a href="https://zed.brimdata.io/docs/commands/zq">zq</a>{" "}
            command-line utility are just a few of the tools Zed offers to the
            data community.
          </p>
          <a
            className={styles.primaryButton}
            href="https://zed.brimdata.io/docs"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className={styles.wrap}></div>
    </Layout>
  );
}
