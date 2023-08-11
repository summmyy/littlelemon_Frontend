import { 
        Heading,
        Box,
        Input,
        FormControl,
        FormLabel,
        Button,
        Container,
        Select,
        Text
        } from "@chakra-ui/react";
import Nav from "./nav";
import { useState } from "react";
import Footer from "./footer";
import axios from "axios";
// import axiosInstance from './axiosInstance';
// import axios from "axios";

function Booking(){



    // for sending data to the database
    const [data, setData] = useState({ });

      const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

      const handleChange = event => {
        const { name, value } = event.target;
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();


        try {
          const response = await axios.post(
            "http://127.0.0.1:8001/restaurant/booking/tables/",
            data
          );

          console.log("Success:", response.data);
          setIsBookingConfirmed(true);

          setData({ });
        } catch (error) {
          console.error("Error sending data:", error);
          console.error("Response status:", error.response.status);
          console.error("Response data:", error.response.data);
        }
      };



    return(
        <div>
            <Nav />
                <Box display="flex" justifyContent="center" alignItems="center" width="100vw" paddingLeft={110} paddingRight={120} padding={5}>
                    <Box width='30vw' borderWidth='1px' paddingBottom={10} paddingTop={30}>
                        <Container >
                            <Heading paddingLeft={5}> Make a Reservation</Heading>
                                <form onSubmit={handleSubmit}>
                                    <FormControl padding={5} >
                                        <FormLabel as='b' fontSize='lg'>Name:</FormLabel>
                                        <Input 
                                            value={data.name}
                                            onChange={handleChange}
                                            placeholder=" Your Name" 
                                            isRequired />
                                        <FormLabel as='b' fontSize='lg'>Guests:</FormLabel>
                                        <Select placeholder=" How many seats do you need?" isRequired value={data.no_of_guests} onChange={handleChange} >
                                            <option value='1'> 1</option>
                                            <option value='2'> 2</option>
                                            <option value='3'> 3</option>
                                            <option value='4'> 4</option>
                                            <option value='5'> 5</option>
                                            <option value='6'> 6</option>
                                            <option value='7'> 7</option>
                                            <option value='8'> 8</option>
                                            <option value='9'> 9+</option>
                                        </Select>
                                        <FormLabel as='b' fontSize='lg'>Time:</FormLabel>
                                        <Input 
                                            placeholder=" When will you be stopping by"  
                                            type="datetime-local" 
                                            value={data.BookingDate} 
                                            isRequired 
                                            onChange={handleChange}/>
                                        <FormLabel as='b' fontSize='lg'>Email:</FormLabel>
                                        <Input 
                                            placeholder=" We want to send you confirmation"
                                            value={data.email}
                                            onChange={handleChange}
                                            type="email"
                                            isRequired
                                            />
                                        <FormLabel as='b' fontSize='lg'> Phone Number: </FormLabel>
                                        <Input placeholder=" We'll send you a reminder so you're not late" type="number" value={data.phone_number} onChange={handleChange}/>
                                    </FormControl>
                                    <br />
                                        <Button 
                                        paddingLeft={60} 
                                        paddingRight={60} 
                                        bgColor='#495E57' 
                                        textColor='white'
                                        type="submit"
                                        _hover={{textColor : 'black', bgColor : 'yellow'}}
                                        > Reserve  </Button>
                            </form>
                            {isBookingConfirmed && <Text> Booking Confirmed. See you soon!</Text>}
                        </Container>
                    </Box>
                </Box>
            <Footer />
        </div>
    )
}

export default Booking;