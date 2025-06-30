import { Button } from "@/components/ui/button/button";
import React from "react";
import style from "./popularToursGroupItem.module.scss";
import Link from "next/link";

interface Props {
  title: string;
  img: string;
}

export const PopularToursGroupItem: React.FC<Props> = ({
  title,
  img,
}) => {
  return (
      <div className={style.item} style={{ backgroundImage: `url(${img})` }}>
        <Link href={`#`}>
          <h3 className={style.title}>{title}</h3>
        </Link> 
        <Button classname={style.button}>
          Смотреть туры
        </Button>
      </div>
  );
};
