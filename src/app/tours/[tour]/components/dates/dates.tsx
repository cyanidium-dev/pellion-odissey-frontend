import React from 'react';
import { tourData } from '../../data';
import styles from './dates.module.scss';
import { SectionTitle } from '@/components/shared/SectionTitle';


export const Dates: React.FC = () => {
  return (
    <section className={styles.dates}>
      <SectionTitle className={styles.title}>Ближайшие даты</SectionTitle>
      <p className={styles.dates__scrollHint}>← Листай даты →</p>
      <div className={styles.dates__inner}>
        {tourData.datesData.map((block, i) => (
          <div key={i} className={styles.dates__group}>
            <h3 className={styles.dates__month}>{block.month}</h3>
            <ul className={styles.dates__list}>
              {block.dates.map((date, j) => (
                <li key={j} className={styles.dates__item}>{date}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};