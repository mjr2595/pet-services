import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import { MdPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";

const Contact = () => {
  return (
    <Container id="contact" bg="#BCD9FE" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box bg="#02054B" color="white" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Please fill out the form to contact me, or leave me a voicemail.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        (512) 815-2561‬
                      </Button>

                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Greater Austin Area, TX
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form action="https://formsubmit.co/michaeljohnraymond@gmail.com" method="POST">
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
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Tell me a bit about yourself and your pets!"
                            name="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button type="submit" variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
