"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import style from "./popularToursList.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { TitleAndText } from "@/components/shared/titleAndText/titleAndText";
import Image from "next/image";
import { LittleCard, LittleCardStyles } from "@/components/shared/LittleCard";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allPopularToursQuery } from "@/lib/queries";

export const PopularToursList: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Get all tours from cms
  useEffect(() => {
    const getTours = async () => {
      try {
        const data = await fetchSanityData(allPopularToursQuery);
        console.log(data);
        setTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  if (!tours.length) return null;

  return (
    <section className={style.popularToursList}>
      <TitleAndText
        title="Самые популярные авторские туры"
        text="Присоединяйся"
        titleClassName={style.title}
        textClassName={style.text}
        className={style.titleAndText}
      />

      <Image
        src={"/images/other/grape.png"}
        alt={"flag"}
        className={style.grape}
        width={300}
        height={400}
      />

      {tours.length > 3 ? (
        <Splide
          className={style.slider}
          options={{
            perPage: 3,
            interval: 3000,
            speed: 1000,
            pauseOnHover: false,
            pauseOnFocus: false,
            breakpoints: {
              1290: {
                perPage: 1,
                drag: true,
              },
              500: {
                arrows: false,
              },
            },
            type: "loop",
            gap: "30px",
            drag: false,
          }}
        >
          {tours.map((item, index) => (
            <SplideSlide key={index}>
              <LittleCard item={item} />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className={style.items}>
          {tours.map((item, index) => (
            <LittleCard key={index} item={item} />
          ))}
        </div>
      )}
      <Link
        href={"/tours"}
        className={`${LittleCardStyles.detailsButton} ${style.button}`}
      >
        Смотреть все
      </Link>
    </section>
  );
};
