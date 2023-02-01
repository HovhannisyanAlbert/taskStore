import React from "react";
import styles from "@/styles/Home.module.scss";
import { Card, Advertising } from "../";

const Store = () => {
  return (
    <div className={styles.store}>
      <Advertising />
      <Card />
    </div>
  );
};

export default Store;
