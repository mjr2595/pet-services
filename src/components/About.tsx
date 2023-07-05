import { Container, Stack, Heading, Text, Image, Box, SimpleGrid } from "@chakra-ui/react";
import kendallandjessie from "../assets/kendallandjessie.jpeg";

const About = () => {
  return (
    <Container id="about" as={Stack} spacing={4} p={8} maxW={"3xl"} alignItems={"center"}>
      <Heading fontSize={"3xl"}>About me</Heading>
      <Box p={4}>
        <SimpleGrid id="aboutGrid" columns={{ base: 1, md: 2 }} spacing={10} justifyItems={"center"}>
          <Image src={kendallandjessie} alt="About Me" boxSize="300px" borderRadius="full" />
          <Text fontSize="lg">
            Hi there! My name is Kendall. I have a sweet Boston Terrier and an energetic Black Mouth Cur. I have
            experience working at a Veterinary Hospital so I’m used to being around furry friends. I'm fond of all
            breeds and sizes! Your dog (or cat!) will have an amazing time while being in safe hands. I’ll treat them
            like my own 🐶😻
          </Text>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default About;
