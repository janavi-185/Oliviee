import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'white'; // Adding variant just in case
}

const Button = ({ children, icon, className = '', variant = 'primary', ...props }: ButtonProps) => {
  const baseStyles = "rounded-full cursor-pointer font-medium flex items-center justify-center gap-2 md:gap-3 transition-all duration-200 hover:opacity-90 active:scale-95";
  
  const variants = {
    primary: "bg-olive-primary text-white px-6 md:px-10 py-3 md:py-4",
    secondary: "bg-olive-secondary text-olive-primary px-6 md:px-10 py-3 md:py-4 border border-black/5",
    white: "bg-white text-[#386641] px-6 md:px-10 py-3 md:py-4 shadow-sm"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
      
    </button>
  );
};

export default Button;