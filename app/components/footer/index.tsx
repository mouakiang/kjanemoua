import { quattrocento } from '../font/fonts';

export default function Footer() {
    return (
        <main>
            <div className="">
                <h1
                    className={`${quattrocento.className} flex justify-center items-center h-14`}
                >
                    ©KJaneMoua Photography 2024
                </h1>
            </div>
        </main>
    );
}
