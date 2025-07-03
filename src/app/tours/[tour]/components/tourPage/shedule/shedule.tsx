import React from "react";
import styles from "./shedule.module.scss";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const Shedule: React.FC = ({ tourData }) => {
  return (
    <section className={styles.schedule}>
      <div className={styles.content}>
        <SectionTitle className={styles.title}>Программа тура</SectionTitle>
        <div className={styles.scheduleList}>
          {tourData.program.map((dayData, index) => (
            <div key={index} className={styles.dayCard} data-aos="fade-right">
              <div className={styles.dayHeader}>
                <span className={styles.dayNumber}>
                  День {dayData.dayNumber}
                </span>
                <h3 className={styles.dayTitle}>{dayData.title}</h3>
              </div>
              <p className={styles.dayDescription}>{dayData.description}</p>
              {dayData.activities.length > 0 && (
                <div className={styles.activities}>
                  <h4 className={styles.activitiesTitle}>Активности:</h4>
                  <ul className={styles.activitiesList}>
                    {dayData.activities.map((activity, actIndex) => (
                      <li key={actIndex} className={styles.activity}>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {dayData.accommodation && (
                <div className={styles.accommodation}>
                  <span className={styles.accommodationLabel}>Проживание:</span>
                  <span className={styles.accommodationValue}>
                    {dayData.accommodation}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
