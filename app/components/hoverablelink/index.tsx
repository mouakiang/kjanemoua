'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function HoverableLink({ href, className, children }: any) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{ scale: isHovered ? 1.05 : 1 }}
        >
            <Link href={href} className={className}>
                {children}
            </Link>
        </motion.div>
    );
}
