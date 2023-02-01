import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const BasketCount: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.count}>{children}</div>;
};

export default memo(BasketCount);
