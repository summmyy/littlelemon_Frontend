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
    return(
        <footer>
            <Center padding={4}  >
                <HStack bg='#EDEFEE' padding={1.5} paddingTop={5} paddingBottom={5}  >
                        <Image src={footer} paddingRight={1060} paddingLeft={3.5}  />
                            <Container >
                                <Divider width={500} borderWidth='1px' borderColor='black' />
                                <Text as='p' fontSize='lg' align='right' paddingBottom={0}> Little Lemon • © 2023</Text>
                            </Container>
                </HStack>
            </Center>
        </footer>
    )
}

export default Footer;