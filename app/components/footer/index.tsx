'use client';
import { quattrocento } from '../font/fonts';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="bg-white text-black md:py-4">
            <div className="container mx-auto flex items-center h-10 px-0 mr-12">
                <h1
                    className={`${quattrocento.className} mx-auto text-xs sm:text-sm md:text-lg`}
                >
                    ©KJaneMoua Photography 2024
                </h1>
                <div className="flex space-x-2 ml-auto">
                    <SocialIcon
                        url="https://www.facebook.com/kjanemouaphotography"
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ height: 28, width: 28 }}
                    />
                    <SocialIcon
                        url="https://www.instagram.com/kjanemouaphotography"
                        className=""
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ height: 28, width: 28 }}
                    />
                </div>
            </div>
        </footer>
    );
}
