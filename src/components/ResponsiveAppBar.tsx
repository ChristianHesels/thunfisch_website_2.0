import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import {usePageStore} from '../Store';
import Typography from '@mui/material/Typography';
import Logo from './TTTT/logo.png';
import IconButton from '@mui/material/IconButton';
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
  const {value, setValue} = usePageStore();
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
              value={value}
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

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            ></IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
