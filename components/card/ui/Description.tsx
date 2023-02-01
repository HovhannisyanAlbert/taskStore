import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const Description: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

export default memo(Description);
