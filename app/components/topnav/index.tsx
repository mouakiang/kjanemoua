import Image from 'next/image';
import { cinzel } from '../font/fonts';
import HoverableLink from '../hoverablelink';

export default function TopNav({ onClick }: any) {
    return (
        <main className="text-white">
            <div className="flex justify-center pt-14 md:pt-6 lg:pt-8">
                <button
                    onClick={onClick}
                    className="flex space-x-12 text-sm md:space-x-32 md:text-xl lg:space-x-48 lg:text-2xl"
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
