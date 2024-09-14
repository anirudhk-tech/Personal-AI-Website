/*
Navigation card that's visible in the drawer
Props: title (The content that is shown on the card), blurb (Short description about page), link (Where the card will lead when clicked)
Date Last Edited: 9 September 2024
Author: Anirudh Kuppili
*/

import Link from 'next/link';
import { Typography, Card } from '@mui/material';
import { useState } from 'react';

export const NavCard = ({ title, blurb, link }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Link 
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            flexGrow: hovered ? 10 : 1, // Grow card size when hovered
            transition: '0.5s',
        }}
        >
            <Card
            sx={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                bgcolor: 'background',
                flexDirection: 'column',
                paddingLeft: '2%',
                paddingRight: '2%',
            }}
            >
                <Typography
                sx={{
                    fontFamily: 'Oswald',
                    fontSize: '100%',
                    color: 'text.primary',
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}
                >{title}</Typography>
                <Typography
                sx={{
                    fontFamily: 'PT Sans',
                    color: 'text.secondary',
                    textAlign: 'center',
                    maxHeight: hovered ? '100px' : '0px', // Make sub-text appear and disappear when hovered
                    opacity: hovered ? 1.0 : 0.0,
                    transition: '1.0s',
                    fontSize: '100%',
                }}
                >{blurb}</Typography>
            </Card>
        </Link>
    );
};