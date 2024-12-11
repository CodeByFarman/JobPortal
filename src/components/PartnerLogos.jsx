import React from 'react';

const PartnerLogos = () => {
  return (
    <div className="section-box">
      <div className="container">
        <ul className="list-partners">
          {[
            { src: 'assets/imgs/jobs/logos/samsung.svg', alt: 'Samsung', delay: '0s' },
            { src: 'assets/imgs/jobs/logos/google.svg', alt: 'Google', delay: '.1s' },
            { src: 'assets/imgs/jobs/logos/facebook.svg', alt: 'Facebook', delay: '.2s' },
            { src: 'assets/imgs/jobs/logos/pinterest.svg', alt: 'Pinterest', delay: '.3s' },
            { src: 'assets/imgs/jobs/logos/avaya.svg', alt: 'Avaya', delay: '.4s' },
            { src: 'assets/imgs/jobs/logos/forbes.svg', alt: 'Forbes', delay: '.5s' },
            { src: 'assets/imgs/jobs/logos/avis.svg', alt: 'Avis', delay: '.1s' },
            { src: 'assets/imgs/jobs/logos/nielsen.svg', alt: 'Nielsen', delay: '.2s' },
            { src: 'assets/imgs/jobs/logos/doordash.svg', alt: 'Doordash', delay: '.3s' },
          ].map((logo, index) => (
            <li
              key={index}
              className="wow animate__animated animate__fadeInUp hover-up"
              data-wow-delay={logo.delay}
            >
              <a href="#">
                <figure>
                  <img alt={logo.alt} src={logo.src} />
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PartnerLogos;
