import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    Stack,
    Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import Logo from "../UI/Logo";

const Links = [
    { title: "Home", url: "/" },
    { title: "Dashboard", url: "/destinations" },
    { title: "Favorites", url: "/favorites" },
];

const NavLink = ({ children, to }) => {
    return (
        <Link
            px={2}
            py={1}
            _focus="true"
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: "#1EB489",
                color: "white",
            }}
            as={ReactLink}
            to={to}
        >
            {children}
        </Link>
    );
};

const Navigation = ({ user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const logoutHandler = async () => {
        localStorage.clear();
        window.open(
            `${process.env.REACT_APP_SERVER_URL}/auth/logout`,
            // "https://travel-app-mern.herokuapp.com/auth/logout",
            "_self"
        );
    };

    return (
        <>
            <HStack px={4} pt={1}>
                <Container maxW="container.lg">
                    <Flex
                        h={16}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        <IconButton
                            size={"md"}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={"Open Menu"}
                            display={{ md: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems={"center"}>
                            <Logo />
                            <HStack
                                as={"nav"}
                                spacing={4}
                                display={{ base: "none", md: "flex" }}
                            >
                                {Links.map((link) => (
                                    <NavLink key={link.title} to={link.url}>
                                        {link.title}
                                    </NavLink>
                                ))}
                            </HStack>
                        </HStack>
                    </Flex>

                    {isOpen ? (
                        <Box pb={4} display={{ md: "none" }}>
                            <Stack as={"nav"} spacing={4}>
                                {Links.map((link) => (
                                    <NavLink key={link.title} to={link.url}>
                                        {link.title}
                                    </NavLink>
                                ))}
                            </Stack>
                        </Box>
                    ) : null}
                </Container>
                {user.photo ? (
                    <Flex alignItems={"center"}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    bg="green.300"
                                    size={"sm"}
                                    src={user.photo}
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={logoutHandler}>
                                    Log out
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                ) : (
                    <HStack
                        flex={{ base: 1, md: 0 }}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                    >
                        <Link
                            as={ReactLink}
                            to="/login"
                            _hover={{
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                display={{
                                    base: "none",
                                    md: "inline-flex",
                                }}
                                fontSize={"sm"}
                                fontWeight={600}
                                color={"black"}
                                bg={"#FFD365"}
                                _hover={{
                                    bg: "#f8dfa0",
                                }}
                            >
                                Sign In
                            </Button>
                        </Link>
                    </HStack>
                )}
            </HStack>
        </>
    );
};

export default Navigation;
