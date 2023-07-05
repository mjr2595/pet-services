import { ReactElement } from "react";
import { Box, Icon, Text, Stack, Flex, Container } from "@chakra-ui/react";
import { FcApproval, FcOldTimeCamera } from "react-icons/fc";
import { MdWaterDrop, MdMedication } from "react-icons/md";
import { BiSolidTennisBall } from "react-icons/bi";

interface FeatureProps {
  title: string;
  text?: string;
  icon: ReactElement;
}

const Feature = ({ title, icon }: FeatureProps) => {
  return (
    <Stack align={"center"} m={4}>
      <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"gray.100"} mb={1}>
        {icon}
      </Flex>
      <Text align={"center"} fontWeight={600}>
        {title}
      </Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <Container maxW={"5xl"} p={4}>
      <Text textAlign={"center"} align={"center"} fontSize="2xl">
        Always included!
      </Text>
      <Box p={4}>
        <Flex flexWrap="wrap" gridGap={4} justify="center">
          <Feature icon={<Icon as={FcApproval} w={10} h={10} />} title={"12+ years experience"} />
          <Feature icon={<Icon as={MdWaterDrop} w={10} h={10} color={"blue.200"} />} title={"Water refresh"} />
          <Feature
            icon={<Icon as={MdMedication} w={10} h={10} color={"red.500"} />}
            title={"Medication administration"}
          />
          <Feature icon={<Icon as={BiSolidTennisBall} w={10} h={10} color={"yellow.400"} />} title={"Play time"} />
          <Feature icon={<Icon as={FcOldTimeCamera} w={10} h={10} />} title={"Photo updates"} />
        </Flex>
      </Box>
    </Container>
  );
};

export default Features;
