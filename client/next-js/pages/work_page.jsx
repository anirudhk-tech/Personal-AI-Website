/*
Page that contains everything from the "Experience" section on the website
Date Last Edited: 13 Septemeber 2024
Author: Anirudh Kuppili
*/

import { Box, Typography } from "@mui/material";
import { TimelineCardOne, TimelineCardThree, TimelineCardTwo } from "assets/journey.js";
import { mainChatApplication, mainDiscordDesc, mainElectroBookDesc, mainFullStack, mainInternship, mainPhotoSorter, mainSmallProjects, mainWebsiteDesc } from "assets/projects.js";
import { DrawerComponent } from "components/common/drawer.jsx";
import { HeaderComponent } from "components/common/header.jsx";
import { ProjectCard } from "components/work/projectCard.jsx";
import { TimelineCard } from "components/work/timelineCard.jsx";
import { useEffect, useRef, useState } from "react";

export default function WorkPage () {
    const [hovered, setHovered] = useState(null);
    const [trigger, setTrigger] = useState(false);
    const timelineScrollBox = useRef(null);

    const handleMouseEnterFirstRow = () => {
        setHovered(1);
    };

    const handleMouseEnterSecondRow = () => {
        setHovered(2);
    };

    const handleMouseEnterThirdRow = () => {
        setHovered(3);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    useEffect(() => {
        setTimeout(() => { // Transitioning screen based on where the boxes are open. If third row box is currently focused, scroll will move down.
            timelineScrollBox.current.scrollTop = timelineScrollBox.current.scrollHeight;
        }, 700);
    }, [hovered]);

    useEffect(() => {
        setTimeout(() => {
            setTrigger(true);
        }, 500);
    }, []);

    return (
        <Box
        sx={{
            bgcolor: 'background',
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
        }}
        >
            <HeaderComponent/>
            <DrawerComponent/>
            <Box
            ref={timelineScrollBox}
            sx={{
                paddingTop: {xs: '10%', sm: '6%'},
                paddingBottom: '1%',
                width: '95%',
                height: '100%',
                gap: '5%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'scroll',
                scrollbarWidth: 'none',
                scrollBehavior: 'smooth',
                opacity: trigger ? 1.0 : 0.0, // Adds animation to starting
                transition: '2s',
            }}
            >
                <Typography
                sx={{
                    fontFamily: 'Oswald',
                    fontWeight: 'bold',
                    fontSize: {xs: '5vw', sm: '2.5vw'},
                    color: 'text.secondary',
                }}
                >Timeline</Typography>
                <Box
                onMouseEnter={handleMouseEnterFirstRow}
                onMouseLeave={handleMouseLeave}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: hovered === 1 ? '50vh' : hovered === null ? '20vh' : '10vh',
                    transition: '1s',
                    width: '90%',
                    gap: '5%',
                    alignSelf: 'center',
                }}>
                    <TimelineCard label={TimelineCardOne.label} milestone={TimelineCardOne.milestone} desc={TimelineCardOne.desc}/>
                    <ProjectCard label={mainSmallProjects.label} desc={mainSmallProjects.desc} skills={mainSmallProjects.skills}/>
                    <TimelineCard label={TimelineCardTwo.label} milestone={TimelineCardTwo.milestone} desc={TimelineCardTwo.desc}/>
                    <ProjectCard label={mainPhotoSorter.label} desc={mainPhotoSorter.desc} skills={mainPhotoSorter.skills}/>
                </Box>
                <Box
                onMouseEnter={handleMouseEnterSecondRow}
                onMouseLeave={handleMouseLeave}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: hovered === 2 ? '50vh' : hovered === null ? '20vh' : '10vh',
                    width: '90%',
                    transition: '1s',
                    gap: '5%',
                    alignSelf: 'center',
                }}>
                    <ProjectCard label={mainDiscordDesc.label} desc={mainDiscordDesc.desc} skills={mainDiscordDesc.skills}/>
                    <TimelineCard label={TimelineCardThree.label} milestone={TimelineCardThree.milestone} desc={TimelineCardThree.desc}/>
                    <ProjectCard label={mainInternship.label} desc={mainInternship.desc} skills={mainInternship.skills}/>
                    <ProjectCard label={mainElectroBookDesc.label} desc={mainElectroBookDesc.desc} skills={mainElectroBookDesc.skills}/>
                </Box>
                <Box
                onMouseEnter={handleMouseEnterThirdRow}
                onMouseLeave={handleMouseLeave}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    minHeight: hovered === 3 ? '50vh' : hovered === null ? '20vh' : '10vh',
                    width: '90%',
                    transition: '1s',
                    gap: '5%',
                    alignSelf: 'center',
                }}>
                    <ProjectCard label={mainChatApplication.label} desc={mainChatApplication.desc} skills={mainChatApplication.skills}/>
                    <ProjectCard label={mainFullStack.label} desc={mainFullStack.desc} skills={mainFullStack.skills}/>
                    <ProjectCard label={mainWebsiteDesc.label} desc={mainWebsiteDesc.desc} skills={mainWebsiteDesc.skills}/>
                </Box>
            </Box>
        </Box>
    )
}