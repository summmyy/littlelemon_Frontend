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
        <div>
           <Nav />
           <br />
                <Box display="flex" justifyContent="center" alignItems="center" width="100vw" paddingLeft={{ base : 2.5 ,'2xl' : 110}} paddingRight={{ base : 2.5 ,'2xl' : 120}} >
                    <Box borderWidth='1px' paddingBottom={10}  >
                        <SimpleGrid columns={{ base : 1 ,'2xl' : 2}} spacing={5} >
                            <VStack align='flex-start' paddingLeft={5} paddingTop={30} padding={{ base : 5 ,'2xl' : 5}}>
                                <Heading as='h1' textAlign='left'> About Us </Heading>
                                <br />
                                <Text as='p' fontSize={{ base : 'lg' ,'2xl' : 'xl'}} >
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
                            <VStack align='flex-start' paddingTop={{ base : 25 ,'2xl' : 100}} padding={{ base : 5 ,'2xl' : 20}}>
                                <Image src={owners} width={{ base : 450 ,'2xl' : 800}} height={{ base : 300 ,'2xl' : 530}}/>
                                <Text as='p' fontSize={ {base : 'md' ,'2xl' : 'lg'}}> Little Lemon owners Mario and Adrian. </Text>
                            </VStack>
                        </SimpleGrid>
                    </Box>
                </Box>
           <Footer />
        </div>
    )
}

export default About;