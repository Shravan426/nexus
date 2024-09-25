import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider, Title, Card, Grid, Container, Group, Stack } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';
import QatarAirways from './images/Mask Group 11.jpg';
import distance from './images/Group 11944.jpg';

function Secondpage() {
    const { classes } = useStyles();

    return (
        
            <Card bg="white" mt={20}>
                <Card.Section>
                    <Text color={'#004876'} align="left" pl={17} mt={5} mb={-7} fz={12} fw={600} >FLIGHT DETAILS</Text>
                    <Divider my="sm" />
                </Card.Section>
                <Flex direction="column" gap="md">
                    <MediaQuery largerThan="md" styles={{ flexDirection: 'row',alignItems: 'center' }}>
                        <Flex justify="space-between" wrap="wrap">
                            <div>
                                <Image src={QatarAirways} width={120} />
                                <Text color={'#959698'} fw={"bold"} fz={'12px'} >BY-2445</Text>
                            </div>
                            <Divider size="sm" orientation="vertical" height={'46px'} />
                            <div>
                                <Text color={'#1CC653'} fw={"bold"} fz={'12px'} >Departure</Text>
                                <Text color={'#243364'} fw={"bold"} fz={'12px'} >08:35 AM</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Sun, 20 Aug</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Terminal 3</Text>
                            </div>
                            <div>
                                <Flex direction="column" align="center">
                                    <Text color={'#959698'} fw={"bold"} fz={'12px'} >Duration</Text>
                                    <Text color={'#243364'} fw={"bold"} fz={'12px'} >1h 45m</Text>
                                </Flex>
                                <Image src={distance} />
                                <Flex justify="space-between">
                                    <Text color={'#757575'} fw={"bold"} fz={'12px'} >AUH</Text>
                                    <Text color={'#757575'} fw={"bold"} fz={'12px'} >Boeing 777-300</Text>
                                    <Text color={'#757575'} fw={"bold"} fz={'12px'} >CAI</Text>
                                </Flex>
                            </div>
                            <div>
                                <Text color={'#1CC653'} fw={"bold"} fz={'12px'} >Arrival</Text>
                                <Text color={'#243364'} fw={"bold"} fz={'12px'} >10:15 AM</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Sun, 20 Aug</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Terminal 2</Text>
                            </div>
                        </Flex>
                    </MediaQuery>
                    <Divider className={classes.cairo} my="sm" variant="dashed" label="Layover at Cairo International Airport | 02 Hrs 45 Mins" labelPosition="center" />
                    <MediaQuery largerThan="md" styles={{ flexDirection: 'row' }}>
                        <Flex justify="space-between" wrap="wrap">
                            <div>
                                <Image src={QatarAirways} width={120} />
                                <Text color={'#959698'} fw={"bold"}>BY-2056</Text>
                            </div>
                            <Divider size="sm" orientation="vertical" height={'46px'} />
                            <div>
                                <Text color={'#1CC653'} fw={"bold"} fz={'12px'} >Departure</Text>
                                <Text color={'#243364'} fw={"bold"} fz={'12px'} >01:00 PM</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Sun, 20 Aug</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Terminal 2</Text>
                            </div>
                            <div>
                                <Flex direction="column" align="center">
                                    <Text color={'#959698'} fw={"bold"} fz={'12px'} >Duration</Text>
                                    <Text color={'#243364'} fw={"bold"} fz={'12px'} >2h 5m</Text>
                                </Flex>
                                <Image src={distance} />
                                <Flex justify="space-between">
                                    <Text color={'#757575'} fw={"bold"} fz={'12px'} >CAI</Text>
                                    <Text color={'#757575'} fw={"bold"} fz={'12px'} >Boeing 778-200</Text>
                                    <Text color={'#757575'} fw={"bold"} fz={'12px'} >LHR</Text>
                                </Flex>
                            </div>
                            <div>
                                <Text color={'#1CC653'} fw={"bold"} fz={'12px'} >Arrival</Text>
                                <Text color={'#243364'} fw={"bold"} fz={'12px'} >03:05 PM</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Sun, 20 Aug</Text>
                                <Text color={'#757575'} fw={"bold"} fz={'12px'} >Terminal 3</Text>
                            </div>
                        </Flex>
                    </MediaQuery>
                    <Divider my="sm" />
                    
                    <Flex
      wrap="wrap"
      justify="space-between"
      gap={20}
      sx={(theme) => ({
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)', 
        gap: '20px',
        [theme.fn.smallerThan('sm')]: {
          gridTemplateColumns: 'repeat(2, 1fr)', 
        },
      })}
    >
      <Flex direction="column" gap={20}>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'} align="start">Flight Name</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'} align="start">Qatar Airways</Text>
        </Flex>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'}  align="start">Operating Airline</Text>
          <Text color={'#243364'}  fw={"bold"}  fz={'12px'} align="start">Airline</Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={20}>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'}  align="start">Flight Number</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'} align="start">BY 2445</Text>
        </Flex>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'}  align="start">Validating Airline</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'}  align="start">Airline</Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={20}>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'}  align="start">Class</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'}  align="start">Economy</Text>
        </Flex>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'}  align="start">Equipment Number</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'}  align="start">14</Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={20}>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'} align="start">RDB</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'} align="start">B</Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={20}>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'} align="start">Airline</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'}  align="start">Airline</Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={20}>
        <Flex direction="column">
          <Text color={'#757575'} fw={"bold"} fz={'12px'}  align="start">Marketing Airline</Text>
          <Text color={'#243364'} fw={"bold"} fz={'12px'} align="start">Airline</Text>
        </Flex>
      </Flex>
    </Flex>

                    </Flex>
                
            </Card>
        
    );
}

export default Secondpage;
