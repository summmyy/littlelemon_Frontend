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


  // eslint-disable-next-line
  const breakpoints = {
    base : '0em',
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  }

  return (
    <div>
      <Nav />
        <Box display="flex" justifyContent="center" alignItems="center" width="100vw" paddingLeft={{ base : 5 ,'2xl' : 110}} paddingRight={{ base : 5 ,'2xl' : 120}} paddingTop={10}>
          <Box borderWidth='1px' paddingBottom={10} paddingTop={5} >
             <Heading as='h1' padding={5}> Today's Menu </Heading>
                  <SimpleGrid columns={{ base : 1 ,xl : 3,'2xl' : 3}} spacing={8} padding={15}>
                  {data.map((value, index) => (
                      <Box key={index}  borderRadius='lg' >
                        <Image src={value.image} borderRadius='lg'/>
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
