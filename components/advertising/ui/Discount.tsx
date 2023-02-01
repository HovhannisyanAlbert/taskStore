import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Adversting.module.scss";

const Discount: React.FC<PropsWithChildren> = ({ children }) => {
  return <span className={styles.discount}>{children}</span>;
};

export default memo(Discount);
