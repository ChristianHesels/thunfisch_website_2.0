import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Logo from './TTTT/logo.png';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from '@mui/material';
import '../App.css';

const drawerWidth = 260;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function ResponsiveAppBar() {
  const [userMenuAnchorEl, setuserMenuAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [tabSelectionValue, setTabSelectionValue] = React.useState(0);

  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setuserMenuAnchorEl(event.currentTarget);
  };
  const handleUserMenuClose = () => {
    setuserMenuAnchorEl(null);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabSelectionValue(newValue);
  };
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar sx={{bgcolor: 'black'}} position="fixed" data-testid="app-bar">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
            <Box
              component="img"
              sx={{
                height: 50,
                paddingTop: 1,
              }}
              alt="TTTT Logo"
              src={Logo}
            />
          </Typography>
          {/*
            Tabs for switching the views
          */}
          <Box sx={{flexGrow: 1}}>
            <Tabs
              value={tabSelectionValue}
              onChange={handleTabChange}
              aria-label="view selection"
              textColor="inherit"
              indicatorColor="secondary"
              TabIndicatorProps={{
                style: {
                  backgroundColor: 'white',
                  height: 1,
                },
              }}
              variant="fullWidth"
              data-testid="tabs-view-selection"
            >
              <Tab
                data-testid="tab-TTTT"
                label="TTTT"
                component={Link}
                to="/tttt"
              />
              <Tab
                data-testid="tab-schranz"
                label="Schranz"
                component={Link}
                to="/schranz"
              />
            </Tabs>
          </Box>

          <Box sx={{flexGrow: 1}} />

          {/*
            User menu on the right side
          */}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={userMenuAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(userMenuAnchorEl)}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={handleUserMenuClose}>
                <Link to="/profile">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleUserMenuClose}>
                <Link to="/projects">Projects</Link>
              </MenuItem>
              <MenuItem onClick={handleUserMenuClose}>
                <Link to="/logout">Logout</Link>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
