import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
import { useAppDispatch } from "@/store/store";
import { IProduct } from "@/types";
import { setBasket } from "@/store/reducers/productSlice";
const ButtonBasket: React.FC<PropsWithChildren<IProduct>> = ({
  id,
  children,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setBasket({ id }));
  };
  return (
    <button className={styles.buttonBasket} onClick={handleClick}>
      {children}
    </button>
  );
};

export default memo(ButtonBasket);
