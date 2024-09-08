/*
Drawer component that's available throughout the website
Date Last Edited: 7 September 2024
Author: Anirudh Kuppili
*/

import { Drawer, Box, IconButton } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
import { useState } from "react";

export const DrawerComponent = () => {
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
                bgcolor: 'primary.main',
                width: '20%'
            }}
            ModalProps={{ // Makes default dimming effect invisible when opening drawer
                slotProps: {
                    backdrop: {
                        invisible: true
                    }
                }
            }}
            >

            </Drawer>
            {
                !open ?
                <IconButton 
                onClick={toggle}
                >
                    <MenuOpen sx={{ color: 'primary.main' }}/>
                </IconButton> : null
            }
        </Box>
    );
};