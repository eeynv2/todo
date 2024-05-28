import React, { Dispatch, SetStateAction, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const navPages = [
    {
        name: "Home",
        icon: HomeOutlinedIcon,
        link: "/",
    },

    {
        name: "Todo",
        icon: PlaylistAddCheckOutlinedIcon,
        link: "/todo",
    }, 
    {
        name: "Calendar",
        icon: CalendarMonthOutlinedIcon,
        link: "/calendar",
    }

]
function NavBar(){
    return (
    /*<Box
    height = {200}
    width = {1500} 
    gap = {100}
    
    sx = {{
        //display: "flex"
        //border-color: "black"
        alignItems:
        {
            lg: "start",
            xs: "center" 
        },
        flexDirection:{
            xs: "row",
            lg:"column"
        }
         }}>*/

      
    <div className = "nav-container">
        <Link to={"/"}>Home</Link>
        <Link to={"/todo"}>Todo</Link>
        <Link to={"/calendar"}>Calendar</Link>
    </div>
   // </Box>
    )
    
}


export default NavBar;
