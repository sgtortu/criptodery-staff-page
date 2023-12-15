'use client';
import {Typography} from '@mui/material';
import Topbar from '@/components/Topbar/Topbar';
import Leftbar from '@/components/Leftbar/Leftbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Topbar />

      <Leftbar />

      <Typography variant="h4" align="center" style={{marginTop: 50}}>
        Criptodery Staff
      </Typography>

      <Link href="/blocks">
        <Typography
          variant="h6"
          align="center"
          style={{marginTop: 50, cursor: 'pointer'}}>
          Comenzar
        </Typography>
      </Link>
    </>
  );
}
