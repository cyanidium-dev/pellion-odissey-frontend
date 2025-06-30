/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import styles from "./style.module.scss";
import Link from "next/link";

export {styles as LittleCardStyles}

export const LittleCard = ({item}: {item: any}) => {
  return (
    <div className={styles.tourCard}>
      <div className={styles.tourImage}>
        <Image 
          src={item.img} 
          alt={item.title} 
          width={400} 
          height={300} 
          className={styles.image}
        />
      </div>
      <div className={styles.tourInfo}>
        <div className={styles.tourTags}>
          {item.tags && item.tags.map((tag: any, idx: number) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <h3 className={styles.tourTitle}>{item.title}</h3>
        <div className={styles.tourDetails}>
          <p className={styles.tourDate}>{item.date}</p>
          <p className={styles.tourGroup}>{item.details}</p>
          <p className={styles.tourPrice}>{item.price}</p>
        </div>
        <Link href="/tour">
          <button className={styles.detailsButton}>ПОДРОБНЕЕ</button>
        </Link>
        
      </div>
    </div>
  )
}
