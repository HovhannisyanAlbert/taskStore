import React, { useMemo } from "react";
import styles from "@/styles/Card.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/store";

import {
  Basket,
  BasketCount,
  BasketElements,
  BasketNum,
  BusketIncrementDecrement,
  ButtonBasket,
  ButtonPurchasedProduct,
  Buttons,
  Category,
  Description,
  Favourite,
  Hit,
  Price,
  Title,
} from "./ui";
import { IProduct } from "@/store/reducers/productSlice";

const Card = () => {
  const { products, beforeAdd, basket, favourite } = useSelector(
    (state: RootState) => state.product
  );
  const filterdBasket = useMemo(() => {
    return (id: number) => basket.find((item) => item.id === id);
  }, [basket]);
  return (
    <>
      {products.map((product: IProduct) => (
        <div className={styles.card} key={product.id}>
          <div className={styles.content}>
            <Image
              src={product.image}
              width={220}
              height={220}
              alt={product.title}
            />

            {product.rating.count > 300 && <Hit>Хит</Hit>}
            <Category>{product.category}</Category>
            <Title>{product.title} </Title>
            <Description>{product.description}</Description>
            <Price>{product.price * 70}</Price>
            <Buttons>
              <Basket>
                {filterdBasket(product.id) ? (
                  <ButtonPurchasedProduct>В корзине</ButtonPurchasedProduct>
                ) : (
                  <>
                    <ButtonBasket id={product.id}>В корзину</ButtonBasket>
                    <BasketCount>
                      <BasketElements>
                        <BusketIncrementDecrement id={product.id}>
                          -
                        </BusketIncrementDecrement>
                        <BasketNum>
                          {beforeAdd
                            .filter((item) => item.id === product.id)
                            .map((item) => item.count)}
                        </BasketNum>
                        <BusketIncrementDecrement id={product.id}>
                          +
                        </BusketIncrementDecrement>
                      </BasketElements>
                    </BasketCount>
                  </>
                )}
              </Basket>
              {favourite.find(
                (item) => item.id === product.id && item.isFavourite
              ) ? (
                <Favourite
                  id={product.id}
                  className={styles.favouriteSelected}
                />
              ) : (
                <Favourite
                  id={product.id}
                  className={styles.favouriteUnselected}
                />
              )}
            </Buttons>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
