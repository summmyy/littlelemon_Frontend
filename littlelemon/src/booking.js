import { 
        Heading,
        Box,
        Input,
        FormControl,
        FormLabel,
        Button,
        Container,
        Select,
        } from "@chakra-ui/react";
import Nav from "./nav";
import { useState } from "react";
import Footer from "./footer";
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function Booking(){


  const navigate = useNavigate();


    // data to be sent to the database. each field has to be listed one at a time

      const [name, setName] = useState('');
      const [no_of_guests, setNo_of_guests] = useState('');
      const [BookingDate, setBookingDate] = useState('');
      const [email, setEmail] = useState('');
      const [phone_number, setPhone_number] = useState('');

      // eslint-disable-next-line
      const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);


      // function sending data to the server to be saved in the database
      // reference this video is you ever get stuck on this again. - https://www.youtube.com/watch?v=xjWwnqMn-b0&ab_channel=CodingAddict


      const handleSubmit = async (event) => {
        event.preventDefault();
        const bookingUrl = "http://127.0.0.1:8001/restaurant/booking/tables/"

        try {
          const response = await axios.post(
            bookingUrl,
            {
              name : name,
              no_of_guests : no_of_guests,
              BookingDate : BookingDate,
              email : email,
              phone_number : phone_number
            }
          );

          console.log("Success:", response.data);
          setIsBookingConfirmed(true);

          navigate('/booking/confirmation')

          setName('');
          setNo_of_guests('');
          setBookingDate('');
          setEmail('');
          setPhone_number('');


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
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder=" Your Name" 
                                            isRequired />
                                        <FormLabel as='b' fontSize='lg'>Guests:</FormLabel>
                                        <Select placeholder=" How many seats do you need?" isRequired value={no_of_guests} onChange={(e) => setNo_of_guests(e.target.value)} >
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
                                            value={BookingDate} 
                                            isRequired 
                                            onChange={(e) => setBookingDate(e.target.value)}/>
                                        <FormLabel as='b' fontSize='lg'>Email:</FormLabel>
                                        <Input 
                                            placeholder=" We want to send you confirmation"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            isRequired
                                            />
                                        <FormLabel as='b' fontSize='lg'> Phone Number: </FormLabel>
                                        <Input placeholder=" We'll send you a reminder so you're not late" type="number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)}/>
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
                        </Container>
                    </Box>
                </Box>
            <Footer />
        </div>
    )
}

export default Booking;