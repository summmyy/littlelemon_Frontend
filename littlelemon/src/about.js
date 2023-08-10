import {
         VStack, 
         Text, 
         Heading, 
         Image, 
         SimpleGrid,
         Box
        } from '@chakra-ui/react';
import Nav from './nav'
import Footer from './footer';
import owners from './img/mario-and-adrian.jpg'

function About(){
    return(
        <div>
           <Nav />
           <br />
                <Box display="flex" justifyContent="center" alignItems="center" width="100vw" paddingLeft={110} paddingRight={120} >
                    <Box borderWidth='1px' paddingBottom={10}  >
                        <SimpleGrid columns={2} spacing={5} >
                            <VStack align='flex-start' paddingLeft={5} paddingTop={30}>
                                <Heading as='h1' textAlign='left'> About Us </Heading>
                                <br />
                                <Text as='p' fontSize='xl' >
                                        Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. <br />
                                        <br/>
                                        The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. <br />
                                        <br/>
                                        The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day. <br />
                                        <br/>
                                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. <br />
                                        <br/>
                                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. <br/>
                                        <br/>
                                        Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the mediterranean region. <br />
                                </Text>
                            </VStack>
                            <VStack align='flex-start' paddingTop={100}>
                                <Image src={owners} width={800} height={530}/>
                                <Text as='p' fontSize='lg'> Little Lemon owners Mario and Adrian. </Text>
                            </VStack>
                        </SimpleGrid>
                    </Box>
                </Box>
           <Footer />
        </div>
    )
}

export default About;