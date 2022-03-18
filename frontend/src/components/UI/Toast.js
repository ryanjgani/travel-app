import { Button, useToast } from "@chakra-ui/react";

const ToastButton = (props) => {
    const toast = useToast();
    return (
        <Button
            onClick={() =>
                toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    // status: 'success',
                    duration: 1000,
                    isClosable: true,
                    position: "top",
                    variant: "subtle",
                })
            }
        >
            {props.children}
        </Button>
    );
};
export default ToastButton;
