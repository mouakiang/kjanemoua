import Image from 'next/image';
import Link from 'next/link';
import { cinzel } from '../font/fonts';
import HoverableLink from '../hoverablelink';

export default function TopNav({ onClick }: any) {
    return (
        <main className="text-white">
            <div className="flex justify-end px-4 hidden sm:block">
                <Image
                    src="/photography.png"
                    width={350}
                    height={350}
                    alt="Logo of Kjane Moua Photography"
                    className="hidden md:block"
                />
            </div>
            <div className="flex justify-center pt-14 md:pt-6 lg:pt-8">
                <button
                    onClick={onClick}
                    className="flex space-x-12 md:space-x-32 lg:space-x-48"
                >
                    <HoverableLink
                        href="/about"
                        className={`${cinzel.className}`}
                    >
                        About
                    </HoverableLink>
                    <HoverableLink
                        href="/gallery"
                        className={`${cinzel.className}`}
                    >
                        Gallery
                    </HoverableLink>
                    <HoverableLink
                        href="/contact"
                        className={`${cinzel.className}`}
                    >
                        Contact
                    </HoverableLink>
                </button>
            </div>
        </main>
    );
}
