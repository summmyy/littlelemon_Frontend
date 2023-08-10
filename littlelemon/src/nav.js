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


    return (
        <nav>
            <VStack>
            <Center paddingTop={27} paddingBottom={5}>
                <img src={logo} alt='little lemon logo' onClick={handleClick} _hover={{ cursor : 'pointer'}} />
            </Center>
            <Center>
                <HStack padding={1.5} paddingLeft={625} paddingRight={625} bgColor='#495E57' textColor='white' >
                        <ChakraLink as={ReactRouterLink}  to = '/' >
                        <Text fontSize='xl' paddingRight={5} paddingLeft={5} as='b' _hover={{ cursor : 'pointer'}} >  Home </Text>
                        </ChakraLink>
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
                        <Text fontSize='xl' paddingRight={5} as='b' _hover={{ cursor : 'pointer'}}>  Locations </Text>
                        </ChakraLink>
                </HStack>
            </Center>
            </VStack>
        </nav>
    )
}


export default Nav;