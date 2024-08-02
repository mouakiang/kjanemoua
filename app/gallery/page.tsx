import * as React from 'react';
import Image from 'next/image';
import images from '../components/imageData/images.json';
import { Box } from '@mui/material';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import Logo from '../components/logo';
import Footer from '../components/footer';

export default function Gallery() {
    return (
        <main>
            <div>
                <Logo />
            </div>
            <Box sx={{ width: 1903, height: 500 }}>
                <ImageList variant="masonry" cols={2} gap={8}>
                    {images.map((image) => (
                        <ImageListItem key={image.img}>
                            <Image
                                src={image.img}
                                alt={image.title}
                                width={1500}
                                height={1500}
                                layout="responsive"
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </main>
    );
}
