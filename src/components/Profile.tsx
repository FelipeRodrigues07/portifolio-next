import {
  Button,
  Card,
  CardBody,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CgWebsite } from "react-icons/cg";
import { BsDatabase } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import React from "react";

function Profile() {
  return (
    <Flex direction="column">
      <Flex
        w="100%"
        justifyContent="center"
        mt={{ base: "70px", sm: "70px", md: "100px", lg: "150px" }}
      >
        <Text fontSize={{ base: "22px", sm: "40px", md: "50px", lg: "30px" }}>
          Tecnologias e Habilidades
        </Text>
      </Flex>
      <Flex justifyContent="center" mt="40px">
        <SimpleGrid
          columnGap="35px"
          rowGap="20px"
          columns={[1, 2, 2, 3]}
          w="100"
        >
          <Card w="270px">
            <CardBody>
              <IconButton
                ml="100px"
                colorScheme="blue"
                icon={<CgWebsite />}
                isRound={true}
                aria-label="front end"
              ></IconButton>
              <Text textAlign="center" fontSize="20px" mt="10px" mb="5px">
                Front end
              </Text>
              <Text fontSize="13px">
                Desenvolvimento de sites responsivos e interativos utilizando
                tecnologias modernas como React e Next.js, juntamente com
                bibliotecas populares como Tailwind, ChakraUI e Styled
                Components.
              </Text>
            </CardBody>
          </Card>
          <Card w="270px">
            <CardBody>
              <IconButton
                colorScheme="blue"
                icon={<BsDatabase />}
                isRound={true}
                aria-label="backend"
                ml="100px"
              ></IconButton>
              <Text textAlign="center" fontSize="20px" mt="10px" mb="5px">
                Back end
              </Text>
              <Text fontSize="13px">
                Desenvolvimento de soluções no lado do servidor com Node.js e o
                framework Next.js, utilizo abordagens do Desenvolvimento
                Orientado a Testes e arquitetura limpa para criar APIs
                eficientes e escaláveis.
              </Text>
            </CardBody>
          </Card>
          <Card w="270px">
            <CardBody>
              <IconButton
                ml="95px"
                colorScheme="blue"
                icon={<FaMobileAlt />}
                isRound={true}
                aria-label="mobile"
              ></IconButton>
              <Text textAlign="center" fontSize="20px" mt="10px" mb="5px">
                Mobile
              </Text>
              <Text fontSize="13px">
                Desenvolvimento de apps, onde utilizo React Native para criar
                aplicativos móveis nativos. Com essa tecnologia, posso construir
                aplicativos atraentes e funcionais para dispositivos móveis com
                alta eficiência.
              </Text>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Profile;
