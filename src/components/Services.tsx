import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack } from "@chakra-ui/react";
import { PiDogFill } from "react-icons/pi";

// placeholder
const services = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

const Services = () => {
  return (
    <Box id="services" p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Our Services</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {services.map((service) => (
            <HStack key={service.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={PiDogFill} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{service.title}</Text>
                <Text color={"gray.600"}>{service.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Services;
