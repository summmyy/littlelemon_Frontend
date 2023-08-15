import React from 'react';
import logo from './img/logo.png'
import { Center, HStack, VStack, Text } from '@chakra-ui/react'
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'


function Nav(){

    const navigate = useNavigate();

            function handleClick(event){
                event.preventDefault()
                navigate('/')
            }
            
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
        <nav>
            <VStack>
            <Center paddingTop={{base : 10,'2xl' : 27}} paddingBottom={5} paddingLeft={{base : 5}} paddingRight={{base : 5}}>
                <img src={logo} alt='little lemon logo' onClick={handleClick} _hover={{ cursor : 'pointer'}} />
            </Center>
            <Center>
                <HStack
                    padding={{ base : 1.5 ,'2xl' : 1.5}}
                    paddingLeft={{base : 12 , lg : 300, xl : 550,'2xl' : 675}}
                    paddingRight={{base : 8 ,lg : 300, xl : 550 ,'2xl' : 675}}
                    bgColor='#495E57'
                    textColor='white'
                    
                    >

                        {/* <ChakraLink as={ReactRouterLink}  to = '/' >
                        <Text fontSize='xl' paddingRight={5} paddingLeft={5} as='b' _hover={{ cursor : 'pointer'}} >  Home </Text>
                        </ChakraLink> */}
                        <ChakraLink as={ReactRouterLink} to = '/about' >
                        <Text fontSize='xl' paddingRight={5} as='b' _hover={{ cursor : 'pointer'}} >  About </Text>
                        </ChakraLink>
                        <ChakraLink as={ReactRouterLink} to = '/menu' >
                        <Text fontSize='xl' paddingRight={5} as='b' _hover={{ cursor : 'pointer'}}>  Menu </Text>
                        </ChakraLink>
                        <ChakraLink as={ReactRouterLink} to = '/booking' >
                        <Text fontSize='xl' paddingRight={5} as='b' _hover={{ cursor : 'pointer'}}>  Book </Text> 
                        </ChakraLink>
                        <ChakraLink as={ReactRouterLink} to = '/locations' >
                        <Text fontSize='xl' paddingRight={{ base : 5 ,'2xl' : 5}} as='b' _hover={{ cursor : 'pointer'}}>  Locations </Text>
                        </ChakraLink>
                </HStack>
            </Center>
            </VStack>
        </nav>
    )
}


export default Nav;