import React from 'react';
import cn from 'classnames';
import style from "./titleAndText.module.scss";

interface Props {
    title: string;
    text:string;
    titleClassName?: string;
    textClassName?: string;
    className?: string;
}

export const TitleAndText: React.FC<Props> = ({ title, text, titleClassName, textClassName,className }) => {
  return (
    <div className={cn(style.titleAndText, className)}>
        <h3 className={cn(style.title, titleClassName)}>{title}</h3>
        <p className={cn(style.text, textClassName)}>{text}</p>
    </div>
  );
};