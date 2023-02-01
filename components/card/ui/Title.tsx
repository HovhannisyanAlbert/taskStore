import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.title}> {children}</p>;
};

export default memo(Title);
