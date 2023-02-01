import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const BasketNum: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className={styles.num}>{children}</span>;
};

export default memo(BasketNum);
