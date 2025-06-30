"use client";

import React from 'react';
import style from './howToJoin.module.scss';


export const HowToJoin: React.FC = () => {
    
  return (
    <iframe className={style.video} width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=iqxV69oz12HqmD79" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  );
};