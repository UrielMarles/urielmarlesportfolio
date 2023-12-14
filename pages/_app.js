import '/styles/style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head';

export default function App({Component,papeProps}){
    return(<><Head><link rel="icon" href="/favicon.ico" /></Head><Component {...papeProps}/></>)
}