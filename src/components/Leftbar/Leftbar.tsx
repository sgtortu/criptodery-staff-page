'use client';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import logo from '../../assets/criptodery.png';

export default function Leftbar() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        '& .MuiDrawer-paper': {
          width: '20%',
          backgroundColor: '#000',
          //backgroundColor: '#02474C',
          color: 'white',
        },
      }}>
      <Box sx={{pt: 12, pb: 12, display: 'flex', justifyContent: 'center'}}>
        <Image src={logo} alt="Logo" />
      </Box>
      <List>
        {['Blocks', 'Nodes', 'Cards', 'Users'].map(text => (
          <ListItem
            button
            style={{height: 80, borderBottom: '1px solid #767680'}}
            key={text}
            onClick={() => handleNavigation(`/${text}`)}
            sx={{'&:hover': {backgroundColor: 'rgba(255, 255, 255, 0.1)'}}}>
            <ListItemIcon>{/* Add your icons here */}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
