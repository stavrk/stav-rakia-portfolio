
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useIsMobile } from '@/hooks/use-mobile';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLightbox = ({ src, alt, className = "" }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // For desktop devices, just render the image normally without lightbox functionality
  if (!isMobile) {
    return <img src={src} alt={alt} className={className} />;
  }
  
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <img 
          src={src} 
          alt={alt} 
          className={`${className} cursor-pointer`} 
        />
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[95vw] p-2 bg-black/95 border-none">
        <div className="relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 p-2 bg-black/50 rounded-full text-white z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[90vh] object-contain" 
          />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
