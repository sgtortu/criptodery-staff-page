'use client';
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRouter} from 'next/navigation';

export default function Topbar() {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar style={{backgroundColor: '#02474C'}}>
        <Typography variant="h6" style={{flexGrow: 1}}>
          Logo
        </Typography>
        <Typography variant="subtitle1" style={{marginRight: 15}}>
          Role
        </Typography>
        <Typography variant="subtitle1" style={{marginRight: 15}}>
          User Name
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="account">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
