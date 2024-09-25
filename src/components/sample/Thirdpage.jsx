import { Button, Box, Text, Flex, Divider, Card, MediaQuery } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';

function Thirdpage() {
  const { classes } = useStyles();

  return (
    <>
      
        <Card bg={"white"} mt={20} w="100%">
          <Card.Section>
            <Text c={'#004876'} ta="initial" pl={15} mt={5} mb={-7} fz={12} fw={600} >FARE INFORMATION</Text>
            <Divider my="sm" />
          </Card.Section>

         
            
              
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
                    <Text color={'#757575'} fw={"bold"} fz={'12px'}   ta="start">Marketing Fare</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'}  ta="start" >100 AED</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'}   ta="start">Service Fee</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'}  ta="start">120 AED</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'}  ta="start">Profile/ LOSS</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'}  ta="start">Selling-Total Cost</Text>
                  </Flex>
                </Flex>
                <Flex direction="column" gap={20}>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'}   ta="start">Publish fare</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'}  ta="start">120 AED</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'}  ta="start">Additional Gateway Fee</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">20 AED</Text>
                  </Flex>
                </Flex>
                <Flex direction="column" gap={20}>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'}  ta="start">Base fare</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'}  ta="start">1220 AED</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'} ta="start">Commission</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">30 AED</Text>
                  </Flex>
                </Flex>
                <Flex direction="column" gap={20}>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'} ta="start">Tax</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">18 AED</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'} ta="start">Supplier Commission</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">15 AED</Text>
                  </Flex>
                </Flex>
                <Flex direction="column" gap={20}>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'} ta="start">Markup</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">15 AED</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'}  ta="start">Selling Price</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">80 AED</Text>
                  </Flex>
                </Flex>
                <Flex direction="column" gap={20}>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'} ta="start">Discount</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">20 AED</Text>
                  </Flex>
                  <Flex direction="column">
                    <Text color={'#757575'} fw={"bold"} fz={'12px'} ta="start">Currency</Text>
                    <Text color={'#243364'} fw={"bold"} fz={'12px'} ta="start">AED</Text>
                  </Flex>
                </Flex>
                </Flex>
              
            
          

          
          

          
        </Card>
      
    </>
  );
}

export default Thirdpage;
