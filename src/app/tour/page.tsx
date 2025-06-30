'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './tour.module.scss';
import {tourData} from "./data"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sendMessage } from '@/api/telegram';
import { Hero } from './components/hero/hero';
import { Description } from './components/description/description';
import { Includes } from './components/includes/includes';
import { Shedule } from './components/shedule/shedule';
import { Gallery } from './components/gallery/gallery';
import { Founders } from './components/founders/founders';
import { Testimonials } from './components/testimonials/testimonials';
import { Faq } from './components/faq/faq';
import { Booking } from './components/booking/booking';
import { Dates } from './components/dates/dates';


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

const Tour: React.FC<tourProps> = ({ tourData }) => {
  

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <Hero />
      <div className={styles.content}>
        {/* Description Section */}
        <Description/>

        {/* What's Included Section */}
        <Includes/>

         {/* Schedule Section */}
        <Shedule/>

        {/* Gallery Section */}
        <Gallery/>

        {/* Founders Section */}
        <Founders/>
      </div>
       {/* Testimonials Section */}
      <Testimonials/>

       <div className={styles.content}>
        <Dates/>
        {/* FAQ Section */}
        <Faq/>
      </div>

      {/* Booking Section */}
      <Booking />
    </div>
  );
};

export default function Page() {
  return <Tour tourData={tourData} />;
}