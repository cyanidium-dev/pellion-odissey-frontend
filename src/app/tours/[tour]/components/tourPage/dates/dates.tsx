import React from "react";
import styles from "./dates.module.scss";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { format, parseISO, isAfter, isEqual } from "date-fns";
import { ru } from "date-fns/locale";

interface TourDate {
  startDate: string;
  endDate: string;
}

interface GroupedMonthDates {
  month: string;
  dates: string[];
}

function groupByStartMonth(dates: TourDate[]): GroupedMonthDates[] {
  const today = new Date();
  const monthMap: Record<string, string[]> = {};

  dates.forEach(({ startDate, endDate }) => {
    const start = parseISO(startDate);
    const end = parseISO(endDate);

    if (isAfter(start, today) || isEqual(start, today)) {
      const month = format(start, "LLLL", { locale: ru }); // назва місяця
      const year = format(end, "yyyy"); // завжди рік кінця
      const fromDay = format(start, "d MMMM", { locale: ru });
      const toDay = format(end, "d MMMM", { locale: ru });

      const formatted = `${fromDay} – ${toDay} ${year} г.`;

      if (!monthMap[month]) {
        monthMap[month] = [];
      }

      monthMap[month].push(formatted);
    }
  });

  const monthOrder = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  return Object.entries(monthMap)
    .sort((a, b) => monthOrder.indexOf(a[0]) - monthOrder.indexOf(b[0]))
    .map(([month, dates]) => ({
      month: month[0].toUpperCase() + month.slice(1),
      dates,
    }));
}

export const Dates: React.FC = ({ tourData }) => {
  const formattedTourDates = groupByStartMonth(tourData.tourDates);

  return (
    <section className={styles.dates}>
      <SectionTitle className={styles.title}>Ближайшие даты</SectionTitle>
      <p className={styles.dates__scrollHint}>← Листай даты →</p>
      <div className={styles.dates__inner}>
        {formattedTourDates.map((block, i) => (
          <div key={i} className={styles.dates__group}>
            <h3 className={styles.dates__month}>{block.month}</h3>
            <ul className={styles.dates__list}>
              {block.dates.map((date, j) => (
                <li key={j} className={styles.dates__item}>
                  {date}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
