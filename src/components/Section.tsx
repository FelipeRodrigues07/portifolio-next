import {
  Stack,
  Box,
  Text,
  useColorMode,
  useMediaQuery,
  Image,
  Button,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

function Section() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const router = useRouter();

  return (
    <Flex
      mt={{ base: "70px", sm: "70px", md: "100px", lg: "190px" }}
      w="100%"
      mx="auto"
      maxW={1000}
    >
      <SimpleGrid columnGap="20px" rowGap="20px" columns={[1, 2, 2]} w="100">
        <Flex justifyContent="center">
          <Box ml={{ base: "25px", sm: "30", md: "40px" }}>
            <Text
              fontSize={{ base: "25px", sm: "30px", md: "35px", lg: "3xl" }}
              fontWeight="semibold"
            >
              Olá, eu sou
            </Text>
            <Text
              fontSize={{ base: "40px", sm: "40px", md: "50px", lg: "60px" }}
              fontWeight="bold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              bgClip="text"
            >
              Felipe Rodrigues
            </Text>
            <Text color={isDark ? "gray.200" : "gray.500"}>
              Sou um engenheiro de software especializado na criação de
              aplicativos e sites de alto desempenho, com destaqueem tecnologias
              como NodeJs, Nextjs, Typescript, React-Native.
            </Text>
            <Button
              mt={8}
              colorScheme="blue"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Contrate-me
            </Button>
          </Box>
        </Flex>
        <Flex justifyContent="center">
          <Image
            alignSelf="center"
            mb={isNotSmallerScreen ? "0" : "12"}
            ml={{
              sm: "70px",
              md: "60px",
              lg: "130px",
              xl: "170px",
            }}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="300px"
            src="/perfil.jpg"
            alt="Felipe Rodrigues"
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}

export default Section;
