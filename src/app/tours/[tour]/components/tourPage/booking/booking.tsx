import React from "react";
import styles from "./booking.module.scss";
import { tourData } from "../../../data";
import { useModal } from "@/hooks/useModal";
import { BookingModal } from "@/components/shared/BookingModal";

export const Booking: React.FC = () => {
  const { isOpen, open, close } = useModal();

  return (
    <section className={styles.booking}>
      <div className={styles.content}>
        <div className={styles.bookingCard}>
          <h2 className={styles.bookingTitle}>Готовы к приключению?</h2>
          <p className={styles.bookingText}>
            Забронируйте тур прямо сейчас и получите незабываемые впечатления!
          </p>
          <div className={styles.bookingPrice}>
            <span className={styles.priceLabel}>Стоимость тура:</span>
            <span className={styles.priceValue}>{tourData.price}</span>
          </div>
          <button className={styles.bookingBtn} onClick={open}>
            Забронировать сейчас
          </button>
          <BookingModal isOpen={isOpen} onClose={close} />
          <p className={styles.bookingNote}>
            * При бронировании за 30 дней до начала тура - скидка 10%
          </p>
        </div>
      </div>
    </section>
  );
};
