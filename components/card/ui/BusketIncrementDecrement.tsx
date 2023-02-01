import React, { PropsWithChildren, memo } from "react";
import styles from "@/styles/Card.module.scss";
import { useAppDispatch } from "@/store/store";
import { decrement, increment } from "@/store/reducers/productSlice";
import { IProduct } from "@/types";

const BusketIncrementDecrement: React.FC<PropsWithChildren<IProduct>> = ({
  id,
  children,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (children === "+") {
      dispatch(increment({ id }));
    } else {
      dispatch(decrement({ id }));
    }
  };
  return (
    <span className={styles.math} onClick={handleClick}>
      {children}
    </span>
  );
};

export default memo(BusketIncrementDecrement);
