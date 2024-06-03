import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import orange from '@mui/material/colors/orange';
import { pink } from '@mui/material/colors';
//import { orange } from '@mui/material/colors';



export default function Footer(){
const theme = useTheme();

return (
  <div style = {{ background: theme.palette.primary.main, color: theme.palette.secondary.main }} >
  </div>
)



}