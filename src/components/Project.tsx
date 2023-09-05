import React from "react";
import {
  Image,
  Card,
  CardBody,
  Flex,
  SimpleGrid,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

function Project() {
  return (
    <Flex direction="column">
      <Flex
        w="100%"
        justifyContent="center"
        mt={{ base: "70px", sm: "70px", md: "100px", lg: "150px" }}
      >
        <Text fontSize={{ base: "22px", sm: "40px", md: "50px", lg: "30px" }}>
          Principais Projetos
        </Text>
      </Flex>
      <Flex justifyContent="center" mt="40px">
        <SimpleGrid
          columnGap="35px"
          rowGap="20px"
          columns={[1, 2, 2, 3]}
          w="100"
        >
          <Card w="270px" h="400px">
            <CardBody>
              <Image
                src="/project.jpeg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Text
                textAlign="center"
                fontSize="20px"
                mt="10px"
                mb="5px"
                color="#2B6CB0"
              >
                Api-typscript-next
              </Text>
              <Text fontSize="13px">
                Descrição: Sistema de Gerenciamento de estoque.
              </Text>
              <Text fontSize="13px" mt="10px" mb="5px">
                Tecnologias: Typscript,NextJS, ChakraUI
              </Text>
              <Flex direction="row">
                <Button
                  size="sm"
                  mt={5}
                  colorScheme="blue"
                  onClick={() => window.open("https://pawan.live")}
                  fontSize="13px"
                >
                  Ver Projeto
                </Button>
                <Button
                  ml="12px"
                  size="sm"
                  mt={5}
                  backgroundColor="#808080"
                  onClick={() => window.open("https://pawan.live")}
                  fontSize="13px"
                >
                  <Text mr="5px">Repositório</Text>
                  {<FaGithub fontSize="20px" />}
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Card w="270px" h="400px">
            <CardBody>
              <Image
                src="/project.jpeg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Text
                textAlign="center"
                fontSize="20px"
                mt="10px"
                mb="5px"
                color="#2B6CB0"
              >
                Api-typscript-next
              </Text>
              <Text fontSize="13px">
                Descrição: Sistema de Gerenciamento de estoque.
              </Text>
              <Text fontSize="13px" mt="10px" mb="5px">
                Tecnologias: Typscript,NextJS, ChakraUI
              </Text>
              <Flex direction="row">
                <Button
                  size="sm"
                  mt={5}
                  colorScheme="blue"
                  onClick={() => window.open("https://pawan.live")}
                  fontSize="13px"
                >
                  Ver Projeto
                </Button>
                <Button
                  ml="12px"
                  size="sm"
                  mt={5}
                  backgroundColor="#808080"
                  onClick={() => window.open("https://pawan.live")}
                  fontSize="13px"
                >
                  <Text mr="5px">Repositório</Text>
                  {<FaGithub fontSize="20px" />}
                </Button>
              </Flex>
            </CardBody>
          </Card>
          <Card w="270px" h="400px">
            <CardBody>
              <Image
                src="/project.jpeg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Text
                textAlign="center"
                fontSize="20px"
                mt="10px"
                mb="5px"
                color="#2B6CB0"
              >
                Api-typscript-next
              </Text>
              <Text fontSize="13px">
                Descrição: Sistema de Gerenciamento de estoque.
              </Text>
              <Text fontSize="13px" mt="10px" mb="5px">
                Tecnologias: Typscript,NextJS, ChakraUI
              </Text>
              <Flex direction="row">
                <Button
                  size="sm"
                  mt={5}
                  colorScheme="blue"
                  onClick={() => window.open("https://pawan.live")}
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
                      "https://github.com/FelipeRodrigues07/Inventory-Control-NextJS-ChakraUI"
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
      <Flex
        w="100%"
        justifyContent="center"
        mt={{ base: "30px", sm: "30px", md: "30px", lg: "30px" }}
      >
        <Button
          colorScheme="blue"
          onClick={() => window.open("https://pawan.live")}
          fontSize={{ base: "14px", sm: "17px", md: "17px", lg: "17px" }}
        >
          Ver mais projetos
        </Button>
      </Flex>
    </Flex>
  );
}

export default Project;
