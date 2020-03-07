import React from 'react';
import App from "next/app";
import Router from 'next/router'
import Link from "next/link";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "../styles/global";
import {theme} from "../styles/theme";
import Navigation from '../components/Header/Navigation'
import Footer from "../components/Footer/footer";




function MyApp ({ Component, pageProps, global}){
    return(
        <ThemeProvider theme={theme}>
            <link
                rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                  crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Hind:400,500,700|Merriweather:400,400i,700&display=swap" rel="stylesheet"
            />
            <Navigation {...global}/>
            <Component {...pageProps} {...global} />
            <GlobalStyles/>
            <Footer/>
        </ThemeProvider>
    )
}

export default MyApp;