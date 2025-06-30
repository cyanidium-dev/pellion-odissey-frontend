import React from 'react';
import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const SectionTitle: React.FC<Props> = ({ children, className }) => {
  return (
    <h2 className={`${styles.sectionTitle} ${className}`}>{children}</h2>
  );
};