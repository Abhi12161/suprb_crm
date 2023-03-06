import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';



import Collapse from '@mui/material/Collapse';

import ListItemButton from '@mui/material/ListItemButton';



import ExpandMore from '@mui/icons-material/ExpandMore';
import FeedIcon from '@mui/icons-material/Feed';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { HiOutlineSpeakerphone } from "react-icons/hi";

import WorkIcon from '@mui/icons-material/Work';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

import { IoIosArrowForward } from "react-icons/io";

import DashboardIcon from '@mui/icons-material/Dashboard';
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { color, typography } from '@mui/system';
import Listing from '../dashboard/listing';
import DashboardPage from '../dashboard/dashboardPage';
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Grid, IconButton, Badge, InputBase, Paper } from "@material-ui/core";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const drawerWidth = 220;
const useStyles = makeStyles({
  custom: {


    paddingLeft: '20px',

  },
  logo: {
    paddingTop: '13px'
  },
  root: {
    backgroundColor: '#ffff'
  },
  searchInput: {
    opacity: '0.6',
    padding: '0px 0px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'

    },
    '& .MuiSvgIcon-root': {
      marginRight: '10px'
    },

  },
  searchInput1: {
    opacity: '0.6',
    padding: '5px 8px',
    fontSize: '0.8rem',
    '&:hover': {
      backgroundColor: '#f2f2f2'

    },
    '& .MuiSvgIcon-root': {
      marginLeft: '10px'
    },

  },
  paper: {
    background: "blue"
  }

  
});

export default function Sidebar() {
  
  const [open, setOpen] = React.useState(0);
  const [showChildComp, setShowChildComp] = React.useState(false);
 
   const theme = createTheme({
     palette:{
       type:"red"
     }
   })
 
  const onBtnClick = e => {
    e.preventDefault()
    setShowChildComp(prevState => !prevState)
  }


  const handleClick = (e) => {



    setOpen(!open);




  };
  const handleClick1 = (e) => {


    setOpen(!open);

  };
  const classes = useStyles();
  return (
  
    
    <Box sx={{ display: 'flex',  }} >
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <Paper style={{height:"100vh"}}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: 'white' }}
      >

        <Toolbar>
          <Grid container
            alignItems="center">
            <Grid item  >
              <Typography sx={{ color: 'blue', fontSize: '28px' }}>Dashboard</Typography>

            </Grid>
            <Grid item sm></Grid>
            <Grid item  >
              <InputBase
                placeholder="Search "
                className={classes.searchInput1}
                startAdornment={<SearchIcon fontSize="small" />}


              />
              <IconButton>

                <Badge color="secondary" >
                  <FilterAltIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>

                <Badge color="secondary" >
                  <NotificationsIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>

                <Badge color="primary" >
                  <ChatBubbleIcon fontSize="small" />
                </Badge>
              </IconButton>

              <IconButton>

                <EmailIcon fontSize="small" />

              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />

              </IconButton>
              <IconButton >
                <Typography >abhimnayu</Typography>
              </IconButton>
            </Grid>

          </Grid>


        </Toolbar>
      </AppBar>
      </Paper>
    </ThemeProvider>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        classes={{ paper: classes.paper }}

        variant="permanent"
        anchor="left"
      >


        <Toolbar>
          <img src="../image/logo1.png" alt="logo" className={classes.logo} />


          <Typography className={classes.custom} variant="h4">
            Suprb
          </Typography>

        </Toolbar>

        <Divider />

        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"

        >
          <ListItemButton onClick={handleClick1}>
            <ListItemIcon>
              <FilterAltIcon />
            </ListItemIcon>

            <ListItemText primary="Lead" />
            {open ? <ExpandMore /> : <IoIosArrowForward />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }} onClick={onBtnClick}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Fresh Leads" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Try Again" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Follow up" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Backlog" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Hot Funnel" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Qualified" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Preowned" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <HiOutlineSpeakerphone />
            </ListItemIcon>
            <ListItemText primary="Marketing" />
            {open ? <ExpandMore /> : <IoIosArrowForward />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Fresh Leads" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Try Again" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Follow up" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Backlog" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Hot Funnel" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Qualified" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>

                </ListItemIcon>
                <ListItemText primary="Preowned" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton   >

            <ListItemIcon>
              <FeedIcon />
            </ListItemIcon>
            <ListItemText primary="TCF Forms" />

          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <IntegrationInstructionsIcon />
            </ListItemIcon>
            <ListItemText primary="Tech" />
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              < WorkIcon />
            </ListItemIcon>
            <ListItemText primary="HR" />
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText primary="Seo" />
          </ListItemButton>
          <ListItemButton >
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="Others" />
          </ListItemButton>

        </List>

       
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {showChildComp && <Listing />}


      </Box>
    </Box>
    
   
  );
}
