import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login/login';
import { Box } from '@mui/system';
import { AppBar, IconButton, styled, alpha, Toolbar, Typography, InputBase, Paper, ToggleButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { toggleMenu } from './store/toggleSlice';
import User from './pages/user-management/user';

const isAuthenticated = true

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {
  const isOpen = useSelector((state: RootState) => state.toggle.value)
  const dispatch = useDispatch()
  const WrappedRoutes = <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/user-management" element={<User />} />
  </Routes>
  return isAuthenticated ? (
    <div className="App">
      <div className="header">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={() => dispatch(toggleMenu())}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                MUI
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      {isOpen ? <div style={{ display: 'flex' }}>
        <div className="sidebar" style={{ flexGrow: 1 }}>
          <MenuList>
            <Link to='user-management'>
              <MenuItem >
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>User Management</ListItemText>
              </MenuItem>
            </Link>
          </MenuList>
        </div>
        <div className="content" style={{ flexGrow: 1 }}>
          {WrappedRoutes}
        </div>
      </div> :
        <div className="content" style={{ flexGrow: 1 }}>
          {WrappedRoutes}
        </div>
      }
    </div>
  ) : <Login />;
}

export default App;
