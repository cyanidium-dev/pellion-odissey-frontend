"use client";

import React from "react";
import Image from "next/image";
import styles from "./hero.module.scss";
import { tourData } from "../../data";
import { useModal } from "@/hooks/useModal";
import { BookingModal } from "@/components/shared/BookingModal";

export const Hero: React.FC = () => {
  const { isOpen, open, close } = useModal();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.titleTop}>{tourData.titleTop}</span>
            <strong className={styles.titleBottom}>
              {tourData.titleBottom}
            </strong>
          </h1>
          <p className={styles.subtitle}>{tourData.subtitle}</p>
          <div className={styles.tourInfo}>
            <div className={`${styles.infoItem} ${styles.durationItem}`}>
              <span className={styles.infoLabel}>Продолжительность:</span>
              <span className={styles.infoValue}>{tourData.duration}</span>
            </div>
            <div className={`${styles.infoItem} ${styles.groupSizeItem}`}>
              <span className={styles.infoLabel}>Размер группы:</span>
              <span className={styles.infoValue}>{tourData.groupSize}</span>
            </div>
            <div className={`${styles.infoItem} ${styles.difficultyItem}`}>
              <span className={styles.infoLabel}>Сложность тура:</span>
              <span className={styles.infoValue}>{tourData.difficulty}</span>
            </div>
          </div>
          <div className={styles.tourBooking}>
            <button className={styles.bookBtn} onClick={open}>
              Забронировать тур
            </button>
            <BookingModal isOpen={isOpen} onClose={close} />
            <div className={styles.tourPriceInfo}>
              <span className={styles.priceLabel}>Стоимость</span>
              <span className={styles.priceValue}>{tourData.price}</span>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/hero/tourImage.png"
            alt="Девушка на пляже"
            className={styles.heroImage}
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};
