'use client';
import { quattrocento } from '../font/fonts';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer className="bg-white text-black py-4">
            <div className="container mx-auto flex items-center h-10 px-0 mr-12">
                <h1 className={`${quattrocento.className} mx-auto`}>
                    ©KJaneMoua Photography 2024
                </h1>
                <div className="flex space-x-2 ml-auto">
                    <SocialIcon
                        url="https://www.facebook.com/kjanemouaphotography"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.instagram.com/kjanemouaphotography"
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
            <style jsx>{`
                .social-icon {
                    width: 35px;
                    height: 35px;
                }

                @media (max-width: 768px) {
                    .social-icon {
                        width: 28px;
                        height: 28px;
                    }
                }

                @media (max-width: 480px) {
                    .social-icon {
                        width: 24px;
                        height: 24px;
                    }
                }
            `}</style>
        </footer>
    );
}
