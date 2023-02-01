import React, { memo } from "react";
import styles from "@/styles/Card.module.scss";
import { useAppDispatch } from "@/store/store";
import { setFavourite } from "@/store/reducers/productSlice";
import { IProduct } from "@/types";

const Favourite: React.FC<IProduct> = (props) => {
  const { id, className } = props;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setFavourite({ id }));
  };
  return (
    <span className={className} onClick={handleClick}>
      <span />
      <span />
    </span>
  );
};

export default memo(Favourite);
