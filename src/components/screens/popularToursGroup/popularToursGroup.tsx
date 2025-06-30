"use client";

import style from './popularToursGroup.module.scss';
import React, { useEffect } from 'react';
import { PopularToursGroupItem } from './popularToursGroupItem/popularToursGroupItem';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

const data = [{
  title: "знакомство с культурами",
  img : "https://optim.tildacdn.com/tild3866-6566-4561-b839-333939346562/-/resize/394x/-/format/webp/photo.png",
  
},
{
  title : "сквозь страну на джипах",
  img: "https://optim.tildacdn.com/tild3664-3134-4761-a533-353761633532/-/resize/439x/-/format/webp/photo.png",
},
{
  title: "дикая природа",
  img: "https://optim.tildacdn.com/tild6135-3431-4338-a265-383936323064/-/resize/396x/-/format/webp/photo.png",
  
},


]

export const PopularToursGroup: React.FC = () => {
  return (
    <section className={style.popularToursGroup} >
      {data.length > 3 ? (
        <Splide className={style.slider}
        options={{
          perPage:3,
          type: 'loop',
          gap:"30px",
          drag:false,
          
          breakpoints: {
            1270: {
              perPage: 1,
              drag: true,
              
            },
            500: {
              arrows: false,
              
            }
          }
        }}
        >
          {data.map((item, index) => (
            <SplideSlide key={index}>
              <PopularToursGroupItem
                title={item.title}
                img={item.img}
                
              />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className={style.items}>
          {data.map((item, index) => (
            <PopularToursGroupItem
              key={index}
              title={item.title}
              img={item.img}
              
            />
          ))}
        </div>
      )}
      <div className={style.wrapper}>
        <Link href={`#`}>
          <p className={style.text}>Смотреть все туры</p>
        </Link>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Link href={`#`}>
            <Image src={"/images/popularToursGroup/arrow.png"} alt="arrow" width={42} height={20} className={style.arrow}/>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};