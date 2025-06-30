"use client";

import React from "react";
import Image from "next/image";
import styles from "./main.module.scss";
import { useModal } from "@/hooks/useModal";
import { BookingModal } from "@/components/shared/BookingModal";

export const Main: React.FC = () => {
  const { isOpen, open, close } = useModal();

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.titleTop}>отскройте для себя настоящую</span>
            <strong className={styles.titleBottom}>Грецию</strong>
          </h1>
          <p className={styles.subtitle}>
            Погрузитесь в атмосферу уюта, солнца и древних традиций на
            живописных берегах Эгейского моря.
          </p>
          <div className={styles.tourBooking}>
            <button className={styles.bookBtn} onClick={open}>
              Забронировать тур
            </button>
            <BookingModal isOpen={isOpen} onClose={close} />
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
