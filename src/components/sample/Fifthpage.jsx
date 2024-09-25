import {
    Button, Box, Text, Flex, Card, Table, Anchor, ScrollArea, MediaQuery,Divider
  } from '@mantine/core';
  import { useState } from 'react';
  import useStyles from './style';
  
  function Fifthpage() {
    const { classes } = useStyles();
  
    return (
      <>
        
          
          <MediaQuery
            smallerThan="sm"
            styles={{ flexDirection: 'column', gap: '0' }}
          >
            <Flex justify="space-between"  my={20}>
              
              <Card bg={"white"} w={{ base: '100%', sm: '48%' }}>
                <Card.Section>
                  <Text c={"#004876"} ta="start" pl={25} mt={5} mb={-6} fz={12} fw={600}>ANCILLARY INFORMATION</Text>
                  <Divider my="sm" />
                </Card.Section>
                <ScrollArea>
                  <Table>
                    <thead style={{backgroundColor:'#E6E6E6'}}> 
                      <tr>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>SEGMENT</th>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>PAX TYPE</th>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>TICKET NUMBER</th>
                        <th style={{ color: '#243364',fontSize:'12px' }}>ANCILLARY</th>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: '#757575' ,fontSize:'12px'}}><Text ta="start">Lorem</Text></td>
                        <td style={{ color: '#757575' ,fontSize:'12px'}}><Text ta="start">Adult</Text></td>
                        <td style={{ color: '#757575',fontSize:'12px' }}><Text ta="start">86JK644ZA</Text></td>
                        <td style={{ color: '#757575',fontSize:'12px' }}><Text ta="start">Lorem Ipsum</Text></td>
                        <td style={{ color: '#1CC653',fontSize:'12px' }}><Anchor color={'#1CC653'}><Text ta="start">View More</Text></Anchor></td>
                      </tr>
                    </tbody>
                  </Table>
                </ScrollArea>
              </Card>
  
              
              <Card bg={"white"} w={{ base: '100%', sm: '48%' }}>
                <Card.Section>
                  <Text c={"#004876"} ta="start" pl={25} mt={5} mb={-6} fz={12} fw={600} >BAGGAGE INFORMATION</Text>
                  <Divider my="sm" />
                </Card.Section>
                <ScrollArea>
                  <Table>
                    <thead style={{backgroundColor:'#E6E6E6'}}>
                      <tr>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>SEGMENT</th>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>TICKET NUMBER</th>
                        <th style={{ color: '#243364',fontSize:'12px' }}>PAX TYPE</th>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>CHECK-IN</th>
                        <th style={{ color: '#243364' ,fontSize:'12px'}}>CABIN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ color: '#757575' ,fontSize:'12px'}}><Text ta="start">Lorem</Text></td>
                        <td style={{ color: '#757575' ,fontSize:'12px'}}><Text ta="start">86JK644ZA</Text></td>
                        <td style={{ color: '#757575' ,fontSize:'12px'}}><Text ta="start">Adult</Text></td>
                        <td style={{ color: '#757575',fontSize:'12px' }}><Text ta="start">25 KG</Text></td>
                        <td style={{ color: '#757575' ,fontSize:'12px'}}><Text ta="start">7 KG</Text></td>
                      </tr>
                    </tbody>
                  </Table>
                </ScrollArea>
              </Card>
            </Flex>
          </MediaQuery>
        
      </>
    );
  }
  
  export default Fifthpage;
  