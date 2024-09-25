import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider, Title, Card, Grid, Container, Group, Stack } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';

function Sixthpage() {
    const { classes } = useStyles();
    return (
        <>
        
            <Card bg={"white"}>
                <Card.Section>
                    <Text c={"#004876"} ta="start" pl={15} mt={5} mb={-6} fz={12} fw={600} >AGENT INFORMATION</Text>
                    <Divider my="sm" />
                </Card.Section>
                <MediaQuery smallerThan="md" styles={{ flexDirection: 'column' }}>
                <Flex direction="column" gap="md">
              <MediaQuery smallerThan="md" styles={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <Flex gap={50}>
                    <div>
                        <Text c={"#757575"} fw={"bold"} fz={'12px'}  ta="start">Name</Text>
                        <Text c={"#243364"} fw={"bold"} fz={'12px'}  >Lorem ipsum dolor</Text>
                    </div>
                    <div>
                        <Text c={"#757575"} fw={"bold"} ta="start" fz={'12px'} >Phone</Text>
                        <Text c={"#243364"} fw={"bold"} fz={'12px'} >+91 00 0000 0000</Text>
                    </div>
                    <div>
                        <Text c={"#757575"} fw={"bold"} ta="start" fz={'12px'} >Email</Text>
                        <Text c={"#243364"} fw={"bold"} fz={'12px'} >support@example.com</Text>
                    </div>
                    <div>
                        <Text c={"#757575"} fw={"bold"}  ta="start" fz={'12px'} >Company</Text>
                        <Text c={"#243364"} fw={"bold"} fz={'12px'} >Lorem Ipsum</Text>
                    </div>
                </Flex>
                </MediaQuery>
            </Flex>
          </MediaQuery>
            </Card>
        
        </>
    )
}

export default Sixthpage;