"use client";
import React from 'react';
import Image from 'next/image';
import style from './join.module.scss';
import cn from 'classnames';


export const Join: React.FC = () => {
  return (
    <section className={style.join}>
        <h2 className={style.join__title} data-aos="fade-right"><span className={style.join__titleBlue}>Как присоединиться</span> к <br /> нашему туру?</h2>
        <Image src={"/images/other/flag.png"} alt={"flag"} className={style.flag} width={300} height={500}/>
        <div className={style.items} >
                <div className={cn(style.join__item, style.join__item_yellow)} data-aos="zoom-in">
                    <div className={style.join__item__number}><p>1</p></div>
                    <p className={style.join__item__descr}>Оставляете заявку на этом сайте <br />
                        или в наших соцсетях</p>
                </div>
                <div className={style.join__item} data-aos="zoom-in">
                    <div className={style.join__item__number}><p>2</p></div>
                    <p className={style.join__item__descr}>Мы свяжемся с вами через мессенджер или по телефону, подробно расскажем о программе и ответим на все ваши вопросы <br /></p>
                </div>
                <div className={cn(style.join__item, style.join__item_yellow)} data-aos="zoom-in">
                    <div className={style.join__item__number}><p>3</p></div>
                    <p className={style.join__item__descr}>Заключаем договор и принимаем <br /> предоплату. Оставшуюся сумму вы <br /> оплачиваете на месте в первый день тура</p>
                </div>
                <div className={style.join__item} data-aos="zoom-in">
                    <div className={style.join__item__number}><p>4</p></div>
                    <p className={style.join__item__descr}>Мы помогаем вам выбрать <br /> авиабилеты, подбирая наиболее <br /> удобные и выгодные маршруты.</p>
                </div>
                <div className={cn(style.join__item, style.join__item_yellow)} data-aos="zoom-in">
                    <div className={style.join__item__number}><p>5</p></div>
                    <p className={style.join__item__descr}>Добавляем вас в чат группы, где <br /> делимся полезными советами перед поездкой и знакомимся друг с другом</p>
                </div>
                <div className={style.join__item} data-aos="zoom-in">
                    <div className={style.join__item__number}><p>6</p></div>
                    <p className={style.join__item__descr}>Встречаем вас в аэропорту и <br /> отправляемся в <br /> увлекательное путешествие!</p>
                </div>
        </div>
    </section>
  );
};