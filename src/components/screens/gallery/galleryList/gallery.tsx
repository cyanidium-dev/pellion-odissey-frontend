"use client";

import { TitleAndText } from "@/components/shared/titleAndText/titleAndText";
import style from "./gallery.module.scss";
import React, { useEffect, useState } from "react";
import { GalleryItem } from "../galleryItem/galleryItem";
import { Container } from "@/components/container";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allReportsQuery } from "@/lib/queries";
import { Report } from "@/types/report";
import Loader from "@/components/shared/Loader";

// const data = [
//   {
//     img: "https://optim.tildacdn.com/tild3461-3033-4235-b164-306136353266/-/resize/500x400/-/format/webp/IMG_2371-Edit_copy.jpg",
//     title: "Бразилия",
//     text: "Игуасу, Рио и Пантанал",
//   },
//   {
//     img: "https://optim.tildacdn.com/tild3662-3762-4663-b739-353937306634/-/resize/500x400/-/format/webp/IMG_5277-1680px.jpg",
//     title: "Патагония",
//     text: "Перито Морено, Фиц Рой и Торрес дель Пайне",
//   },
//   {
//     img: "https://optim.tildacdn.com/tild6238-3263-4337-b263-356662303862/-/resize/500x400/-/format/webp/IMG_2602.jpg",
//     title: "Альтиплано",
//     text: "Боливия, Чили и север Аргентины",
//   },
//   {
//     img: "https://optim.tildacdn.com/tild3964-6662-4233-b865-303836313135/-/resize/500x400/-/format/webp/DSC_1876.JPG",
//     title: "Перу",
//     text: "Анды, Мачу Пикчу, Наска, Титикака и Куско",
//   },
//   {
//     img: "https://optim.tildacdn.com/tild6435-6565-4237-a466-353433653238/-/resize/500x400/-/format/webp/rio2.jpg",
//     title: "Бразилия",
//     text: "Свадебное путешествие на заказ",
//   },
//   {
//     img: "https://optim.tildacdn.com/tild6266-3335-4066-b664-616636353961/-/resize/500x400/-/format/webp/trip-nepal2-600.jpg",
//     title: "Бутан",
//     text: "Королевство Счастья и его секреты",
//   },
//   {
//     img: "https://optim.tildacdn.com/tild6637-6339-4233-b361-613962363734/-/resize/500x400/-/format/webp/trip-patagonia2-600.jpg",
//     title: "Патагония",
//     text: "Путешествие на джипах и хайкинг",
//   },
//   {
//     img: "https://optim.tildacdn.com/tild6231-6531-4334-b366-343962356531/-/resize/500x400/-/format/webp/trip-australia2-600.jpg",
//     title: "Австралия",
//     text: "Самые топовые локации на машине",
//   },
// ];

export const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState<Report[] | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(data);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const reports = await fetchSanityData(allReportsQuery);
        setData(reports);
      } catch (error) {
        console.error("Failed to fetch reports:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) return <Loader />;

  if (!data) return null;

  return (
    <section>
      <Container>
        <TitleAndText
          title="Взгляните на мир нашими глазами"
          text="Фотографии сделанные во время поездок"
          className={style.titleAndText}
          titleClassName={style.title}
          textClassName={style.text}
        />
      </Container>
      <div className={style.wrapper}>
        {data?.slice(0, isMobile ? 4 : data.length).map((item, index) => (
          <GalleryItem
            key={index}
            img={item.gallery[0].url}
            title={item.country}
            text={item.locations}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
};
