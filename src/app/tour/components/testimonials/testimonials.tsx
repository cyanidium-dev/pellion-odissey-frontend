import React from 'react';
import Image from 'next/image';
import styles from './testimonials.module.scss';
import { tourData } from '../../data';
import { SectionTitle } from '@/components/shared/SectionTitle';

export const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
        <SectionTitle className={styles.title}>Отзывы наших участников</SectionTitle>
        <div className={styles.grid}>
          {tourData.reviews?.map((review, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.avatar}>
                <Image
                  src={review.avatar}
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