import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider, Title, Card, Grid, Container } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';
import Group12032 from './images/Screenshot 2024-09-25 105734.png';
import Component142 from './images/Screenshot 2024-09-18 164810.png';
import Component143 from './images/Screenshot 2024-09-18 165840.png';
import Component144 from './images/Screenshot 2024-09-18 172916.png';
import arrow from './images/Screenshot 2024-09-19 093619.png';

function Firstpage() {
    const { classes } = useStyles();
    
    return (
        <>
            
          

            
            
                <Grid justify="center">
                    
                    <Grid.Col xs={12} md={8}>
                    <Box className={classes.booking} p={16}    mt={20} mb={10}>
                <Title order={4} ta="start" c="white">BOOKING INFORMATION</Title>
            </Box>
                        <Card className={classes.info} w="100%" >
                            <Card.Section>
                                <Flex justify="space-between" align="center">
                                    <Title order={6} c="#004876" pl={15} mt={5} mb={-6}>BOOKING DETAILS</Title>
                                    <Title order={6} c="#1CC653" pr={15} mt={5} mb={-6}>VIEW LOG</Title>
                                </Flex>
                                <Divider my="sm" />
                            </Card.Section>

                            <Flex
      wrap="wrap"
      justify="space-between"
      gap={20}
      sx={(theme) => ({
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // Default for larger screens
        gap: '20px',
        [theme.fn.smallerThan('sm')]: {
          gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns on mobile
        },
      })}
    >
                            
                                
                                    <Flex direction="column" gap={20}>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Booking ID</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">TKT6578990</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Office ID</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">J5430</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Trip Type</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">Corporate</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Payment Mode</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">Credit Card</Text>
                                    </Flex>
                                    </Flex>
                            

                            
                                    <Flex direction="column" gap={20}>
                                
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Booking Date & Time</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">18 Jun 2024, 16:00</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Ticketing Timeline</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">14 Days</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Journey Type</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">Farm Trip</Text>
                                    </Flex>
                                    
                                    
                                    </Flex>
                            

                                    <Flex direction="column" gap={20}>
                                
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"}  c="#757575" align="start">Issued Date & Time</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">19 Jun 2024, 03:00</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Supplier</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">Amadeus</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">IATA Number</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">A3456</Text>
                                    </Flex>
                                    
                                    
                                </Flex>
                            

                            
                            
                                <Flex direction="column" gap={20}>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Status</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">Confirmed</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Supplier PNR</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">K6532RED7854</Text>
                                    </Flex>
                                    <Flex direction="column">
                                        <Text fz="12px" fw={"bold"} c="#757575" align="start">Payment Status</Text>
                                        <Text fz="12px" fw={"bold"} c="#243364" align="start">Debited</Text>
                                    </Flex>
                                </Flex>
                                    
                                    
                            
                            </Flex>

                            
                            <Card bg="#EDF1F4" py={10} mt={5}>
                                <Flex justify="space-between">
                                    <Text c="#243364" fz="14px">Total Amount</Text>
                                    <Flex gap={4}>
                                        <Text c="#243364" fz="15px" mt={5} fw={600} >AED</Text>
                                        <Text c="#243364" fz="20px" fw={600}>5500.00</Text>
                                    </Flex>
                                </Flex>
                            </Card >
                        </Card>
                    </Grid.Col>

                    
                    <Grid.Col xs={12} md={4}>
                        <Box className={classes.airline} w="95%" h={"94%"} px={10} mt={22} >
                            <Flex justify="flex-start" gap={15} pt={20}>
                                <Text c="white" fz="15px" pl={15}>Abu Dhabi</Text>
                                <Image src={Group12032} width={20} mt={10} />
                                <Text c="white" fz="15px">New York, NY</Text>
                            </Flex>
                            <Text c="white" display="flex" fz="15px" pl={15}>AIRLINE PNR<span><Text c="#1CC653">76GH7645</Text></span></Text>
                            <Flex pl={15} pt={9}>
                                <Image src={Component142} width={25} />
                                <Divider size="sm" orientation="vertical" ml={7} />
                                <Image src={Component143} width={25} pl={7} />
                                <Divider size="sm" orientation="vertical" ml={7}/>
                                <Image src={Component144} width={25} pl={7}/>
                            </Flex>
                            <Divider my="sm" variant="dashed" />
                            <Flex className={classes.arrow} justify="space-between" py={10} px={7} ml={10}>
                                <Text c="white" pl={20}>Issue Ticket</Text>
                                <Image src={arrow} width={20} pr={20} />
                            </Flex>
                            <Flex className={classes.arrow} justify="space-between" mt={20} py={10} px={7} ml={10}>
                                <Text c="white" pl={20}>Cancel PNR</Text>
                                <Image src={arrow} width={20} pr={20} />
                            </Flex>
                            <Text className={classes.book} pt={90} pb={30}>BOOKING</Text>
                        </Box>
                    </Grid.Col>
                </Grid>
            
        </>
    );
}

export default Firstpage;
