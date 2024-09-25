import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider, Title, Card, Grid, Container, Group, Stack } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';

function Seventhpage() {
    const { classes } = useStyles();
    return (
        <>
        
            <Card bg={"white"} my={20}>
                <Card.Section>
                    <Text c={"#004876"} ta="start" pl={15} mt={5} mb={-6} fz={'12px'} >AGENT NOTES</Text>
                    <Divider my="sm" />
                </Card.Section>
                <Text c={"#757575"} ta="start" fz={'12px'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
                <Text c={"#757575"} ta="start" fz={'12px'}>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            </Card>
        
        </>
    )
}

export default Seventhpage;