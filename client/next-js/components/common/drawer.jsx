import { Drawer, Box, Button, Icon } from "@mui/material";
import { useState } from "react";

export const DrawerComponent = () => {
    const [open, setOpen] = useState(true);

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
            >

            </Drawer>
            {
                !open ?
                <Button 
                variant="contained"
                sx={{
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                    bgcolor: 'primary.main',
                    transform: 'rotate(180deg)',
                    height: '15%',
                }}
                onClick={toggle}
                >
                    <Icon>
                        
                    </Icon>
                </Button> : null
            }
        </Box>
    );
};