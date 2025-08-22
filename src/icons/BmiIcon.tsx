import React from 'react';

interface BmiIconProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
}

const BmiIcon = ({ alt, ...props }: BmiIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    role="img"
    aria-label={alt}
  >
    <path d="M12 2a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" />
    <path d="M20.5 22a8.5 8.5 0 0 0-17 0" />
  </svg>
);

export default BmiIcon;
