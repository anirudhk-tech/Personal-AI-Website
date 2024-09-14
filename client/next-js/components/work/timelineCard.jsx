/*
Cards that are seen on the work page. Each one represents a time period.
Props: label (Summary that is shown on the card when it is not hovered on), milestone (Most important aspect of the time period, display alongside label), desc (Description for the timeline card, that can be seen when hovered)
Date Last Edited: 12 September 2024
Author: Anirudh Kuppili
*/

import { useState } from "react";
import { Card, Box, Typography } from "@mui/material";

export const TimelineCard = ({ label, milestone, desc }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
            height: '100%',
            borderColor: 'primary.main',
            borderWidth: 2,
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            flexGrow: hovered ? 3 : 1,
            transition: '1s',
            transitionDelay: '0.1s',
        }}
        >
            <Box
            sx={{
                bgcolor: 'primary.main',
                height: '100%',
                flexGrow: hovered ? 0 : 1, // Moves to the side when hovered
                transition: '1s',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
            }}
            >
                <Typography
                sx={{
                    fontFamily: 'Oswald',
                    fontSize: {xs: '3vw', sm: '2vw'},
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    maxWidth: hovered ? '0px' : '1000px',
                    opacity: hovered ? 0.0 : 1.0,
                    transition: hovered ? 'max-width 0.1s' : 'opacity 2.0s, max-width 2.0s', // Shorter time on open avoids jerky movement
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                >{label}</Typography>
                <Typography
                sx={{
                    fontFamily: 'PT Sans',
                    fontSize: {xs: '2vw', sm:'1.5vw'},
                    color: 'primary.contrastText',
                    textAlign: 'center',
                    maxWidth: hovered ? '0px' : '1000px',
                    opacity: hovered ? 0.0 : 1.0,
                    transition: hovered ? 'max-width 0.1s' : 'opacity 2.0s, max-width 2.0s',  
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                >
                    {milestone}
                </Typography>
            </Box>
            <Box
            sx={{
                bgcolor: 'primary.main',
                height: '48vh',
                flexGrow: hovered ? 1 : 0, // Moves to the side when hovered
                transition: '1s',
                display: 'flex',
                flexDirection: 'column',
                gap: '2%',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                paddingLeft: '3%',
                paddingRight: '3%',
            }}
            >
                {desc.map(line => ( // Seperating lines for better readability 
                    <Typography
                    key={line}
                    sx={{
                        fontFamily: 'PT Sans',
                        fontSize: {xs: '2.5vw', sm: '1.5vw'},
                        color: 'text.secondary',
                        maxWidth: hovered ? '1000px' : '0px',
                        opacity: hovered ? 1.0 : 0.0,
                        transition: hovered ? 'opacity 2.0s, max-width 1.0s' : 'max-width 0.1s',  
                        textAlign: 'left',
                        padding: '2%',
                    }}
                    >
                        {`- ${line}`}
                    </Typography> 
                ))}
            </Box>
        </Card>
    );
};