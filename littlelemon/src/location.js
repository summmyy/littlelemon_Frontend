import React from "react";
import { Box, 
        SimpleGrid,
        Heading,
        Text
         } from "@chakra-ui/react";
import Nav from "./nav";
import Footer from "./footer";


function Location(){
    return(
        <div>
            <Nav />
                <Box display="flex" justifyContent="center" alignItems="center" width="100vw" paddingLeft={110} paddingRight={130} paddingTop={10}>
                    <Box borderWidth='1px' paddingBottom={10} paddingTop={5} paddingLeft={205} paddingRight={205}>
                        <Heading as='h1' padding={5}> Our Locations </Heading>
                        <SimpleGrid columns={2} spacing={5} padding={5}>
                            <Box>
                                <iframe 
                                        title="Toronto"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.9097730385!2d-79.54286344224742!3d43.71837095794482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1691727098341!5m2!1sen!2sca"
                                        width="600" 
                                        height="450" 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <br />
                                <Text as='b' fontSize='xl'>Toronto, Canada:</Text>
                                <Text as='p' fontSize='lg'>1600 Amphitheatre Parkway, Toronto, ON M5T 2E9, Canada</Text>
                                <br />
                            </Box>
                            <Box>
                                <iframe 
                                        title="Denver"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196282.07838912224!2d-105.16692055437521!3d39.764185757612864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sca!4v1691727352359!5m2!1sen!2sca" 
                                        width="600" 
                                        height="450" 
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <br />
                                <Text as='b' fontSize='xl'>Denver, Colorado:</Text>
                                <Text as='p' fontSize='lg'>1234 Main Street, Denver, CO 80202, USA</Text>
                                <br />
                            </Box>
                            <Box>
                                <iframe 
                                        title="London"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.8398864259!2d-0.2664026641014581!3d51.528739805115784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sca!4v1691727450023!5m2!1sen!2sca" 
                                        width="600" 
                                        height="450"  
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <br />
                                <Text as='b' fontSize='xl'>London, UK:</Text>
                                <Text as='p' fontSize='lg'>10 Downing Street, London SW1A 2AA, United Kingdom</Text>
                                <br />
                            </Box>
                            <Box>
                                <iframe 
                                        title="Paris"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824597173!2d2.2646351233570434!3d48.85893843447295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sca!4v1691727545858!5m2!1sen!2sca" 
                                        width="600" 
                                        height="450"  
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                <br />
                                <Text as='b' fontSize='xl'>Paris, France:</Text>
                                <Text as='p' fontSize='lg'>1 Rue de la Paix, 75002 Paris, France</Text>
                                <br />
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Box>
            <Footer />
        </div>
    )
}

export default Location;