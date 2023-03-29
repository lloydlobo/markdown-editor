import Editor from "@/components/editor/editor";
import { Textarea, chakra, Box, Center, Grid, Flex, Stack, StackItem, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const content = "# Hello world";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box h="full">

        <Flex justify="space-between" align="center">
          <Flex align="center" gap="2">
            <Box><Button onClick={() => setIsOpen(!isOpen)}>Menu</Button></Box>
            <chakra.div textStyle="h4" fontWeight="bold" letterSpacing="wider" textTransform="uppercase">markdown</chakra.div>
          </Flex>

          <Flex gap={[2, 4]}>
            <Button rounded='md'>Delete</Button>
            <Button rounded='md'>Save changes</Button>
          </Flex>
        </Flex>

        <Flex
          gap={[1, 2]}
        >
          {isOpen ? (
            <Flex
              bg="whiteAlpha.500" _dark={{ bg: "blackAlpha.500" }} w="fit-content" h="full">
              <Stack  >
                <StackItem>Document 1</StackItem>
              </Stack>
            </Flex>
          ) : null}

          <Stack><Editor /></Stack>
        </Flex>
      </Box>
    </>

  );
}
