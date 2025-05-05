
import React from 'react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLightbox = ({ src, alt, className = "" }: ImageLightboxProps) => {
  // Simply render the image without any lightbox functionality
  return <img src={src} alt={alt} className={className} />;
};
