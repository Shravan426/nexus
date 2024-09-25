import {
    Button, Box, Text, Image, Flex, Drawer, Burger, MediaQuery, Divider,
    Title, Card, Grid, Container, Group, Stack, Menu, Table, ActionIcon, ScrollArea
  } from '@mantine/core';
  import { useState } from 'react';
  import useStyles from './style';
  import { IconDots } from '@tabler/icons-react';
  
  function Fourthpage() {
    const { classes } = useStyles();
  
    return (
      <>
        
          <Card bg={"white"} my={20}>
            <Card.Section>
              <Text c={'#004876'} ta="start" pl={20} mt={5} mb={-6} fz={12} fw={600} >
                PASSENGER INFORMATION
              </Text>
              <Divider my="sm" />
            </Card.Section>
            
            <ScrollArea>
              <Table striped >
                <thead style={{backgroundColor:'#E6E6E6'}}>
                  <tr>
                    <th style={{ color: '#243364',fontSize:'12px' }}>NAME</th>
                    <th style={{ color: '#243364',fontSize:'12px' }}>DATE OF BIRTH</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>EMAIL</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>CONTACT NUMBER</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>TYPE</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>E-TICKET NUMBER</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>PASSPORT NUMBER</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>PASSPORT ISSUED COUNTRY</th>
                    <th style={{ color: '#243364',fontSize:'12px' }}>PASSPORT EXPIRY</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>NATIONALITY</th>
                    <th style={{ color: '#243364' ,fontSize:'12px'}}>STATUS</th>
                    <th style={{ color: '#243364',fontSize:'12px'}}>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>Mr. Sanoop M S</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>21 Mar 1989</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>mail@example.com</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>+91 00 0000 0000 00</td>
                    <td style={{ color: '#757575',fontSize:'12px' }}>Adult</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>654GH78897</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>J7654329</td>
                    <td style={{ color: '#757575',fontSize:'12px' }}>Indian</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>21 Nov 2029</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>Indian</td>
                    <td style={{ color: '#757575' ,fontSize:'12px'}}>Ticketed</td>
                    <td>
                      <Menu>
                        <Menu.Target>
                          <ActionIcon variant="default">
                            <IconDots style={{ width: '1rem', height: '1rem' }} stroke={1.5} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown>
                          <Menu.Item>View Fare Summary</Menu.Item>
                          <Menu.Item>Void</Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </ScrollArea>
          </Card>
       
      </>
    );
  }
  
  export default Fourthpage;
  