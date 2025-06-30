import style from './button.module.scss';
import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    buttonDescriptionStyle?: string;
    classname?: string
}

export const Button: React.FC<Props> = ({ children, classname }) => {
  return (
    <Link href={"#"} className={cn(style.button, classname)}>
        {children}
    </Link>
  );
};