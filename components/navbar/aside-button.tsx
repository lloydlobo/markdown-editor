import {
  AspectRatio,
  Button,
  IconButton,
  VisuallyHidden,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CloseIcon, HamburgerMenuIcon } from "../icons/icons";

export default function AsideButton() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpenMenu((currState): boolean => !currState);
    document.getElementsByTagName("body")[0].classList.toggle("menu-closed");
  };

  return (
    <>
      <VisuallyHidden>
        {isOpenMenu ? "close sidebar menu" : "open sidebar menu"}
      </VisuallyHidden>

      <AspectRatio ratio={1}>
        <IconButton
          aria-label="Menu toggle button"
          onClick={handleToggleSidebar}
          h="full"
          // bg="gray.50"
          rounded="none"
          // _hover={{ bg: "orange.400" }}
          // _dark={{
          bg="gray.600"
          _hover={{ bg: "orange.400" }}
          // }}
          icon={isOpenMenu ? <CloseIcon /> : <HamburgerMenuIcon />}
        />
      </AspectRatio>
    </>
  );
}
