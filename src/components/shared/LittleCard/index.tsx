/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export { styles as LittleCardStyles };

export const LittleCard = ({ item }: { item: any }) => {
  const getPeopleWord = (count: number) => {
    if (count % 10 === 1 && count % 100 !== 11) return "человек";
    if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100))
      return "человека";
    return "человек";
  };

  const getNearestDateRange = (
    tourDates: { startDate: string; endDate: string }[]
  ) => {
    const now = new Date();
    const futureDates = tourDates
      .filter(({ startDate }) => new Date(startDate) >= now)
      .sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );

    return futureDates[0] || null;
  };

  const nearest = getNearestDateRange(item.tourDates);

  return (
    <div className={styles.tourCard}>
      <div className={styles.tourImage}>
        <Image
          src={item.gallery[0]}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>
      <div className={styles.tourInfo}>
        <div className={styles.tourTags}>
          {item.hashtags &&
            item.hashtags.map((tag: any, idx: number) => (
              <span key={idx} className={styles.tag}>
                {tag}
              </span>
            ))}
        </div>
        <h3 className={styles.tourTitle}>{item.title}</h3>
        <div className={styles.tourDetails}>
          <p className={styles.tourDate}>
            {nearest
              ? `${format(new Date(nearest.startDate), "d MMMM", { locale: ru })} – ${format(
                  new Date(nearest.endDate),
                  "d MMMM yyyy",
                  { locale: ru }
                )}`
              : "Нет доступных дат"}
          </p>
          <p className={styles.tourGroup}>
            {item.duration.days} дней – группа {item.group}{" "}
            {getPeopleWord(item.group)}
          </p>
          <p className={styles.tourPrice}>
            ${item.price.toLocaleString().replace(/,/g, " ")}
          </p>
        </div>
        <Link href={`/tours/${item.slug}`}>
          <button className={styles.detailsButton}>ПОДРОБНЕЕ</button>
        </Link>
      </div>
    </div>
  );
};
