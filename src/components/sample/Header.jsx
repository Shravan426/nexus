import { Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider } from '@mantine/core';
import { useState } from 'react';
import useStyles from './style';
import nexus from './images/Screenshot 2024-09-18 112104.png';
import Home from './images/SVGRepo_iconCarrier.jpg';
import Dashboard from './images/Screenshot 2024-09-18 113406.png';
import Trips from './images/plane.jpg';
import Activity from './images/Component 18 – 143.jpg';
import Dirhams from './images/Screenshot 2024-09-18 115011.png';
import Alert from './images/Screenshot 2024-09-18 115809.png';
import MaskGroup1 from './images/Mask Group 1.jpg';

function Header() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Box bg="white"  >
        
          <Flex gap="md" justify="space-between" px={50} align="center" direction="row" wrap="wrap">
            
            <Image src={nexus} width={150} />

           
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
            </MediaQuery>

            
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Flex gap="md" align="center">
                <Flex gap="xs">
                  <Image src={Home} width={20} />
                  <Text c={'#757575'} fz={'16px'}>
                    Home
                  </Text>
                </Flex>
                <Flex gap="xs">
                  <Image src={Dashboard} width={20} />
                  <Text c={'#757575'} fz={'16px'}>
                    Dashboard
                  </Text>
                </Flex>
                <Flex gap="xs">
                  <Image src={Trips} width={20} pt={5}/>
                  <Text c={'#757575'} fz={'16px'}>
                    My Trips & Expenses
                  </Text>
                </Flex>
                <Flex gap="xs">
                  <Image src={Activity} width={20} pt={6} />
                  <Text c={'#757575'} fz={'16px'}>
                    Activity
                  </Text>
                </Flex>
                <Flex gap="xs">
                  <Image src={Dirhams} width={20} pt={5}/>
                  <Text c={'#757575'} fz={'16px'}>
                    AED 15,000
                  </Text>
                </Flex>
                <Image src={Alert} width={20} />
                <Image src={MaskGroup1} width={40} />
              </Flex>
            </MediaQuery>
          </Flex>

          <Divider size="xs"  mt={15}/>

          
          <Drawer opened={opened} onClose={() => setOpened(false)} title="Menu" padding="md" size="sm">
            <Flex direction="column" gap="md">
              <Flex gap="xs">
                <Image src={Home} width={20} />
                <Text c={'#757575'} fz={'16px'}>
                  Home
                </Text>
              </Flex>
              <Flex gap="xs">
                <Image src={Dashboard} width={20} />
                <Text c={'#757575'} fz={'16px'}>
                  Dashboard
                </Text>
              </Flex>
              <Flex gap="xs">
                <Image src={Trips} width={20} />
                <Text c={'#757575'} fz={'16px'}>
                  My Trips & Expenses
                </Text>
              </Flex>
              <Flex gap="xs">
                <Image src={Activity} width={20} />
                <Text c={'#757575'} fz={'16px'}>
                  Activity
                </Text>
              </Flex>
              <Flex gap="xs">
                <Image src={Dirhams} width={20} />
                <Text c={'#757575'} fz={'16px'}>
                  AED 15,000
                </Text>
              </Flex>
            </Flex>
          </Drawer>

          
          <Text c={'#243364'} fz={'16px'} ta={'center'} py={10} fw={'bold'}>
            Flight Booking Information
          </Text>
          <Divider size="sm" color="#1CC653" />
        
      </Box>
    </>
  );
}

export default Header;
