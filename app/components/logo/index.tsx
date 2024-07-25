import Image from 'next/image';
export default function Logo() {
    return (
        <main>
            <div className="flex justify-end px-4 hidden sm:block pb-2 ">
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
