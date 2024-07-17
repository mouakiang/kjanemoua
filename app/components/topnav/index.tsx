import Image from 'next/image';
import Link from 'next/link';
import { cinzel } from '../font/fonts';

export default function TopNav() {
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
            <div className="flex justify-center space-x-12 pt-14 md:pt-6 md:space-x-32 lg:pt-8 lg:space-x-48">
                <Link href="/about" className={`${cinzel.className}`}>
                    About
                </Link>
                <Link href="/gallery" className={`${cinzel.className}`}>
                    Gallery
                </Link>
                <Link href="/contact" className={`${cinzel.className}`}>
                    Contact
                </Link>
            </div>
        </main>
    );
}
