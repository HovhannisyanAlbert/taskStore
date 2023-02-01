import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const BasketElements: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.elements}>{children}</div>;
};

export default memo(BasketElements);
