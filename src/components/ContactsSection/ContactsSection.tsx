import React from 'react';

import { ReactComponent as Github_SVG } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn_SVG } from '../../assets/icons/linkedin.svg';
import { ReactComponent as MapPin_SVG } from '../../assets/icons/map-pin.svg';
import { ReactComponent as Phone_SVG } from '../../assets/icons/phone.svg';

function ContactsSection() {
  const anchorStyles =
    'flex items-center gap-4 rounded-xl text-center transition-colors duration-75 hover:text-color-secondary';

  return (
    <section className="align-start flex h-full w-full flex-col items-start justify-center gap-5 text-center ">
      <div className={anchorStyles} aria-label="Aidas Buivydas' location">
        <MapPin_SVG aria-hidden="true" className="h-6 w-6" />
        Vilnius, Lithuania
      </div>
      <a
        className={anchorStyles}
        href="https://github.com/aidasbui"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Aidas Buivydas' GitHub profile"
      >
        <Github_SVG aria-hidden="true" className="h-6 w-6" />
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
          className="relative left-[2px] bottom-[2px] h-5 w-5"
        />
        in/aidas-buivydas
      </a>
      <a
        className={`${anchorStyles} md:cursor-default`}
        href="tel:+37062421668"
        aria-label="Aidas Buivydas' phone number"
      >
        <Phone_SVG aria-hidden="true" className="h-6 w-6" />
        +37062421668
      </a>
    </section>
  );
}

export default ContactsSection;
