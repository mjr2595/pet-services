import { Container, Stack, Heading, Button, Flex, Text, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Let's spread some{" "}
          <Text as={"span"} color={"#FF65C3"}>
            pawsitivity
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          At JessieHeartJace, we believe that pets are more than just animals; they are cherished members of the family.
          Our mission is to provide a safe, fun, and loving environment where your furry companions can thrive and be
          truly pampered.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Link href="#contact">
            <Button rounded={"full"} px={6} bg={"#BCD9FE"} _hover={{ bg: "#FF65C3" }}>
              Book a service!
            </Button>
          </Link>
          <Link href="#services">
            <Button rounded={"full"} px={6}>
              Learn more
            </Button>
          </Link>
        </Stack>
        <Flex>
          <Image src={logo} boxSize="400px" alt="JessieHeartJace Logo" />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Hero;
