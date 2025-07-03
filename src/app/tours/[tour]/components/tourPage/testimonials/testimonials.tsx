import React from "react";
import Image from "next/image";
import styles from "./testimonials.module.scss";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TourData } from "@/types/tour";

export const Testimonials = ({ tourData }: { tourData: TourData }) => {
  return (
    <section className={styles.testimonials}>
      <SectionTitle className={styles.title}>
        Отзывы наших участников
      </SectionTitle>
      <div className={styles.grid}>
        {tourData.reviews?.map((review, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.avatar}>
              <Image
                src={review.photo}
                alt={review.name}
                width={74}
                height={74}
                className={styles.avatarImage}
              />
            </div>
            <p className={styles.text}>{review.text}</p>
            <div className={styles.author}>
              <strong>{review.name}</strong>
              <a
                href={`https://instagram.com/${review.instagram.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
              >
                {review.instagram}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
