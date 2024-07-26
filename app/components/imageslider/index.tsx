'use client';
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageSlider() {
    const [slidesPerView, setSlidesPerView] = useState(
        window.innerWidth <= 768 ? 3 : 4
    );

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(window.innerWidth <= 768 ? 3 : 4);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: slidesPerView,
        },
    });
    return (
        <div ref={ref} className="keen-slider">
            {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="keen-slider__slide">
                    <Image
                        src={`/images/image${index + 1}.jpg`}
                        alt={`Slide ${index + 1}`}
                        width={700}
                        height={300}
                    />
                </div>
            ))}
        </div>
    );
}
