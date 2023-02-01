import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Adversting.module.scss";

const Text: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default memo(Text);
