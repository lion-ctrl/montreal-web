import React from 'react';

export const ClockIcon = (props: { fill?: string }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 7v5h3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke={props.fill ?? '#000'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
