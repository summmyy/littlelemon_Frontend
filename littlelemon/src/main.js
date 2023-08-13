import { Box,
         Button,
         Center,
         SimpleGrid,
         Text,
         VStack,
         HStack,
         Image,
         } from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import header_img from "./img/restaurant_inside.jpg"
import menu from './img/Grill.jpg'
import table from './img/salad.jpg'
import hours from './img/head_chef.jpg'

function Main(){

    const navigate = useNavigate();

            function handleClick(event){
                event.preventDefault()
                navigate('/booking')
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

    return(
        <main>
                <article>
                    <Center paddingTop={5} paddingBottom={5}>
                        <Box
                        bgImage={header_img}
                        width={{base : 800 ,xl : 1455,'2xl':1698}}
                        height={200}
                        backgroundPosition='center'
                        >
                            <Box
                                position="absolute"
                                width={{ base : 5 ,'2xl' : 1698}}
                                height={{ base : 5 ,'2xl' : 200}}
                                bg="rgba(0, 0, 0, 0)" // Adjust the opacity (last value) to control dimming
                                borderRadius="md"
                            />
                            <Center paddingTop={2.5} >
                                <VStack>
                                    <Text fontSize='5xl' as='b' textColor='white' > SPECIAL OFFER </Text>
                                    <Text fontSize='2xl' as='b' textColor='white'> 30% Off This Weekend </Text>
                                    <Button
                                    size='md'
                                    height='48px'
                                    width='200px'
                                    border='2px'
                                    borderColor='white'
                                    borderRadius={0}
                                    bg='clear'
                                    textColor='white'
                                    _hover={{bgColor : '#495E57', borderColor : '#495E57', cursor : 'pointer'}}
                                    onClick={handleClick}
                                    > Book Now </Button>
                                </VStack>
                            </Center>
                        </Box>
                    </Center>
                </article>
                <article>
                    <HStack>
                            <SimpleGrid columns={{ base : 1 , xl : 3,'2xl' : 3}} spacing={{ base : 5 ,'2xl' : 5}} paddingLeft={{ base : 5 ,'2xl' : 105}} paddingRight={{ base : 5 ,'2xl' : 105}}>
                                    <Box borderWidth='1px' padding={4}>
                                        <Text as='b' fontSize={{ base : '3xl' ,'2xl' : '3xl'}} >Our New Menu</Text>
                                        <Image src={menu} paddingTop={5} />
                                        <Text as='p' fontSize='xl' paddingTop={5} >Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.</Text>
                                        <ChakraLink as={ReactRouterLink} to='/menu'>
                                        <Text as='p' fontSize='lg' color='orange.400' _hover={{ cursor : 'pointer'}}> See our new menu </Text>
                                        </ChakraLink>
                                    </Box>
                                    <Box borderWidth='1px' padding={4}>
                                        <Text as='b' fontSize={{ base : '3xl' ,'2xl' : '3xl'}}>Book a table</Text>
                                        <Image src={table} paddingTop={5}  />
                                        <Text as='p' fontSize='xl' paddingTop={5}>Reserve your table for an Italian, Greek, and Turkish dining experience.</Text>
                                        <ChakraLink as={ReactRouterLink} to='/booking' >
                                        <Text as='p' fontSize='lg' color='orange.400' _hover={{ cursor : 'pointer'}}> Book your table now </Text>
                                        </ChakraLink>
                                    </Box>
                                    <Box borderWidth='1px' padding={4}>
                                        <Text as='b' fontSize={{ base : '3xl' ,'2xl' : '3xl'}} >Opening Hours</Text>
                                        <Image src={hours}  paddingTop={5}/>
                                        <Text as='p' fontSize='xl' paddingTop={5}>The Little Lemon Restaurant is open 7 days a week, <br /> except for  public holidays.</Text>
                                        <Text as='p' paddingLeft={10} paddingTop={5}>
                                            Mon - Fri: 2pm - 10pm <br />
                                            Sat: 2pm - 11pm <br />
                                            Sun: 2pm - 9pm <br />
                                        </Text>
                                    </Box>
                            </SimpleGrid>
                    </HStack>
                </article>
        </main>
    )
}

export default Main;