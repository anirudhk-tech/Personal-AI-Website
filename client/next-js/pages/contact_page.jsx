/*
Contact page, where different forms of reaching out is mentioned
Date Last Edited: 11 September 2024
Author: Anirudh Kuppili
*/

import { Box, Typography, useTheme } from "@mui/material";
import { DrawerComponent } from "components/common/drawer.jsx";
import { HeaderComponent } from "components/common/header.jsx";
import { ContactCard } from "components/contact/contactCard.jsx";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

export default function ContactPage () {
    const theme = useTheme();

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
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '95%',
                height: '90%',
                paddingTop: {xs: '20%', sm: '6%'},
                paddingLeft: '5%',
                paddingRight: '10%',
                gap: '10%',
            }}
            >
                <Typography sx={{
                    fontFamily: 'Oswald',
                    fontWeight: 'bold',
                    fontSize: {xs: '5vw', sm: '2.2vw'},
                    color: 'text.secondary'
                }}>Thanks for being interested.</Typography>
                <Box
                sx={{
                    width: '100%',
                    gap: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                }}
                >
                    <ContactCard 
                    tag={"vkupp@uic.edu"} 
                    icon={<IoMailOpen size={100} color={theme.palette.background}/>} 
                    color={theme.palette.background} 
                    link={"vkupp@uic.edu"}
                    alert={"Email copied!"}
                    />
                    <ContactCard 
                    tag={"anirudhk-tech"} 
                    icon={<FaGithub size={100} color={theme.palette.background}/>} 
                    link={"https://github.com/anirudhk-tech"}
                    alert={"Link copied!"}
                    />
                    <ContactCard 
                    tag={"akuppili"} 
                    icon={<FaLinkedin size={100} color={theme.palette.background}/>} 
                    link={"https://www.linkedin.com/in/anirudh-kuppili-4b77762a1/"}
                    alert={"Link copied!"}
                    />
                    <ContactCard 
                    tag={"ani_bytes"} 
                    icon={<FaDiscord size={100} color={theme.palette.background}/>} 
                    link={"ani_bytes"}
                    alert={"Tag copied!"}
                    />

                </Box>
            </Box>
        </Box>
    );
};