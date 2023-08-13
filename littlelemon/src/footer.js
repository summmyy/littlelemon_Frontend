import React from "react";
import footer from './img/logo_footer.png'
import {
        Center,
        Container,
        Divider,
        HStack,
        Image,
        Text,
} from '@chakra-ui/react'

function Footer(){

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
        <footer>
            <Center padding={4}  >
                <HStack bg='#EDEFEE' padding={{ base : 0 ,'2xl' : 5}} paddingTop={{ base : 5 ,'2xl' : 5}} paddingBottom={{ base : 5 ,'2xl' : 5}}  >
                        <Image src={footer} paddingRight={{ base : 10 ,'2xl' : 1060}} paddingLeft={{ base : 2 ,'2xl' : 3.5}}  />
                            <Container >
                                <Divider width={{ base : 250 ,'2xl' : 500}} borderWidth='1px' borderColor='black' />
                                <Text as='p' fontSize='lg' align='right' paddingBottom={0}> Little Lemon • © 2023</Text>
                            </Container>
                </HStack>
            </Center>
        </footer>
    )
}

export default Footer;