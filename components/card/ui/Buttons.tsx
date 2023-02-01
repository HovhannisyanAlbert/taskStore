import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const Buttons: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.buttons}>{children}</div>;
};

export default memo(Buttons);
