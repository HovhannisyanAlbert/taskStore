import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const Price: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.price}>
      <b>{children} ₽</b>
      <small>/шт.</small>
    </div>
  );
};

export default memo(Price);
