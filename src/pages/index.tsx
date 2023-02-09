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
        <div className={clsx(styles.gridContent, styles.wrap)}>
          <div className={styles.heroContainer}>
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
              <button className={styles.primaryButton}>Download</button>
              <p className={clsx(styles.subText, styles.versionNumber)}>
                v1.0.0
              </p>
            </div>
          </div>
          <div>
            <img src={screenshotUrl} />
          </div>
        </div>
      </div>

      <div className={styles.dotTexture}></div>
      <div className={styles.dotTextureAlternate}></div>
    </Layout>
  );
}
