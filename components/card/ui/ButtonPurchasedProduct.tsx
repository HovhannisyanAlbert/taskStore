import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
const ButtonPurchasedProduct: React.FC<PropsWithChildren> = ({ children }) => {
  return <button className={styles.buttonPurchasedProduct}>{children}</button>;
};

export default memo(ButtonPurchasedProduct);
