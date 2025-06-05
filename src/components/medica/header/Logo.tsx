import React from 'react';

// Define props interface for the Logo component
interface LogoProps {
  logoImg: string;
  logoAtl: string;
}

const Logo: React.FC<LogoProps> = ({ logoImg, logoAtl }) => {
  return (
    <div className="flex items-center">
      <a
        href="/"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 py-5"
        aria-label={logoAtl || 'Go to homepage'}
      >
        <img src={logoImg} alt={logoAtl} className="h-8 mr-4" />
      </a>
    </div>
  );
};

export default Logo;