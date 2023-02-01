import React from "react";
import styles from "@/styles/Adversting.module.scss";
import { Button, Discount, Image, Text } from "./ui";

const Advertising = () => {
  return (
    <div className={styles.advertising}>
      <h2> Всё для комфортной работы</h2>
      <div className={styles.content}>
        <div className={styles.arrow}>
          <span />
          <span />
        </div>
        <div className={styles.wrap}>
          <Image src="/pc.png" alt="PC" />
          <div className={styles.suggest}>
            <div className={styles.suggest__items}>
              <Discount> -25% </Discount>
              <Text> на товары для кабинета </Text>
              <Button> Выбрать </Button>
            </div>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.suggest}>
            <div className={styles.suggest__items}>
              <Text>
                <span>
                  Скидка <Discount> 10% </Discount>
                </span>
                <span>на периферию для компьютера</span>
              </Text>
              <Button> Выбрать </Button>
            </div>
          </div>
          <Image src="/room.png" alt="room" />
        </div>
      </div>
    </div>
  );
};

export default Advertising;
