import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const Basket: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.basket}>{children}</div>;
};

export default memo(Basket);
