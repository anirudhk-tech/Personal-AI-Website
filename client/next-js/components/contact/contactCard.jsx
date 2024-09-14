/*
Card that allows users to see contact information, located on the contact page.
Props: tag (The social media handle/contact method specified), icon (Icon to include in card - social media/mail icons), link (Link to social media), alert (Specifies what to show when link is copied to clipboard)
Date Last Edited: 11 September 2024
Author: Anirudh Kuppili
*/

import { useState } from "react";
import { Card, Box, Typography, useTheme } from "@mui/material";
import { FaLink } from "react-icons/fa";

export const ContactCard = ({ tag, icon, link, alert }) => {
    const [hovered, setHovered] = useState(false);
    const [copied, setCopied] = useState(false);
    const theme = useTheme();

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleLinkClick = () => {
        navigator.clipboard.writeText(link).then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        });
    };

    return (
        <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleLinkClick}
        sx={{
            height: '100%',
            borderColor: 'primary.main',
            borderWidth: 2,
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            cursor: 'pointer',
        }}
        >
            <Box
            sx={{
                flexGrow: hovered ? 0 : 1,
                transition: '1s',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
            >
                {hovered ?
                    <FaLink 
                    size={60}
                    style={{
                        color: theme.palette.background,
                        opacity: hovered ? 1.0 : 0.0,
                        transition: '5.0s',
                    }}/> : icon
                }
            </Box>
            <Box
            sx={{
                maxHeight: hovered ? '1000px' : '0px',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginTop: '50%',
            }}
            >
                <Typography sx={{
                    fontFamily: 'Oswald',
                    color: 'primary.main',
                    fontSize: {xs: '2vw', sm: '2vw'},
                    transition: '1s',
                    opacity: hovered ? 1.0 : 0.0,
                }}>{copied ? alert : tag}</Typography>
                <Box
                sx={{
                    opacity: hovered ? 1.0 : 0.0,
                    transition: '1.0s',
                }}
                >
                </Box>
            </Box>
        </Card>
    );
};