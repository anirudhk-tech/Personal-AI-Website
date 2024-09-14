/*
Information card that expands upon hover. Located in the about screen.
Props: title (Main point of the info card, heading), desc (Description to elaborate on the title)
Date Last Edited: 11 September 2024
Author: Anirudh Kuppili
*/

import { Card, Box, Typography } from "@mui/material";
import { useState } from "react";

export const InfoCard = ({ title, desc }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    /*
    Function to abbreviate title when something else is hovered over. Not enough space for entire word.
    Input: None
    Output: abb (Abbreviated title)
    */
    const abbriv = () => {
        let abb = "";
        title.map(title => {
            abb += title[0]
        });

        return abb;
    };

    return (
        <Card
        variant="outlined"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => e.preventDefault()}
        sx={{
            flexGrow: hovered ? 10 : 0,
            flex: hovered ? 4 : 0.5,
            transition: '1s',
            height: '100%',
            borderColor: 'primary.main',
            borderWidth: 2,
            display: 'flex',
            flexDirection: 'row',
            bgcolor: hovered ? 'background' : 'primary.main',
            alignItems: 'center',
        }}
        >
            <Box
            sx={{
                flex: 1,
                height: '100%',
                bgcolor: 'primary.main', // Change background color from red to white and white to red
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
            >
                { !hovered ? 
                    title.map(t => ( // Each string gets a new line if not hovered
                        <Typography 
                        key={t}
                        sx={{
                            fontFamily: 'Oswald',
                            fontSize: {xs: '2.5vw', sm: '1.5vw', md: '1.3vw'},
                            fontWeight: 'bold',
                            color: 'text.secondary',
                            whiteSpace: 'nowrap'
                        }}>{t}</Typography>
                    ))
                    :
                    <Typography sx={{
                        fontFamily: 'Oswald',
                        fontSize: '2vw',
                        fontWeight: 'bold',
                        color: 'text.secondary',
                    }}>{abbriv()}</Typography> 

                }
            </Box>
            <Box
            sx={{
                borderColor: 'primary.main',
                borderLeftWidth: hovered ? 2 : 0,
                flex: hovered ? 9 : 0,
                height: '100%',
                opacity: hovered ? 1.0 : 0,
                transition: 'opacity 0.1s, flex 3s', // Opacity is lower than flex because the line must appear when animation begins
                padding: hovered ? '5px' : '0px',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: hovered ? '1000px' : '0px',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
            }}
            >
                <Typography
                sx={{
                    fontFamily: 'Oswald',
                    fontSize: {xs: '4vw', sm: '2vw'},
                    fontWeight: 'bold',
                    color: 'text.secondary',
                    opacity: hovered ? 1.0 : 0,
                    transition: '1s',
                    display: 'flex',
                    maxWidth: hovered ? '1000px' : '0px',
                }}
                >{title.join(" + ")}</Typography> {/* Combining multiple skill lists into one string with + */}
                <Box
                sx={{
                    height: '100%',
                    maxWidth: hovered ? '1000px' : '0px',
                    opacity: hovered ? 1.0 : 0.0,
                    transition: 'max-width 2s, opacity 2s, font-size 0.5s', // Slightly longer transition and some delay so title appears first
                    transitionDelay: hovered ? '0.2s' : '0s',
                    overflow: 'visibile',
                }}
                >{desc.map(line => (
                    <Typography
                    sx={{
                        fontFamily: 'PT Sans',
                        fontSize: {xs: '3vw', sm: '1vw'},
                        color: 'text.secondary',
                        marginBottom: {xs: '5%', sm: '1%'},
                    }}
                    >
                        {line}
                    </Typography>
                ))}</Box>
            </Box>
        </Card>
    );
};