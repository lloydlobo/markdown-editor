import { Button, IconButton, VisuallyHidden } from "@chakra-ui/react";
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
      <IconButton
        aria-label="Menu toggle button"
        onClick={handleToggleSidebar}
        h="full"
        icon={isOpenMenu ? <CloseIcon /> : <HamburgerMenuIcon />}
      />
    </>
  );
}
