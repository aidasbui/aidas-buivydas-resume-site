import { ReactComponent as AtSymbol_SVG } from 'assets/icons/at-symbol.svg';
import { ReactComponent as Github_SVG } from 'assets/icons/github.svg';
import { ReactComponent as LinkedIn_SVG } from 'assets/icons/linkedin.svg';
import { ReactComponent as MapPin_SVG } from 'assets/icons/map-pin.svg';
import React from 'react';

function ContactsSection() {
  const anchorStyles =
    'flex items-center gap-4 rounded-xl text-center transition-colors duration-75 hover:text-color-secondary';

  return (
    <section className="flex h-full w-full flex-col items-start justify-center gap-5 text-center lg:justify-around lg:gap-2 lg:text-sm">
      <div className={anchorStyles} aria-label="Aidas Buivydas' location">
        <MapPin_SVG aria-hidden="true" className="h-6 w-6 lg:h-5 lg:w-5" />
        Vilnius, Lithuania
      </div>
      <a
        className={anchorStyles}
        href="https://github.com/aidasbui"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Aidas Buivydas' GitHub profile"
      >
        <Github_SVG aria-hidden="true" className="h-6 w-6 lg:h-5 lg:w-5" />
        aidasbui
      </a>
      <a
        className={anchorStyles}
        href="https://www.linkedin.com/in/aidas-buivydas/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Aidas Buivydas' LinkedIn profile"
      >
        <LinkedIn_SVG
          aria-hidden="true"
          className="relative bottom-[2px] left-[2px] h-5 w-5 lg:h-4 lg:w-4"
        />
        in/aidas-buivydas
      </a>
      <a
        className={`${anchorStyles}`}
        href="mailto:aidasbuivydas@gmail.com"
        aria-label="Aidas Buivydas' email address"
      >
        <AtSymbol_SVG aria-hidden="true" className="h-6 w-6 lg:h-5 lg:w-5" />
        aidasbuivydas@gmail.com
      </a>
    </section>
  );
}

export default ContactsSection;
