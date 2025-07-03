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
import { TourData } from "@/types/tour";

interface tourProps {
  tourData: TourData;
}

export default function TourPage({ tourData }: tourProps) {
  useEffect(() => {
    AOS.init();
  }, []);

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
