/*
Card that displays project details on time on the journey page
Props: label (Label that is visible on the card when it's not hovered upon), desc (Description of project), skills (Summary of what skills were used in the project)
Date Last Edited: 12 September 2024
Author: Anirudh Kuppili
*/

import { useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import { SkillTag } from "./skillTag.jsx";

export const ProjectCard = ({ label, desc, skills }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <Box
        sx={{
            height: '100%',
            borderColor: 'primary.main',
            display: 'flex',
            flex: hovered ? 5 : 1,
            flexDirection: 'column',
            transition: '1s',
        }}
        >
            <Box
            sx={{
                flexGrow: hovered ? 0 : 1, // Two boxes on each end for white space, shrink when hovered
                width: '100%',
                display: 'flex',
                transition: '1s',
            }}
            ></Box>
            <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                width: '100%',
                bgcolor: 'background ! important',
                borderColor: 'primary.main',
                borderWidth: 2,
                flexGrow: hovered ? 3 : 1,
                display: 'flex',
                transition: '1s',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
            >
                <Typography
                sx={{
                    fontFamily: 'Oswald',
                    fontSize: {xs: '2.6vw', sm: '2vw'},
                    color: 'primary.main',
                    flex: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    transition: '1.0s',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                >
                    {label}
                </Typography>
                <Box
                sx={{
                    width: '100%',
                    flex: hovered ? 1 : 0,
                    display: 'flex',
                    bgcolor: 'primary.main',
                    transition: '1.0s',
                    flexDirection: 'column',
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                }}
                >

                    <Typography
                    sx={{
                        fontFamily: 'Oswald',
                        fontSize: { xs: '3vw', sm: '2vw' },
                        color: 'text.secondary',
                        paddingLeft: '2%',
                        maxHeight: hovered ? '1000px' : '0px',
                        opacity: hovered ? 1.0 : 0.0,
                        transition: hovered ? 'opacity 2.0s, max-height 5.0s' : '0.5s',
                    }}
                    >About</Typography> 
                    {
                        desc.map(line => (
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
                        ))
                    
                    }
                    <Box // Spacer between Skills and About
                    sx={{
                        height: '10%',
                        width: '100%',
                    }}
                    ></Box>
                    <Typography
                    sx={{
                        fontFamily: 'Oswald',
                        fontSize: { xs: '3vw', sm: '2vw' },
                        color: 'text.secondary',
                        paddingLeft: '2%',
                        maxHeight: hovered ? '1000px' : '0px',
                        opacity: hovered ? 1.0 : 0.0,
                        transition: hovered ? '2.0s' : '0.5s',
                    }}
                    >Skills</Typography>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        maxHeight: hovered ? '1000px' : '0px',
                        maxWidth: hovered ? '100%' : '0px',
                        opacity: hovered ? 1.0 : 0.0,
                        transition: hovered ? '2s' : '0.5s',
                        transitionDelay: hovered ? '0.5s' : '0s',
                        gap: '2%',
                        paddingRight: '2%',
                        paddingLeft: '2%',
                        paddingBottom: '2%',
                        flexWrap: 'wrap',
                        rowGap: '1vh',
                    }}
                    >
                        {
                            skills.map(skill => (
                                <SkillTag key={skill} tag={skill}/>
                            ))
                        }
                    </Box>
                </Box>
            </Card>
            <Box
            sx={{
                flexGrow: hovered ? 0 : 1,
                width: '100%',
                display: 'flex',
                transition: '1s',
            }}
            ></Box>
        </Box>
    );
};