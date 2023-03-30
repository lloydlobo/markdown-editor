import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

type ButtonOrangeProps = {
  children: React.ReactNode;
  props: ButtonProps;
};

export function ButtonOrange({ children, props }: ButtonOrangeProps) {
  return (
    <Button
      {...props}
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      fontSize="14px"
      fontWeight="semibold"
      bg="orange.400"
      color="gray.50"
      _hover={{ bg: "orange.500" }}
      _active={{
        bg: "orange.300",
        transform: "scale(0.98)",
        // borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    // variant="solid" borderColor="#ccd0d5"
    // as="button" height="24px"
    // border="1px" px="8px"
    // borderRadius="2px"
    >
      {children}
    </Button>
  );
}
