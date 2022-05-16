import React from 'react';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import { Color } from '../src/Shared/Domain/Enums';
import { CircularProgress, Container, ThemeProvider } from '@mui/material';

import { MainAppHeaderComponent } from '../src/Shared/UI/Components/Header';
import { appTheme } from '../src/Shared/UI/Styles/appTheme';


export default function Root({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={appTheme}>
            <MainAppHeaderComponent favico={process.env.FAVICO} />
            <Container>
                <Suspense fallback={<CircularProgress variant={'indeterminate'} color={Color.primary} />}>
                    <Container maxWidth="lg">    
                        <Component {...pageProps} />
                    </Container>
                </Suspense>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </Container >
        </ThemeProvider >
    );
};
