import React from "react";
import style from "./galleryItem.module.scss";
import cn from "classnames";
import Link from "next/link";

interface Props {
  img: string;
  title: string;
  text: string;
  className?: string;
  slug: string;
}

export const GalleryItem: React.FC<Props> = ({
  img,
  title,
  text,
  className,
  slug,
}) => {
  return (
    <Link href={`/reports/${slug}`}>
      <div
        className={cn(style.galleryItem, className)}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={style.textContainer}>
          <h4 className={style.title}>{title}</h4>
          <p className={style.text}>{text}</p>
        </div>
      </div>
    </Link>
  );
};
