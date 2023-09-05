import {
  Card,
  CardBody,
  Flex,
  Text,
  Button,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsSend } from "react-icons/bs";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

function Social() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex direction="column">
      <Flex
        justifyContent="center"
        mt={{ base: "80px", sm: "50px", md: "80px", lg: "150px" }}
      >
        <Card
          w="880px"
          h={{ base: "300px", sm: "300px", md: "250px", lg: "250" }}
          ml="35px"
          mr="35px"
        >
          <CardBody>
            <Text
              fontSize={{ base: "18px", sm: "25px", md: "25px", lg: "25px" }}
              mt="10px"
              mb="5px"
            >
              VAMOS CONSTRUIR ALGO JUNTOS?
            </Text>
            <Text fontSize="13px" mt="10px" mb="5px">
              Se você tem algum projeto em mente, ou apenas quer bater um papo,
              sinta-se à vontade para me enviar uma mensagem.
            </Text>
            <Button
              size="sm"
              mt={5}
              colorScheme="blue"
              onClick={() => window.open("https://pawan.live")}
              fontSize="13px"
            >
              <Text mr="5px">Fale Comigo</Text>
              {<BsSend fontSize="20px" />}
            </Button>
            <Flex boxShadow=" 0 1px 0 #fff" w="100%" h="15px"></Flex>
            <Flex direction="row" justifyContent="center" mt="12px">
              <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
              <IconButton
                ml={2}
                icon={<FaInstagram />}
                isRound="true"
              ></IconButton>
              <IconButton
                ml={2}
                icon={<FaGithub />}
                isRound="true"
              ></IconButton>
              <IconButton
                ml={2}
                icon={<AiOutlineMail />}
                isRound="true"
                onClick={() =>
                  window.open(
                    "mailto:feliperodriguesrs07@outlook.com?subject=&body=Ol%C3%A1%20Felipe%2C"
                  )
                }
              ></IconButton>
              <IconButton
                ml={2}
                icon={<IoLogoWhatsapp />}
                isRound="true"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5564999094004&text=Ol%C3%A1%20Felipe,%20tudo%20bem?"
                  )
                }
              ></IconButton>
            </Flex>
          </CardBody>
        </Card>
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

export default Social;
