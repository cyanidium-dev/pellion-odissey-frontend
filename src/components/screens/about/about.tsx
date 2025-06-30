"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import style from "./about.module.scss";

export const About: React.FC = () => {
  return (
    <section className={style.about}>
      <div className={style.wrapper}>
        <Image
          src={
            "https://optim.tildacdn.com/tild3737-3233-4237-b539-333963663962/-/resize/654x/-/format/webp/_3.png"
          }
          alt="About us image"
          width={600}
          height={720}
          className={style.img}
        />
        <div className={style.textWrapper}>
          <h3 className={style.title}>
            Мы просто делаем то, что любим больше всего.
          </h3>
          <p className={style.text}>
            Являясь организатором уже <strong> 11 лет</strong>, я с уверенностью
            могу сказать, что здесь вы найдете лучшие варианты маршрутов и
            насыщенные впечатлениями путешествия. А еще найдете
            <strong> потрясающее комьюнити</strong>, которое вдохновляет нас
            каждый день.
            <br /> <br />
            Мы выбираем высокий уровень комфорта и НЕ экономим на ваших
            впечатлениях, у нас нет скрытых доплат и мы закладываем максимум
            крутых мероприятий в бюджет.
            <br />
            <br />
            Среди ваших друзей,
            <strong> лучшее путешествие будет у вас!</strong>
          </p>
          <div className={style.author}>
            <p className={style.nameAuthor}>Анна Пшишилны</p>
            <p className={style.textAuthor}>
              
              <em>Руководитель проекта</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
