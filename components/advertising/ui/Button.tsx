import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Adversting.module.scss";

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return <button className={styles.select}>{children}</button>;
};

export default memo(Button);
