import React from 'react';
import { Landingscreen } from '../Components';
import { Features } from '../Components';
import { Reports } from '../Components';
import { Pricingplan } from '../Components';
import { Footer } from '../Components';
export const Landingpage = () => {
    return(
        <>
            <Landingscreen />
            <Features />
            <Reports />
            <Pricingplan />
            <Footer />
        </>
    )
}