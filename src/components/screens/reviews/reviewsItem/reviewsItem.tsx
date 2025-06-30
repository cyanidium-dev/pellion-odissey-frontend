import React from 'react';
import style from './reviewsItem.module.scss';
import Image from 'next/image';

interface Props {
    img?: string;
    text: string;
    
}

export const ReviewsItem: React.FC<Props> = ({img, text }) => {
  return (
    <div className={style.wrapper}>
        <Image src={`${img}`} width={180} height={180} alt= "reviews image" className={style.img}/>
        <p className={style.text}>{text}</p>
    </div>
  );
};