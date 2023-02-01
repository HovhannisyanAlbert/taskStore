import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const Category: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.category}>
      <small>{children}</small>
    </div>
  );
};

export default memo(Category);
