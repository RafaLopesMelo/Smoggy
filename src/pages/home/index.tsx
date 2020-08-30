import React from 'react';
import Head from 'next/head';
import { Box, Image } from '@chakra-ui/core';

import Navbar from '../../components/Navbar';

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Smoggy | Home</title>
            </Head>

            <Navbar/>
            <Box>
                <Image
                    src="../../../assets/florest.jpg"
                    width="100vw"
                />
            </Box>
        </>
    );
};

export default Home;
