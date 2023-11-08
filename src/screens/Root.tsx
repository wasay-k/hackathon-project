import { Box, Button, Container, CssBaseline } from "@mui/material";
import React from "react";


const RootScreen = () => {
    return (

        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className="justify-center self-center">
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
            </Container>
        </React.Fragment>
    );


}

export default RootScreen;