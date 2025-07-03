"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./founders.module.scss";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { foundersQuery } from "@/lib/queries";
import Loader from "@/components/shared/Loader";
import { FoundersData } from "@/types/founders";

export const Founders = () => {
  const [data, setData] = useState<FoundersData | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchSanityData(foundersQuery);
        setData(result);
      } catch (error) {
        console.error("Помилка при завантаженні даних засновників:", error);
      }
    };

    getData();
  }, []);

  if (!data) {
    return (
      <section className={styles.founders}>
        <Loader />
      </section>
    );
  }

  return (
    <section className={styles.founders}>
      <div className={styles.foundersCard}>
        <div className={styles.foundersImageBlock}>
          <Image
            src={data.foundersImage}
            alt="Основатели"
            width={480}
            height={460}
            className={styles.foundersImage}
            priority
          />
          <div className={styles.nameLeft}>
            {data.foundersNameLeft}
            <a
              className={styles.foundersInstagram}
              href={`https://instagram.com/${data.foundersLeftInstagram.replace(
                "@",
                ""
              )}`}
              target="_blank"
            >
              {data.foundersLeftInstagram}
            </a>
          </div>
          <div className={styles.nameRight}>
            {data.foundersNameRight}
            <a
              className={styles.foundersInstagram}
              href={`https://instagram.com/${data.foundersRightInstagram.replace(
                "@",
                ""
              )}`}
              target="_blank"
            >
              {data.foundersRightInstagram}
            </a>
          </div>
        </div>

        <div className={styles.foundersTextBlock}>
          <h3 className={styles.titleTop}>ОСНОВАТЕЛИ</h3>
          <h2 className={styles.titleBottom}>PELLION ODYSSEY</h2>
          <ul>
            {data.foundersAchievementsList.map(
              (achievement: string, index: number) => (
                <li key={index} className={styles.achievementItem}>
                  {achievement}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
