
import React from 'react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLightbox = ({ src, alt, className = "" }: ImageLightboxProps) => {
  // Simply render the image without any lightbox functionality
  // This component now just renders a standard image with no click events
  return <img src={src} alt={alt} className={className} />;
};
