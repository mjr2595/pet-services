import { Box, Flex, HStack, Link, IconButton, useDisclosure, Stack } from "@chakra-ui/react";
import { PiDogFill } from "react-icons/pi";
import { CgMenu, CgClose } from "react-icons/cg";

type Section = {
  title: string;
  link: string;
};

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sections: Section[] = [
    { title: "Services", link: "#services" },
    { title: "Testimonials", link: "#testimonials" },
    { title: "About", link: "#about" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <PiDogFill size="30px" />
        <IconButton
          size={"lg"}
          icon={isOpen ? <CgClose /> : <CgMenu />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          px={4}
          onClick={isOpen ? onClose : onOpen}
          bg={""}
          _hover={{ bg: "" }}
          _focus={{ boxShadow: "" }}
        />

        <HStack spacing={8} alignItems={"center"} mx="auto">
          <HStack as={"nav"} spacing={10} display={{ base: "none", md: "flex" }}>
            {sections.map((section) => (
              <Link key={section.title} href={section.link}>
                {section.title}
              </Link>
            ))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {sections.map((section) => (
              <Link key={section.title} href={section.link}>
                {section.link}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
