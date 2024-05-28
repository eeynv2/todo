import {ReactNode} from "react";
import React from 'react';
import Box from '@mui/material/Box';

interface LayoutProps{
    children: ReactNode;

}

const Layout = ({children}: LayoutProps)=>{
    return (
        <Box sx = {{
            backgroundColor: "coral",
            display: "flex",
            flexDirection:{
                xs: "column",
                lg: "row"
            },
            padding: 3,
            color: "white",
             heigh: "100vh",
        }}>

        </Box>
    );
};

export default Layout