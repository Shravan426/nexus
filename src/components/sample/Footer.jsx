import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider, Title, Card, Grid, Container, Group, Stack } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';

function Footer() {
    const { classes } = useStyles();
    return (
        <>
        <Box mt={30}>
        <footer>
        <MediaQuery smallerThan="md" styles={{ flexDirection: 'column',alignItems:'center'}}>
            <Flex justify="space-between"  pb={15} px={87}>
                <Text c={'#959698'} fz={'15px'} pl={25}>2024 © CBT | Powered by gewaninfotech.com</Text>
                <MediaQuery smallerThan="md" styles={{ flexDirection: 'column',alignItems:'center' }}>
                <Flex gap={7} pr={25}>
                    <Text c={'#959698'} fz={'15px'}>Terms of Use</Text>
                    <Text size="sm">•</Text>
                    <Text c={'#959698'} fz={'15px'}>Privacy Policy</Text>
                    <Text size="sm">•</Text>
                    <Text c={'#959698'} fz={'15px'}>About</Text>
                    <Text size="sm">•</Text>
                    <Text c={'#959698'} fz={'15px'}>Support</Text>

                    

                </Flex>
                </MediaQuery>
                
            </Flex>
            </MediaQuery>
        </footer>
        </Box>
        </>
    )
}

export default Footer;