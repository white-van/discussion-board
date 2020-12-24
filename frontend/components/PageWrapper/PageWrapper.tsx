import React from "react";
import Head from "next/head";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import styles from "./PageWrapper.module.css";

export const PageWrapper = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
