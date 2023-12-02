import React from "react";
import styles from "./dashboard.module.css";
const DashboardPage = () => {
  return (
    <>
      <h1 className={styles.error}>
        🎉 Congratulations! You've successfully logged in.
      </h1>
      <p className={styles.p}>Welcome to the dash</p>
    </>
  );
};

export default DashboardPage;
