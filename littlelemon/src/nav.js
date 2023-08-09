import React from 'react';
import logo from './img/logo.png'
import { Center, HStack, VStack, Text } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

<ChakraLink as={ReactRouterLink} to='/home'>
  Home
</ChakraLink>

function Nav(){

    // const navigate = useNavigate();

    //         function handleClick(event){
    //             event.preventDefault()
    //             navigate('/')
    //         }


    return (
        <nav>
            <VStack>
            <Center paddingTop={27} paddingBottom={5}>
                <img src={logo} alt='little lemon logo' />
            </Center>
            <Center>
                <HStack padding={1.5} paddingLeft={680} paddingRight={680} bgColor='#495E57' textColor='white' >
                        <ChakraLink as={ReactRouterLink}  to = '/' _hover={{ cursor : 'pointer'}}>
                        <Text fontSize='xl' paddingRight={5} paddingLeft={5} as='b' >  Home </Text>
                        </ChakraLink>
                        <ChakraLink as={ReactRouterLink} to = '/about' _hover={{ cursor : 'pointer'}}>
                        <Text fontSize='xl' paddingRight={5} as='b' >  About </Text>
                        </ChakraLink>
                        <ChakraLink as={ReactRouterLink} to = '/menu' _hover={{ cursor : 'pointer'}}>
                        <Text fontSize='xl' paddingRight={5} as='b'>  Menu </Text>
                        </ChakraLink>
                        <ChakraLink as={ReactRouterLink} to = '/booking' _hover={{ cursor : 'pointer'}}>
                        <Text fontSize='xl' paddingRight={5} as='b'>  Book </Text>
                        </ChakraLink>
                </HStack>
            </Center>
            </VStack>
        </nav>
    )
}


export default Nav;