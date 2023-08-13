import React from "react";
import Nav from './nav'
import Footer from "./footer";
import { Heading, Box, } from "@chakra-ui/react";


function BookingConfirmation(){

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