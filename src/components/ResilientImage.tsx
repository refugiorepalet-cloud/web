import { useState } from 'react';
import { Mountain } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[16/9]',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAE6DC] to-[#D9D4C7] text-[#3E4C40] p-6 text-center ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <Mountain className="w-8 h-8 mb-2 opacity-60" strokeWidth={1.5} />
        <p className="text-sm font-medium max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`block w-full object-cover ${className}`}
    />
  );
}
