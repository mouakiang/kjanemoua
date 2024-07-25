'use client';
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

export default function ImageSlider() {
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 4,
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
