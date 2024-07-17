import Image from 'next/image';
import Link from 'next/link';
import { cinzel } from '../font/fonts';

export default function TopNav() {
    return (
        <main>
            <div className="flex justify-center items-center">
                <Image
                    src="/photography.png"
                    width={350}
                    height={350}
                    alt="Logo of Kjane Moua Photography"
                />
            </div>

            <div className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-550 to-transparent opacity-50 dark:via-neutral-950"></div>
            <div className="flex justify-evenly pt-4 md:pt-6 md:px-40 lg:pt-8 lg:px-80">
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
