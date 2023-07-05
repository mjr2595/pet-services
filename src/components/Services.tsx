import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack } from "@chakra-ui/react";
import { PiDogFill } from "react-icons/pi";

const services = [
  {
    id: 1,
    title: "15 minutes |  $15",
    text: "A quick walk or drop-in visit. Your choice!",
  },
  {
    id: 2,
    title: "20 minutes |  $18",
    text: "A schmedium-sized walk or drop-in visit. Your choice!",
  },
  {
    id: 3,
    title: "30 minutes |  $20",
    text: "The perfect amount of time for a good walk, water refresh, and mealtime! Or a drop-in visit - Your choice!",
  },
  {
    id: 4,
    title: "Pet Taxi |  Starts at $30 (base fare per ride)",
    text: "Includes 5 miles! $2 per additional mile. Transport for vet visits, grooming appointments, or wherever else!",
  },
  {
    id: 5,
    title: "Fun Outings | $65",
    text: "1 hour of playtime adventure (includes travel fee). +$30 for extra 30 minutes.",
  },
  {
    id: 6,
    title: "Extras: +$5 per pet | +$4 nights & weekends",
    text: "",
  },
];

const Services = () => {
  return (
    <Box id="services" p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Our Services</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Services include, but are not limited to, the following:
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
