"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./tour.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { sendMessage } from "@/api/telegram";
import { Hero } from "./hero/hero";
import { Description } from "./description/description";
import { Includes } from "./includes/includes";
import { Shedule } from "./shedule/shedule";
import { Gallery } from "./gallery/gallery";
import { Founders } from "./founders/founders";
import { Testimonials } from "./testimonials/testimonials";
import { Faq } from "./faq/faq";
import { Booking } from "./booking/booking";
import { Dates } from "./dates/dates";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { tourBySlugQuery } from "@/lib/queries";

interface TourData {
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  description: string;
  mainImage: string;
  price: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  includes: string[];
  schedule: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation?: string;
  }[];
  gallery?: string[];
  foundersImage: string;
  foundersNameLeft: string;
  foundersLeftInstagram: string;
  foundersNameRight: string;
  foundersRightInstagram: string;
  foundersAchievementsList: string[];
  reviews?: {
    name: string;
    text: string;
    instagram: string;
    avatar: string;
  }[];
  datesData: {
    month: string;
    dates: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

interface tourProps {
  tourData: TourData;
}

export default function TourPage({ tourData }) {
  useEffect(() => {
    AOS.init();
  }, []);

  console.log(tourData);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero tourData={tourData} />
      <div className={styles.content}>
        {/* Description Section */}
        <Description tourData={tourData} />

        {/* What's Included Section */}
        <Includes tourData={tourData} />

        {/* Schedule Section */}
        <Shedule tourData={tourData} />

        {/* Gallery Section */}
        <Gallery tourData={tourData} />

        {/* Founders Section */}
        <Founders />
      </div>
      {/* Testimonials Section */}
      <Testimonials tourData={tourData} />

      <div className={styles.content}>
        <Dates tourData={tourData} />
        {/* FAQ Section */}
        <Faq tourData={tourData} />
      </div>

      {/* Booking Section */}
      <Booking />
    </div>
  );
}
