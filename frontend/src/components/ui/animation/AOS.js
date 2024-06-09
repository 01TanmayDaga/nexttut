'use client';
import AOS from 'aos';
    
import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';
    
const AOSProvider = ({ children }) => {
   useEffect(() => {
     AOS.init({
        delay:400,
        duration:700,
        offset:360,
     });
   }, []);

   return <Fragment>{children}</Fragment>;
};

export default AOSProvider;