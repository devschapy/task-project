'use client';
import '@/styles/globals.css';

import React from 'react';

import { ThemeProvider } from "@material-tailwind/react";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}
