import Image from 'next/image';
import TopNav from './components/topnav/index';
import ImageSlider from './components/imageslider';
import Logo from './components/logo';
import Footer from './components/footer';

export default function Home() {
    return (
        <main>
            <div className="relative flex flex-col items-center">
                <div className="">
                    <Logo />
                </div>
                <div className="absolute z-20 flex justify-center pt-20">
                    <TopNav />
                </div>
                <div className="relative w-full h-screen">
                    <Image
                        src="/HomePhoto.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="Girl at the yellow mustard fields"
                        className="opacity-80"
                    />
                </div>
            </div>
            <div className="w-full h-px bg-black"></div>
            <div className="flex justify-center">
                <ImageSlider />
            </div>
            <div>
                <Footer />
            </div>
        </main>
    );
}
