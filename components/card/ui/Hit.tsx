import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const Hit: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className={styles.hit}>{children}</span>;
};

export default memo(Hit);
