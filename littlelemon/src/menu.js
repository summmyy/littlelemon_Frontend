import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './nav';
import {
        Heading,
        Box,
        SimpleGrid,
        Text,
        Image
      } from '@chakra-ui/react';
import Footer from './footer';


function Menu() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('http://127.0.0.1:8001/restaurant/menu/menu-items/')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.error('Error fetching data', err);
      });
  }, []);


  return (
    <div>
      <Nav />
        <Box display="flex" justifyContent="center" alignItems="center" width="100vw" paddingLeft={110} paddingRight={120} paddingTop={10}>
          <Box borderWidth='1px' paddingBottom={10} paddingTop={5} >
             <Heading as='h1' padding={5}> Today's Menu </Heading>
                  <SimpleGrid columns={3} spacing={8} padding={5}>
                  {data.map((value, index) => (
                      <Box key={index}>
                        <Image src={value.image}/>
                        <Text as='b' fontSize='2xl'>{value.title}</Text> <br/>
                        <Text as='b' fontSize='lg'>{value.price}</Text>
                        <Text as='p' fontSize='lg'>{value.description}</Text>
                      </Box>
                ))}
                </SimpleGrid>
          </Box>
        </Box>
      <Footer />
    </div>
  );
}

export default Menu;
