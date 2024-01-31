import React from "react";
import Navbar from "@/components/Navbar";
import {
  Image,
  Card,
  CardBody,
  Flex,
  SimpleGrid,
  Button,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function Projects() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex direction="column" w="100%" mt="0">
      <Navbar />
      <Flex direction="column">
        <Flex
          w="100%"
          justifyContent="center"
          mt={{ base: "100px", sm: "100px", md: "100px", lg: "150px" }}
        >
          <Text fontSize={{ base: "22px", sm: "22px", md: "30px", lg: "30px" }}>
            Projetos
          </Text>
        </Flex>
        <Flex justifyContent="center" mt="40px">
          <SimpleGrid
            columnGap="35px"
            rowGap="50px"
            columns={[1, 2, 2, 3]}
            w="100"
          >
            <Card w="270px" h="400px" boxShadow="2xl">
              <CardBody>
                <Image
                  h="175px"
                  src="/project.jpeg"
                  alt="image not available"
                  borderRadius="lg"
                />
                <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="10px"
                  mb="5px"
                  color="#2B6CB0"
                >
                  FRSstore
                </Text>
                <Text fontSize="13px">
                  Descrição: interface uma loja virtual com uma interface
                  intuitiva.
                </Text>
                <Text fontSize="13px" mt="10px" mb="5px">
                  Tecnologias: TypeScript, NextJS, ChakraUI.
                </Text>
                <Flex justifyContent="center">
                  <Button
                    size="sm"
                    mt={5}
                    backgroundColor="#808080"
                    onClick={() =>
                      window.open(
                        "https://github.com/FelipeRodrigues07/frsstore-next.git"
                      )
                    }
                    fontSize="13px"
                  >
                    <Text mr="5px">Repositório</Text>
                    {<FaGithub fontSize="20px" />}
                  </Button>
                </Flex>
              </CardBody>
            </Card>
            <Card w="270px" h="400px" boxShadow="2xl">
              <CardBody>
                <Image
                  src="/cadastro.jpeg"
                  h="175px"
                  alt="image not available"
                  borderRadius="lg"
                />
                <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="10px"
                  mb="5px"
                  color="#2B6CB0"
                >
                  Inventory-Control-NextJS
                </Text>
                <Text fontSize="13px">
                  Descrição: Sistema de Gerenciamento de estoque.
                </Text>
                <Text fontSize="13px" mt="10px" mb="5px">
                  Tecnologias: TypeScript, NextJS, ChakraUI
                </Text>
                <Flex direction="row">
                  <Button
                    size="sm"
                    mt={5}
                    colorScheme="blue"
                    onClick={() =>
                      window.open(
                        "https://inventory-control-next-js.vercel.app/"
                      )
                    }
                    fontSize="13px"
                  >
                    Ver Projeto
                  </Button>
                  <Button
                    ml="12px"
                    size="sm"
                    mt={5}
                    backgroundColor="#808080"
                    onClick={() =>
                      window.open(
                        "https://github.com/FelipeRodrigues07/Inventory-Control-NextJS-ChakraUI.git"
                      )
                    }
                    fontSize="13px"
                  >
                    <Text mr="5px">Repositório</Text>
                    {<FaGithub fontSize="20px" />}
                  </Button>
                </Flex>
              </CardBody>
            </Card>
            <Card w="270px" h="400px" boxShadow="2xl">
              <CardBody>
                <Image
                  h="175px"
                  src="/api.jpeg"
                  alt="image not available"
                  borderRadius="lg"
                />
                <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="10px"
                  mb="5px"
                  color="#2B6CB0"
                >
                  Api-TypeScript-next
                </Text>
                <Text fontSize="13px">
                  Descrição: É uma API REST abrangente com operações CRUD de
                  usuário
                </Text>
                <Text fontSize="13px" mt="10px" mb="5px">
                  Tecnologias: TypeScript, ExpressJS, MongoDB, NodeJS.
                </Text>
                <Flex justifyContent="center">
                  <Button
                    size="sm"
                    mt={5}
                    backgroundColor="#808080"
                    onClick={() =>
                      window.open(
                        "https://github.com/FelipeRodrigues07/api-typescript-users.git"
                      )
                    }
                    fontSize="13px"
                  >
                    <Text mr="5px">Repositório</Text>
                    {<FaGithub fontSize="20px" />}
                  </Button>
                </Flex>
              </CardBody>
            </Card>
            <Card w="270px" h="400px" boxShadow="2xl">
              <CardBody>
                <Image
                  h="175px"
                  src="/crud.jpeg"
                  alt="image not available"
                  borderRadius="lg"
                />
                <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="10px"
                  mb="5px"
                  color="#2B6CB0"
                >
                  crud-node
                </Text>
                <Text fontSize="13px">
                  Software que oferece uma experiência de usuário eficiente,
                  permitindo a manipulação de dados em tempo real.
                </Text>
                <Text fontSize="13px" mt="10px" mb="5px">
                  Tecnologias: NodeJS, Express e SQL .
                </Text>
                <Flex justifyContent="center">
                  <Button
                    size="sm"
                    mt={5}
                    backgroundColor="#808080"
                    onClick={() =>
                      window.open(
                        "https://github.com/FelipeRodrigues07/crud-node.git"
                      )
                    }
                    fontSize="13px"
                  >
                    <Text mr="5px">Repositório</Text>
                    {<FaGithub fontSize="20px" />}
                  </Button>
                </Flex>
              </CardBody>
            </Card>
            <Card w="270px" h="400px" boxShadow="2xl">
              <CardBody>
                <Image
                  h="175px"
                  src="/unlocking.jpeg"
                  alt="image not available"
                  borderRadius="lg"
                />
                <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="10px"
                  mb="5px"
                  color="#2B6CB0"
                >
                  UnlockingEnglish
                </Text>
                <Text fontSize="13px">
                  Site sobre um curso de Inglês.
                </Text>
                <Text fontSize="13px" mt="10px" mb="5px">
                Tecnologias: TypeScript, NextJS, ChakraUI
                </Text>
                <Flex justifyContent="center">
                <Button
                    size="sm"
                    mt="36px"
                    colorScheme="blue"
                    onClick={() =>
                      window.open(
                        "https://unlocking-english.vercel.app/"
                      )
                    }
                    fontSize="13px"
                  >
                    Ver Projeto
                  </Button>
                </Flex>
              </CardBody>
            </Card>
            <Card w="270px" h="400px" boxShadow="2xl">
              <CardBody>
                <Image
                  h="175px"
                  src="/app.png"
                  alt="image not available"
                  borderRadius="lg"
                />
                <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="10px"
                  mb="5px"
                  color="#2B6CB0"
                >
                  app-frshealth
                </Text>
                <Text fontSize="13px">
                  Descrição: Aplicativo para calcular seu Índice de Massa
                  Corporal (IMC) e de forma rápida e precisa.
                </Text>
                <Text fontSize="13px" mt="10px" mb="5px">
                  Tecnologias: React Native, Javascript.
                </Text>
                <Flex justifyContent="center">
                  <Button
                    size="sm"
                    mt={5}
                    backgroundColor="#808080"
                    onClick={() =>
                      window.open(
                        "https://github.com/FelipeRodrigues07/app-frshealth.git"
                      )
                    }
                    fontSize="13px"
                  >
                    <Text mr="5px">Repositório</Text>
                    {<FaGithub fontSize="20px" />}
                  </Button>
                </Flex>
              </CardBody>
            </Card>
            <Card w="270px" h="400px" boxShadow="2xl">
              <CardBody>
                <Image
                  h="175px"
                  src="/energy.jpeg"
                  alt="image not available"
                  borderRadius="lg"
                />
                <Text
                  textAlign="center"
                  fontSize="20px"
                  mt="10px"
                  mb="5px"
                  color="#2B6CB0"
                >
                  openergy-web
                </Text>
                <Text fontSize="13px">
                  Software que oferece informações sobre fontes de energia limpa
                  e sustentável.
                </Text>
                <Text fontSize="13px" mt="10px" mb="5px">
                  Tecnologias: React Native, Javascript.
                </Text>
                <Flex justifyContent="center">
                  <Button
                    size="sm"
                    mt={5}
                    backgroundColor="#808080"
                    onClick={() =>
                      window.open(
                        "https://github.com/FelipeRodrigues07/openergy-web.git"
                      )
                    }
                    fontSize="13px"
                  >
                    <Text mr="5px">Repositório</Text>
                    {<FaGithub fontSize="20px" />}
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        boxShadow={isDark ? " 0 1px 0 #fff" : "0 1px 0 #000000"}
        h="15px"
        mb={{ base: "18px", sm: "25px", md: "30px", lg: "40px" }}
        mt="100px"
      ></Flex>
      <Flex
        direction="row"
        justifyContent="center"
        w="50%"
        mx="auto"
        mb={{ base: "18px", sm: "25px", md: "30px", lg: "40px" }}
      >
        <Text fontSize={{ base: "8px", sm: "15px", md: "15px", lg: "15px" }}>
          © 2023 Felipe Rodrigues. All Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
}

export default Projects;
