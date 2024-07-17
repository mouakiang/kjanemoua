import Image from 'next/image';
import TopNav from './components/topnav/index';

export default function Home() {
    return (
        <main>
            <div className="relative z-10">
                <TopNav />
            </div>

            <div className="absolute inset-0 z-0">
                <Image
                    src="/HomePhoto.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Girl at the yellow mustard fields"
                    className="opacity-80"
                />
            </div>
        </main>
    );
}
