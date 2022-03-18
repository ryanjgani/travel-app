import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    HStack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginCard = () => {
    const [isSignup, setIsSignup] = useState(false);
    const navigate = useNavigate();
    const initialState = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialState);

    const switchMode = () => {
        setFormData(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

    const onChangeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Sign In/Out Handler
    const googleSignInHandler = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    };

    const JWTsignInHandler = () => {
        if (isSignup) {
            //sign up

            navigate("/");
        } else {
            //sign in

            navigate("/");
        }
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        to explore all of our amazing{" "}
                        <Link color={"blue.400"}>destinations</Link> 🌎
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        {isSignup && (
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName" isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" />
                                    </FormControl>
                                </Box>
                            </HStack>
                        )}

                        <FormControl
                            id="email"
                            onChange={onChangeHandler}
                            isRequired
                        >
                            <FormLabel>Email address</FormLabel>
                            <Input name="email" type="email" />
                        </FormControl>

                        <FormControl
                            id="password"
                            onChange={onChangeHandler}
                            isRequired
                        >
                            <FormLabel>Password</FormLabel>
                            <Input name="password" type="password" />
                        </FormControl>

                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                            >
                                <Checkbox>Remember me</Checkbox>
                                <Link color={"blue.400"}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                onClick={JWTsignInHandler}
                            >
                                {isSignup ? "Sign Up" : "Sign In"}
                            </Button>

                            <Button onClick={switchMode}>
                                {isSignup
                                    ? "Already have an account? Sign in"
                                    : "Don't have an account? Sign Up"}
                            </Button>

                            <Button
                                // bg={"blue.400"}
                                // color={"white"}
                                // _hover={{
                                //     bg: "blue.500",
                                // }}
                                onClick={googleSignInHandler}
                                variant="outline"
                            >
                                {isSignup ? "Sign Up" : "Sign In"} with
                                <Box ml={1}>
                                    <FcGoogle />
                                </Box>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
export default LoginCard;
