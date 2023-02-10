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
  return (
    <Layout
      title={`The Zed Project`}
      description="Super-structured Zed makes cleaning and wrangling data easy."
    >
      <Head>
        <html className={styles.html} />
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
      <div className={clsx(styles.taglineContainer, styles.wrap)}>
        <p className={styles.boxedSubtitle}>
          Powered By <b>ZED</b>
        </p>
      </div>

      <div className={styles.features}>
        <ul>
          <li>Drag-And-Drop Ingest</li>
          <li>Schema Inference</li>
          <li>Named Queries</li>
          <li>Filters And Pivots</li>
        </ul>
      </div>
    </Layout>
  );
}
