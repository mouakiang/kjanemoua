import Image from 'next/image';

export default function Logo() {
    return (
        <main>
            <div className="fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-center h-16 pb-4">
                <Image
                    src="/photography.png"
                    width={350}
                    height={350}
                    alt="Logo of Kjane Moua Photography"
                    className="hidden md:block"
                />
            </div>
        </main>
    );
}
