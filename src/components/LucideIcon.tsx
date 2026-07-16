import React from 'react';
import * as Icons from 'lucide-react';

interface LucideIconProps extends React.ComponentProps<'svg'> {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 20, ...props }: LucideIconProps) {
  // Map strings to Lucide components safely
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a default icon if not found
    return <Icons.HelpCircle className={className} size={size} {...props} />;
  }
  
  return <IconComponent className={className} size={size} {...props} />;
}
