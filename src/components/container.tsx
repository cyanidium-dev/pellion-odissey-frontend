import React from 'react';

interface Props {
    className?: string;
  }

export const Container: React.FC<React.PropsWithChildren<Props>> = ({children, className}) => {
  return (
    <div className={className} style={{margin: '0 auto',
        padding: '0 15px',
        maxWidth: '1166px',
        
      }}>{children}</div>
  );
};