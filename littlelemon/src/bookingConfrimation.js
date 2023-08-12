import React from "react";
import Nav from './nav'
import Footer from "./footer";
import { Heading, Box, } from "@chakra-ui/react";


function BookingConfirmation(){


    return(
        <div>
            <Nav />
                <Box display="flex" justifyContent="center" alignItems="center" width="100vw" paddingLeft={110} paddingRight={120} padding={5} paddingBottom={450} >
                    <Box width='35vw' borderWidth='0px' paddingBottom={10} paddingTop={30} >
                        <Heading> Booking Confirmed. See you soon! 😊🍋 </Heading>
                    </Box>
                </Box>
            <Footer />
        </div>
    )
}

export default BookingConfirmation;