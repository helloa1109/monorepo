'use client';

import Image from 'next/image';

interface Sponsor {
  name: string;
  logo?: string;
}

const sponsors: Sponsor[] = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  ];

export function SponsorBanner() {
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black-400 mb-4">
          함께하는 파트너
        </h2>
        <p className="text-center text-gray-400 text-lg">
          PLODE와 함께 성장하는 기업들입니다
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* 롤링 컨테이너 */}
        <div className="flex animate-scroll">
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: '200px', height: '100px' }}
            >
              {sponsor.logo ? (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={150}
                  height={80}
                  className="max-w-full max-h-full object-contain transition-opacity duration-300  "
                  unoptimized
                />
              ) : (
                <div className="text-2xl font-bold text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                  {sponsor.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}