import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider, Title, Card, Grid, Container, Group, Stack } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';

function Footer() {
    const { classes } = useStyles();
    return (
        <>
        <Box mt={30}>
              <Flex justify="space-between"  pb={15}  direction='row'>
                <Text c={'#959698'} fz={'15px'} pl={25}>2024 © CBT | Powered by gewaninfotech.com</Text>
                 <Flex gap={7} pr={25}  className={classes.footerRight}>
                    <Text c={'#959698'} fz={'15px'}>Terms of Use</Text>
                    <Text size="sm">•</Text>
                    <Text c={'#959698'} fz={'15px'}>Privacy Policy</Text>
                    <Text size="sm">•</Text>
                    <Text c={'#959698'} fz={'15px'}>About</Text>
                    <Text size="sm">•</Text>
                    <Text c={'#959698'} fz={'15px'}>Support</Text>

                    

                </Flex>
                 
            </Flex>
         </Box>
        </>
    )
}

export default Footer;