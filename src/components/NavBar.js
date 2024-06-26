import React from 'react'
import { useColorScheme } from '@mui/joy/styles';

import '../styles/NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Input from '@mui/joy/Input';
import Tooltip from '@mui/joy/Tooltip';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import ListDivider from '@mui/joy/ListDivider';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import DialogTitle from '@mui/joy/DialogTitle';

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import BookRoundedIcon from '@mui/icons-material/BookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useNavigate } from 'react-router-dom';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="outlined" color="primary" />;
  }
  return (
    <Tooltip title="Change theme" variant="outlined">
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="plain"
        color="neutral"
        sx={{ alignSelf: 'center' }}
        onClick={() => {
          if (mode === 'light') {
            setMode('dark');
          } else {
            setMode('light');
          }
        }}
      >
        {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    // localStorage.setItem('isLoggedIn', false),
    localStorage.clear()
    navigate('/');
  }
  // return (
  //     <div className='navBar'>
  //         <div><span></span>NavBar</div>
  //         <div className='navBarItems'>
  //             <a href='/'><MaterialSymbol icon="home" size={24} grade={-25} />Home</a>
  //             <a href='datapage'><MaterialSymbol icon="inventory_2" size={24} grade={-25} />Data</a>
  //             <a href='' className='loginButton'><FetchUser/></a>
  //         </div>
  //     </div>
  // )
  return (<Box
    sx={{
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'space-between',
      px: 0,
      paddingBottom: 2
    }}
  >
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      sx={{ display: { xs: 'none', sm: 'flex' } }}
    >
      <IconButton
        size="md"
        variant="outlined"
        color="neutral"
        sx={{
          display: { xs: 'none', sm: 'inline-flex' },
          borderRadius: '50%',
        }}
      >
        <LanguageRoundedIcon />
      </IconButton>
      <Button
        variant="plain"
        color="neutral"
        component="a"
        href="datapage"
        size="sm"
        sx={{ alignSelf: 'center' }}
      >
        Data
      </Button>
      {/* <Button
        variant="plain"
        color="neutral"
        component="a"
        // href="/joy-ui/getting-started/templates/team/"
        size="sm"
        sx={{ alignSelf: 'center' }}
      >
        Team
      </Button>
      <Button
        variant="plain"
        color="neutral"
        aria-pressed="true"
        component="a"
        // href="/joy-ui/getting-started/templates/files/"
        size="sm"
        sx={{ alignSelf: 'center' }}
      >
        Files
      </Button> */}
    </Stack>
    <Box sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
      <IconButton variant="plain" color="neutral" onClick={() => setOpen(true)}>
        <MenuRoundedIcon />
      </IconButton>
      <Drawer
        sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalClose />
        <DialogTitle>Acme Co.</DialogTitle>
        <Box sx={{ px: 1 }}>
          {/* <Navigation /> */}
        </Box>
      </Drawer>
    </Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1.5,
        alignItems: 'center',
      }}
    >
      <Input
        size="sm"
        variant="outlined"
        placeholder="Search anything…"
        startDecorator={<SearchRoundedIcon color="primary" />}
        endDecorator={
          <IconButton
            variant="outlined"
            color="neutral"
            sx={{ bgcolor: 'background.level1' }}
          >
            <Typography level="title-sm" textColor="text.icon">
              ⌘ K
            </Typography>
          </IconButton>
        }
        sx={{
          alignSelf: 'center',
          display: {
            xs: 'none',
            sm: 'flex',
          },
        }}
      />

      <Dropdown>
        <MenuButton
          variant="plain"
          size="sm"
          sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}
        >
          <Avatar
            src="https://i.pravatar.cc/40?img=2"
            srcSet="https://i.pravatar.cc/80?img=2"
            sx={{ maxWidth: '32px', maxHeight: '32px' }}
          />
        </MenuButton>
        <Menu
          placement="bottom-end"
          size="sm"
          sx={{
            zIndex: '99999',
            p: 1,
            gap: 1,
            '--ListItem-radius': 'var(--joy-radius-sm)',
          }}
        >
          <MenuItem>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Avatar
                src="https://i.pravatar.cc/40?img=2"
                srcSet="https://i.pravatar.cc/80?img=2"
                sx={{ borderRadius: '50%' }}
              />
              <Box sx={{ ml: 1.5 }}>
                <Typography level="title-sm" textColor="text.primary">
                  {localStorage.getItem('username')}
                </Typography>
              </Box>
            </Box>
          </MenuItem>
          <ListDivider />
          <MenuItem>
            <HelpRoundedIcon />
            Help
          </MenuItem>
          <MenuItem>
            <SettingsRoundedIcon />
            Settings
          </MenuItem>
          <ListDivider />
          <MenuItem
            component="a"
            target='_blank'
            href="https://github.com/Nandanrmenon/govDataViz.git"
          >
            Source Code
            <OpenInNewRoundedIcon />
          </MenuItem>
          <ListDivider />
          <MenuItem
            onClick={handleLogOut}
          >
            <LogoutRoundedIcon />
            Log out
          </MenuItem>
        </Menu>
      </Dropdown>
    </Box>
  </Box>);
}

export default NavBar
