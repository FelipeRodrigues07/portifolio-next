import React from "react";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardBody,
  Flex,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

function Contact() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex direction="column" w="100%" mt="0">
      <Navbar />
      <Flex direction="column">
        <Flex
          justifyContent="center"
          mt={{
            base: "120px",
            sm: "120px",
            md: "200px",
            lg: "150px",
            xl: "300px",
          }}
        >
          <Card
            w="880px"
            h={{ base: "570px", sm: "650px", md: "600px", lg: "520px" }}
            ml="35px"
            mr="35px"
            boxShadow="2xl"
          >
            <CardBody>
              <Text
                textAlign="center"
                fontSize={{ base: "18px", sm: "25px", md: "25px", lg: "25px" }}
                mt="10px"
                mb="5px"
                bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                bgClip="text"
              >
                Sobre mim
              </Text>

              <Text
                fontSize={{
                  base: "13px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                }}
                mt="10px"
                mb="5px"
              >
                Meu nome é Felipe Rodrigues e tenho dedicado minha carreira
                profissional a criar soluções robustas e eficientes, abraçando
                os desafios da web e do desenvolvimento mobile. Minha abordagem
                focada no usuário, aliada à minha experiência técnica, me
                capacita a entregar produtos de alta qualidade que atendem às
                necessidades e expectativas dos clientes.
              </Text>
              <Flex direction="row" w="100%">
                <Text
                  fontSize={{
                    base: "13px",
                    sm: "20spx",
                    md: "20px",
                    lg: "20px",
                  }}
                  color="#2B6CB0"
                  fontWeight="semibold"
                >
                  - Desenvolvendo interfaces e APIs com Javascript e Typescript
                </Text>
              </Flex>
              <Flex direction="row" w="100%">
                <Text
                  color="#2B6CB0"
                  fontWeight="semibold"
                  fontSize={{
                    base: "13px",
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                  }}
                >
                  - Cursando Engenharia de Software
                </Text>
              </Flex>

              <Flex boxShadow=" 0 1px 0 #fff" w="100%" h="15px"></Flex>
              <Text
                color="#2B6CB0"
                mt="5px"
                fontWeight="semibold"
                textAlign="center"
                fontSize={{
                  base: "13px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                }}
              >
                Tecnologias
              </Text>
              <Flex direction="row" justifyContent="center" mt="12px">
                <Button
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  fontSize="13px"
                >
                  <Text mr="5px">Typescript</Text>
                  {<SiTypescript fontSize="20px" color="#2F76C4" />}
                </Button>
                <Button
                  ml={{
                    base: "20px",
                    sm: "20px",
                    md: "40px",
                    lg: "60px",
                  }}
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  fontSize="13px"
                >
                  <Text mr="5px">NodeJS</Text>
                  {<FaNodeJs fontSize="20px" color="#3C8A43" />}
                </Button>
              </Flex>
              <Flex direction="row" justifyContent="center" mt="12px">
                <Button
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  fontSize="13px"
                >
                  <Text mr="5px">React</Text>
                  {<FaReact fontSize="20px" color="#2F76C4" />}
                </Button>
                <Button
                  ml={{
                    base: "20px",
                    sm: "20px",
                    md: "40px",
                    lg: "60px",
                  }}
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  fontSize="13px"
                >
                  <Text mr="5px">NextJS</Text>
                  {<SiNextdotjs fontSize="20px" />}
                </Button>
              </Flex>
              <Flex direction="row" justifyContent="center" mt="12px">
                <Button
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  fontSize="13px"
                >
                  <Text mr="5px">Javascript</Text>
                  {<SiJavascript fontSize="20px" color="#FFCC00" />}
                </Button>
                <Button
                  ml={{
                    base: "20px",
                    sm: "20px",
                    md: "40px",
                    lg: "60px",
                  }}
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  fontSize="13px"
                >
                  <Text mr="5px">MongoDB</Text>
                  {<SiMongodb fontSize="20px" color="#229952" />}
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Contact;
