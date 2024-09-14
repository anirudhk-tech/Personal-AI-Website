/*
Drawer component that's available throughout the website
Props: scrollTop (Optionally provided if page is scrollable so drawer icon moves with the page viewport)
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

import { Drawer, Box, IconButton } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
import { useState } from "react";
import { NavCard } from "components/drawer/navCard.jsx";

export const DrawerComponent = ({ scrollTop }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(prev => !prev);
    };

    return (
        <Box
        sx={{
            alignItems: 'center',
            display: 'flex',
            height: '100%',
            flex: 1,
            overflow: 'hidden',
        }}
        >
            <Drawer 
            open={open}
            onClose={toggle}
            sx={{
                width: '10%',
            }}
            ModalProps={{ // Turns off default dimming effect when opening drawer
                slotProps: {
                    backdrop: {
                        invisible: true
                    }
                }
            }}
            >
                <Box
                sx={{
                    width: '200px',
                    height: '100%',
                    bgcolor: 'primary.main',
                    padding: '2%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1%',
                }}
                >
                    <NavCard title={'Cortex'} link={'/cortex'} blurb={'Have a specific question?'}/>
                    <NavCard title={'Home'} link={'/'} blurb={'Want a basic overview?'}/>
                    <NavCard title={'Timeline'} link={'/timeline'} blurb={'Looking for experience?'}/>
                    <NavCard title={'Contact'} link='/contact' blurb={'How to connect?'}/>
                </Box>

            </Drawer>
            {
                !open ?
                <IconButton 
                onClick={toggle}
                >
                    <MenuOpen sx={{ 
                        color: 'primary.main', 
                        position: 'fixed', 
                        marginLeft: '3vh', 
                    }}/>
                </IconButton> : null
            }
        </Box>
    );
};