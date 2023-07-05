import { ReactNode } from "react";
import { Box, Flex, Heading, Text, Stack, Container, useColorModeValue, Image } from "@chakra-ui/react";
import p1 from "../assets/pet-pics/dogandcat.png";
import p2 from "../assets/pet-pics/jaxx.png";
import p3 from "../assets/pet-pics/rubyandcooper.png";
import p4 from "../assets/pet-pics/whitedogs.png";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={"center"} color={useColorModeValue("gray.600", "gray.400")} fontSize={"md"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Image src={src} mb={2} borderRadius={"lg"} boxSize="100px" objectFit="cover" />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

const Testimonials = () => {
  return (
    <Box id="testimonials" bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Happy Pets, Happy People!</Heading>
          <Text>Don't just take my word for it :)</Text>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                “Such a kind person and great caregiver! Went above and beyond for us and gave our pets lots of love!”
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={p1} name={"Human: Leah"} title={"Pets: Sturgill & Ginty"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                “I’ve tried other sitters but Kendall is the only person I trust with Jaxx”
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={p2} name={"Human: Georgia"} title={"Pet: Jaxx"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                “I said ‘Kendall’ and Cooper looked towards the front door, Ruby is a bit sad she definitely misses you!
                Tells us that you're so good to them, thank you!”
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={p3} name={"Humans: Nick & Noelia"} title={"Pets: Ruby & Cooper"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>"Kendall is the best!"</TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={p4} name={"Human: Brennen"} title={"Pets: Casper & Winter"} />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
