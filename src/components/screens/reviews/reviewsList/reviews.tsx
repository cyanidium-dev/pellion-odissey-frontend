"use client";

import React, { useEffect, useState } from "react";
import style from "./reviews.module.scss";
import { ReviewsItem } from "../reviewsItem/reviewsItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { TitleAndText } from "@/components/shared/titleAndText/titleAndText";
import Loader from "@/components/shared/Loader";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allReviewsQuery } from "@/lib/queries";
import { Review } from "@/types/review";

export const Reviews: React.FC = () => {
  const [data, setData] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchSanityData(allReviewsQuery);
        setData(reviews);
      } catch (error) {
        console.error("Помилка завантаження відгуків:", error);
      } finally {
        setLoading(false);
      }
    };

    getReviews();
  }, []);

  if (loading) return <Loader />;

  return (
    <section className={style.reviews}>
      <TitleAndText
        title="Впечатления путешественников"
        text="Отзывы тех, кто уже путешествовал с нами"
        className={style.titleAndText}
        titleClassName={style.title}
        textClassName={style.text}
      />

      <Splide
        className={style.slider}
        options={{
          perPage: 1,
          type: "loop",
          pagination: true,
          breakpoints: {
            500: {
              arrows: false,
            },
          },
        }}
      >
        {data.map((item, index) => (
          <SplideSlide key={index}>
            <ReviewsItem img={item.photo.url} text={item.text} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};
