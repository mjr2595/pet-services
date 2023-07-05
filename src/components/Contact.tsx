import {
  Container,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Center,
} from "@chakra-ui/react";
import { MdPhone, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

const Contact = () => {
  const phoneNumber = "+15128152561";

  return (
    <>
      <Container id="contact" bg="#BCD9FE" maxW="full" mt={0} p={12} centerContent overflow="hidden">
        <Box bg="white" borderRadius="lg">
          <Box m={8} color="#0B0E3F">
            <Container maxW={"7xl"} py={3} as={Stack} spacing={12}>
              <Stack spacing={0} align={"center"}>
                <Heading>Contact</Heading>
                <Text>Please fill out the form to contact me. Can't wait to meet your furbaby!</Text>
              </Stack>
            </Container>

            <VStack py={3} as={"form"} action="https://formsubmit.co/michaeljohnraymond@gmail.com" method="POST">
              <FormControl id="name" isRequired>
                <FormLabel>Your Name</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                  <Input type="text" size="md" name="humanName" />
                </InputGroup>
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel>Email</FormLabel>
                <InputGroup borderColor="#E0E1E7">
                  <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                  <Input type="email" size="md" name="email" />
                </InputGroup>
              </FormControl>
              <FormControl id="name" isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  size={"sm"}
                  borderColor="gray.300"
                  _hover={{
                    borderRadius: "gray.300",
                  }}
                  placeholder="Tell me a bit about yourself and your pets!"
                  name="message"
                />
              </FormControl>
              <FormControl id="name" float="right">
                <Center pt={3}>
                  <Button type="submit" variant="solid" bg="#FF65C3" color="white" _hover={{}}>
                    Send Message
                  </Button>
                </Center>
              </FormControl>
              <Text pt={6}>Or call and leave a message</Text>
              <a href={`tel:${phoneNumber}`}>
                <Button rightIcon={<MdPhone />} colorScheme="blue" variant="outline">
                  Call us
                </Button>
              </a>
            </VStack>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
