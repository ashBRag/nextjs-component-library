import React from "react";
import styles from "./CoffeeMachineLoader.module.css";

const CoffeeMachineLoader = ({ className = "" }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.coffeeHeader}>
        <div
          className={`${styles.coffeeHeaderButtons} ${styles.coffeeHeaderButtonOne}`}
        ></div>
        <div
          className={`${styles.coffeeHeaderButtons} ${styles.coffeeHeaderButtonTwo}`}
        ></div>
        <div className={styles.coffeeHeaderDisplay}></div>
        <div className={styles.coffeeHeaderDetails}></div>
      </div>
      <div className={styles.coffeeMedium}>
        <div className={styles.coffeeMediumExit}></div>
        <div className={styles.coffeeMediumArm}></div>
        <div className={styles.coffeeMediumLiquid}></div>
        <div
          className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeOne}`}
        ></div>
        <div
          className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeTwo}`}
        ></div>
        <div
          className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeThree}`}
        ></div>
        <div
          className={`${styles.coffeeMediumSmoke} ${styles.coffeeMediumSmokeFor}`}
        ></div>
        <div className={styles.coffeeMediumCup}></div>
      </div>
      <div className={styles.coffeeFooter}></div>
    </div>
  );
};

export default CoffeeMachineLoader;
