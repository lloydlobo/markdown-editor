import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export function SidebarThemeToggle() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      aria-label="toggle theme"
      rounded="full"
      size="xs"
      marginInline="auto"
      w="1"
      onClick={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    />
  );
}

