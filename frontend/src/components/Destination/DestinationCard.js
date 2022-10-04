import React, { useEffect, useState } from "react";
import {
    Image,
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const DestinationCard = (props) => {
    const [weather, setWeather] = useState({ value: 0, desc: "" });
    const { title, location, likes, coordinates, image, id } = props;

    const APIkey = "bfb8608d2a8ed9f4e128ed8397ce8a8c";
    useEffect(() => {
        const getWeather = async () => {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[1]}&lon=${coordinates[0]}&appid=${APIkey}`
            );
            setWeather({
                value: Math.round(res.data.main.temp - 273.15),
                desc: res.data.weather[0].description,
            });
        };
        getWeather();
    }, [coordinates]);

    return (
        <motion.div
            initial={{ y: 250, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "tween" }}
            whileHover={{ y: 10 }}
        >
            <Link
                rounded={"md"}
                _hover={{
                    textDecoration: "none",
                    // bg: useColorModeValue("gray.200", "gray.700"),
                }}
                as={ReactLink}
                to={`/destinations/${id}`}
            >
                <Center py={6}>
                    <Box
                        maxW={"445px"}
                        w={"full"}
                        maxH={"full"}
                        bg={useColorModeValue("white", "gray.900")}
                        boxShadow={"2xl"}
                        rounded={"md"}
                        p={6}
                        overflow={"hidden"}
                    >
                        <Box
                            h={"full"}
                            // mt={-6}
                            // mx={-6}
                            mb={5}
                            // pos={"relative"}
                        >
                            <Image
                                borderRadius="base"
                                src={image}
                                layout={"fill"}
                            />
                        </Box>
                        <Stack mb={5}>
                            <Text
                                color={"green.500"}
                                textTransform={"uppercase"}
                                fontWeight={800}
                                fontSize={"sm"}
                                letterSpacing={1.1}
                            >
                                {/* <TiWeatherPartlySunny /> */}
                                {weather.desc.toLocaleUpperCase()}
                            </Text>
                            <Heading
                                color={useColorModeValue("gray.700", "white")}
                                fontSize={"2xl"}
                                fontFamily={"body"}
                            >
                                {title}
                            </Heading>
                            <Text color={"gray.500"}>
                                {location.city === undefined
                                    ? location
                                    : `${location.city}, ${location.country}`}
                            </Text>
                        </Stack>
                        {/* <Link
                        px={2}
                        py={1}
                        rounded={"md"}
                        _hover={{
                            textDecoration: "none",
                            // bg: useColorModeValue("gray.200", "gray.700"),
                        }}
                        as={ReactLink}
                        to={`/destinations/${id}`}
                    >
                        <Button colorScheme="blue">View</Button>
                    </Link> */}
                    </Box>
                </Center>
            </Link>
        </motion.div>
    );
};

export default DestinationCard;
