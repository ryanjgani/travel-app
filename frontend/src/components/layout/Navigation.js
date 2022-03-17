import { ReactNode, useState } from "react";
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
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import axios from "axios";

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
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
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
        window.open("http://localhost:8000/auth/logout", "_self");
    };

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
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
                        <Box>Logo</Box>
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
                    {user ? (
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
                                        size={"sm"}
                                        src={user.photos[0].value}
                                    />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>My Account</MenuItem>
                                    <MenuDivider />
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
                                    color={"white"}
                                    bg={"pink.400"}
                                    _hover={{
                                        bg: "pink.300",
                                    }}
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </HStack>
                    )}
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
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
        </>
    );
};

export default Navigation;
