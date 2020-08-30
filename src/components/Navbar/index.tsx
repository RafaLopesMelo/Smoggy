import React, { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Box, Heading, Link } from '@chakra-ui/core';

interface IMenuItemProps {
    href: string,
    active?: boolean
};

const MenuItem: React.FC<IMenuItemProps> = (props) => {
    const { active, href, children } = props;

    return (
        <Link
            mt={{ base: 4, md: 0 }}
            mr={12} display="block"
            fontSize="xl"
            href={href}
            fontWeight="medium"
            color={ active ? 'red.500' : 'gray.900'}
        >
            { children }
        </Link>
    );
};

const Navbar: React.FC = () => {
    const router = useRouter();
    const page = router.pathname;

    return (
        <>
            <Flex
                align="center"
                justify="space-between"
                px={16}
                py={4}
                borderBottom="1pt"
                borderStyle="solid"
                borderColor="red.500"
            >
                <Box>
                    <Heading as="h1" size="2xl">Smoggy</Heading>
                </Box>
                <Box
                    display="flex"
                >
                    <MenuItem
                        href="/home"
                        active={ page === '/home' ? true : false }
                    >Home</MenuItem>
                    <MenuItem
                        href="/mapa"
                        active={ page === '/mapa' ? true : false }
                    >Mapa</MenuItem>
                    <MenuItem
                        href="/consequencias"
                        active={ page === '/consequencias' ? true : false }
                    >Consequências</MenuItem>
                    <MenuItem
                        href="/comoajudar"
                        active={ page === '/comoajudar' ? true : false }
                    >Como ajudar</MenuItem>
                </Box>
            </Flex>
        </>
    );
};

export default Navbar;
