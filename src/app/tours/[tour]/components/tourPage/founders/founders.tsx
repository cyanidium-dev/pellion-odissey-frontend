import React from "react";
import Image from "next/image";
import styles from "./founders.module.scss";
import { tourData } from "../../../data";

export const Founders: React.FC = () => {
  return (
    <section className={styles.founders}>
      <div className={styles.foundersCard}>
        <div className={styles.foundersImageBlock}>
          <Image
            src={tourData.foundersImage}
            alt="Основатели"
            width={480}
            height={460}
            className={styles.foundersImage}
            priority
          />
          <div className={styles.nameLeft}>
            {tourData.foundersNameLeft}
            <a
              className={styles.foundersInstagram}
              href={`https://instagram.com/${tourData.foundersLeftInstagram.replace(
                "@",
                ""
              )}`}
              target="_blank"
            >
              {tourData.foundersLeftInstagram}
            </a>
          </div>
          <div className={styles.nameRight}>
            {tourData.foundersNameRight}
            <a
              className={styles.foundersInstagram}
              href={`https://instagram.com/${tourData.foundersRightInstagram.replace(
                "@",
                ""
              )}`}
              target="_blank"
            >
              {tourData.foundersRightInstagram}
            </a>
          </div>
        </div>

        <div className={styles.foundersTextBlock}>
          <h3 className={styles.titleTop}>ОСНОВАТЕЛИ</h3>
          <h2 className={styles.titleBottom}>PELLION ODYSSEY</h2>
          <ul>
            {tourData.foundersAchievementsList.map((achievement, index) => (
              <li key={index} className={styles.achievementItem}>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
