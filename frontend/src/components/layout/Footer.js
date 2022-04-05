import { Box, Container, Link, Stack, Text } from "@chakra-ui/react";
import Logo from "../UI/Logo";

export default function SmallCentered() {
    return (
        <Box
            mt={7}
            // pos={"absolute"}
            bottom="0"
            pb={4}
            // style={{ position: "relative" }}
            // bg={useColorModeValue("gray.50", "gray.900")}
            // color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                spacing={4}
                justify={"center"}
                align={"center"}
            >
                <Logo />
            </Container>

            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "center" }}
                align={{ base: "center", md: "center" }}
            >
                <Text>
                    © 2022 Travl App by{" "}
                    <Link href="https://github.com/ryanjgani" isExternal>
                        Ryan Gani
                    </Link>{" "}
                </Text>
            </Container>
        </Box>
    );
}
