"use client";
import Link from "next/link";
import style from "./popularToursList.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { TitleAndText } from "@/components/shared/titleAndText/titleAndText";
import Image from 'next/image';
import { LittleCard, LittleCardStyles } from '@/components/shared/LittleCard';

const data = [
  {
    img: "https://optim.tildacdn.com/stor3962-6137-4430-a134-323039383331/-/resize/432x/-/format/webp/87684469.jpg",
    hashtags: "сша - калифорния - экскурсии - природа - джипы - 2025",
    title: "США: национальные парки Калифорнии",
    date: "25 октября - 3 ноября 2025",
    details: "10 дней - группа до 12 человек",
    price: "4 000$",
  },
  {
    img: "https://optim.tildacdn.com/stor3736-3962-4562-b235-353532623161/-/resize/432x/-/format/webp/50641660.png",
    hashtags: "перу - боливия - чили - экскурсии - хайкинг - 2025",
    title: "ПЕРУ-БОЛИВИЯ-ЧИЛИ: большое путешествие ",
    date: "18 - 31 октября  2025 (предзапись)",
    details: "14 дней - группа до 13 человек",
    price: "4 950$",
  },
  {
    img: "https://optim.tildacdn.com/stor3637-6638-4130-b131-313233633930/-/resize/432x/-/format/webp/91421140.jpg",
    hashtags: "перу - боливия - чили - экскурсии - хайкинг - 2025",
    title: "ПЕРУ-БОЛИВИЯ-ЧИЛИ: большое путешествие ",
    date: "8 - 21 ноября 2025",
    details: "14 дней - группа до 13 человек",
    price: "4 950$",
  },
];

export const PopularToursList: React.FC = () => {
  return (
    <section className={style.popularToursList} >
      <TitleAndText
        title="Самые популярные авторские туры"
        text="Присоединяйся"
        titleClassName={style.title}
        textClassName={style.text}
        className={style.titleAndText}
      />
      
      <Image src={"/images/other/grape.png"} alt={"flag"} className={style.grape} width={300} height={400}/>

      {data.length > 3 ? (
       
          <Splide
            className={style.slider}
            options={{
              perPage: 3,
              interval: 3000, 
              speed: 1000, 
              pauseOnHover: false,
              pauseOnFocus: false,
              breakpoints: {
                1290: {
                  perPage: 1,
                  drag: true,
                },
                500: {
                  arrows: false,
                }
              },
              type: "loop",
              gap: "30px",
              drag: false,
            }}
          >
            {data.map((item, index) => (
              <SplideSlide key={index}>
                <LittleCard item={item} />
              </SplideSlide>
            ))}
          </Splide>
        
      ) : (
        <div className={style.items}>
          {data.map((item, index) => (
            <LittleCard key={index} item={item} />
          ))}
        </div>
      )}
      <Link href={"/tours"} className={`${LittleCardStyles.detailsButton} ${style.button}`}>Смотреть все</Link>
    </section>
  );
};
