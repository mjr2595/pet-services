import { Container, Stack, Heading, Button, Flex, Text, Image, Box, SimpleGrid } from "@chakra-ui/react";
import kendallandjessie from "../assets/kendallandjessie.jpeg";

const About = () => {
  return (
    <Container id="about" as={Stack} spacing={4} p={8} maxW={"3xl"} alignItems={"center"}>
      <Heading fontSize={"3xl"}>About me</Heading>
      <Box p={4}>
        <SimpleGrid id="aboutGrid" columns={{ base: 1, md: 2 }} spacing={10} justifyItems={"center"}>
          <Image src={kendallandjessie} alt="About Me" boxSize="300px" borderRadius="full" />
          <Text fontSize="lg">
            Hello! I'd love to meet your furbaby! Hello! I'd love to meet your furbaby! Hello! I'd love to meet your
            furbaby! Hello! I'd love to meet your furbaby! Hello! I'd love to meet your furbaby! Hello! I'd love to meet
            your furbaby!Hello! I'd love to meet your furbaby!
          </Text>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default About;
