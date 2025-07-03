import React, { useState } from "react";
import styles from "./faq.module.scss";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const Faq: React.FC = ({ tourData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.content}>
        <SectionTitle className={styles.title}>
          Часто задаваемые вопросы
        </SectionTitle>
        <div className={styles.faqList}>
          {tourData.faq.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.open : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div className={styles.answer}>
                <p>- {faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
