import React from 'react';
import style from "./popularToursItem.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button/button';

interface Props {
    img: string;
    hashtags: string;
    title: string;
    date: string;
    details: string;
    price: string;
}

export const PopularToursItem: React.FC<Props> = ({ img, hashtags, title, date, details, price }) => {
  return (
    <div className={style.item}>
        <Link href={`#`}>
            <Image src={`${img}`} width={360} height={240} alt= "tour image" className={style.img}/>
            <div className={style.hashtags}>{hashtags}</div>
            <h3 className={style.title}>{title}</h3>
            <div className={style.date}><b>{date}</b></div>
            <div className={style.details}>{details}</div>
            <div className={style.price}>{price}</div>
        </Link>
        <Button classname={style.button}>Подробнее</Button>
    </div>
  );
};