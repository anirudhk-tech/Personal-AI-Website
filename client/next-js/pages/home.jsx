import { Box } from "@mui/material";
import { DrawerComponent } from "../components/common/drawer";
import { InputComponent } from "../components/common/input";



export default function Home () {
    return ( 
        <Box
        sx={{
            bgcolor: 'background',
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row'
        }}
        >
            <DrawerComponent/>
            <Box
            sx={{
                flexGrow: 11,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                padding: 5
            }}
            >
                <InputComponent/>
            </Box>
        </Box>
    );
};