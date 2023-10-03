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
import { FaInstagram, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

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
            lg: "200px",
            xl: "350",
          }}
        >
          <Card
            w="880px"
            h={{ base: "450px", sm: "500px", md: "500px", lg: "450px" }}
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
              >
                Meus Contatos
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
                Tem uma pergunta, deseja colaborar ou saber mais sobre algum
                serviço que ofereço? Entre em contato. Valorizo sua resposta e
                estou ansioso para trabalhar com você.
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
                  Telefone:
                </Text>
                <Text
                  fontSize={{
                    base: "13px",
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                  }}
                  ml="7px"
                >
                  +55 64 99909-4004
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
                  Email:
                </Text>
                <Text
                  fontSize={{
                    base: "10px",
                    sm: "20px",
                    md: "20px",
                    lg: "20px",
                  }}
                  ml="7px"
                  mt="3px"
                >
                  feliperodriguesrs07@outlook.com
                </Text>
              </Flex>

              <Flex boxShadow=" 0 1px 0 #fff" w="100%" h="15px"></Flex>
              <Flex direction="row" justifyContent="center" mt="12px">
                <Button
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5564999094004&text=Ol%C3%A1%20Felipe,%20tudo%20bem?"
                    )
                  }
                  fontSize="13px"
                >
                  <Text mr="5px">WhatsApp</Text>
                  {<RiWhatsappFill fontSize="20px" color="#26B03D" />}
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
                  onClick={() =>
                    window.open(
                      "mailto:feliperodriguesrs07@outlook.com?subject=&body=Ol%C3%A1%2C%20tudo%20bem%3F"
                    )
                  }
                  fontSize="13px"
                >
                  <Text mr="5px">Email</Text>
                  {<AiOutlineMail fontSize="20px" />}
                </Button>
              </Flex>
              <Flex direction="row" justifyContent="center" mt="12px">
                <Button
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  onClick={() =>
                    window.open("https://github.com/FelipeRodrigues07")
                  }
                  fontSize="13px"
                >
                  <Text mr="5px">GitHub</Text>
                  {<FaGithub fontSize="20px" />}
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
                  onClick={() =>
                    window.open("https://www.instagram.com/feliperodrigues497")
                  }
                  fontSize="13px"
                >
                  <Text mr="5px">Instagran</Text>
                  {<FaInstagram fontSize="20px" color="#F13164" />}
                </Button>
              </Flex>
              <Flex direction="row" justifyContent="center" mt="12px">
                <Button
                  size="md"
                  backgroundColor={isDark ? "#1A202C" : "#A8B4C2"}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/felipe-rodrigues-3182b7264"
                    )
                  }
                  fontSize="13px"
                >
                  <Text mr="5px">Linkedin</Text>
                  {<FaLinkedin fontSize="20px" color="#0A66C2" />}
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
                  onClick={() => window.open("https://t.me/+5564999094004")}
                  fontSize="13px"
                >
                  <Text mr="5px">Telegram</Text>
                  {<FaTelegram fontSize="20px" color="#20A0DB" />}
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
