import React from 'react';
import styles from './includes.module.scss';
import { tourData } from '../../data';
import { SectionTitle } from '@/components/shared/SectionTitle';

export const Includes: React.FC = () => {
  return (
    <section className={styles.includes}>
        <div className={styles.content}>
          <SectionTitle className={styles.title}>В стоимость включено</SectionTitle>
          <div className={styles.includesList}>
            {tourData.includes.map((item, index) => (
              <div
                key={index}
                className={styles.includeItem}
                data-aos="flip-right"
              >
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.includeText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};