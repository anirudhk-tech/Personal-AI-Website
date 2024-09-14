/*
About page, where users see how to navigate the website and what's unique
Date Last Edited: 9 September 2024
Author: Anirudh Kuppili
*/

import { Box, styled, Typography } from "@mui/material"
import { aiDev, fullstackDev, neuroDev, techDev, vr_arDev } from "assets/industries.js";
import { experienceInfo, goalsInfo, gradeInfo, outsideInfo } from "assets/info.js";
import { discordDesc, ElectrobookDesc, photoSorter, websiteDesc } from "assets/projects.js";
import { BackendDesc, FlutterDesc, FrameworksDesc, JsDesc, PythonDesc } from "assets/skills.js";
import { InfoCard } from "components/about/infoCard.jsx";
import { DrawerComponent } from "components/common/drawer.jsx"
import { HeaderComponent } from "components/common/header.jsx"
import { useEffect, useState } from "react";

export default function AboutPage () {
    const [trigger, setTrigger] = useState(false);
    
    const Title = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.secondary,
        fontWeight: 'bold',
        fontFamily: 'Oswald',
        fontSize: {xs: '4vw', sm: '2vw'},
        fontWeight: 'bold',
    }));

    const ContrastTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
        fontWeight: 'bold',
        fontFamily: 'Oswald',
        fontSize: {xs: '5vw', sm: '2vw'},
        fontWeight: 'bold',
    }));

    const InfoBox = styled(Box)`
        display: flex;
        flexDirection: row;
        height: 150px;
        gap: 10px;
    `

    const Spacer = styled(Box)`
        height: 30px;
    `

    const AnimationEffect = (delay) => {
        return (
            {
                width: '90%',
                opacity: trigger === true ? 1.0 : 0.0,
                transition: '2.0s',
                transitionDelay: delay ? `${delay}s` : 0, // Optional delay
                fontSize: '1.5vw',
                overflow: 'hidden',
            }
        );
    };

    useEffect(() => {
        setTimeout(() => {
            setTrigger(true); // Animates starting screen
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
            flexDirection: 'row',
            overflow: 'scroll',
            scrollbarWidth: 'none',
        }}
        >
            <HeaderComponent/>
            <DrawerComponent/>
            <Box
            sx={{
                height: '100%',
                width: '95%',
                paddingTop: {xs: '8%', sm: '6%', md: '7%'},
                paddingLeft: {xs: '10%', sm: '0%'},
            }}
            >   
                <Box sx={() => AnimationEffect()}>
                    <Title>Hi.</Title>
                </Box>
                <Box sx={() => AnimationEffect(1)}>
                    <ContrastTitle>I'm Anirudh Kuppili.</ContrastTitle>
                </Box>
                <Box sx={() => AnimationEffect(2)}>
                    <Title>I'm a freshman at UIC.</Title>
                </Box>
                <Spacer/>
                <Box sx={() => AnimationEffect(3)}> {/* Setting optional width to make cards smaller */}
                    <Title>Primary Skills</Title>
                    <InfoBox>
                        <InfoCard title={PythonDesc.title} desc={PythonDesc.desc}/>
                        <InfoCard title={JsDesc.title} desc={JsDesc.desc}/>
                        <InfoCard title={FlutterDesc.title} desc={FlutterDesc.desc}/>
                        <InfoCard title={BackendDesc.title} desc={BackendDesc.desc}/>
                        <InfoCard title={FrameworksDesc.title} desc={FrameworksDesc.desc}/>
                    </InfoBox>
                </Box>
                <Spacer/>
                <Box sx={() => AnimationEffect(4)}>
                    <Title>Main Projects</Title>
                    <InfoBox>
                        <InfoCard title={ElectrobookDesc.title} desc={ElectrobookDesc.desc}/>
                        <InfoCard title={websiteDesc.title} desc={websiteDesc.desc}/>
                        <InfoCard title={discordDesc.title} desc={discordDesc.desc}/>
                        <InfoCard title={photoSorter.title} desc={photoSorter.desc}/>
                    </InfoBox>
                </Box>
                <Spacer/>
                <Box sx={() => AnimationEffect(5)}>
                    <Title>Industries I'm Interested In</Title>
                    <InfoBox>
                        <InfoCard title={fullstackDev.title} desc={fullstackDev.desc}/>
                        <InfoCard title={vr_arDev.title} desc={vr_arDev.desc}/>
                        <InfoCard title={aiDev.title} desc={aiDev.desc}/>
                        <InfoCard title={neuroDev.title} desc={neuroDev.desc}/>
                        <InfoCard title={techDev.title} desc={techDev.desc}/>
                    </InfoBox>
                </Box>
                <Spacer/>
                <Box sx={() => AnimationEffect(6)}>
                    <Title>Basic Information</Title>
                    <InfoBox>
                        <InfoCard title={gradeInfo.title} desc={gradeInfo.desc}/>
                        <InfoCard title={goalsInfo.title} desc={goalsInfo.desc}/>
                        <InfoCard title={experienceInfo.title} desc={experienceInfo.desc}/>
                        <InfoCard title={outsideInfo.title} desc={outsideInfo.desc}/>
                    </InfoBox>
                </Box>
                <Spacer/>
            </Box>
        </Box>
    )
}