import React from "react";
import styles from "./description.module.scss";
import Image from "next/image";

import { SectionTitle } from "@/components/shared/SectionTitle";

export const Description: React.FC = ({ tourData }) => {
  return (
    <section className={styles.description}>
      <Image
        src="/images/other/palm.png"
        alt="Пальма"
        className={styles.palm}
        width={500}
        height={400}
      />
      <div className={styles.content}>
        <SectionTitle className={styles.descriptionTitle}>О туре</SectionTitle>
        <p className={styles.descriptionText}>{tourData.description}</p>
      </div>
    </section>
  );
};
