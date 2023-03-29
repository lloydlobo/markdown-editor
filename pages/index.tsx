import Editor from "@/components/editor/editor";
import Navbar from "@/components/navbar/navbar";
import {
  Textarea,
  chakra,
  Box,
  Center,
  Grid,
  Flex,
  Stack,
  StackItem,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const content = "# Hello world";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Grid className="wrapper" autoFlow="row" maxH="100vh" h="full">
        <Navbar />

        <Flex justify="space-between" align="center">
          <Flex align="center" gap="2">
            <Box>
              <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
            </Box>
            <chakra.div
              textStyle="h4"
              fontWeight="bold"
              letterSpacing="wider"
              textTransform="uppercase"
            >
              markdown
            </chakra.div>
          </Flex>

          <Flex gap={[2, 4]}>
            <Button rounded="md">Delete</Button>
            <Button rounded="md">Save changes</Button>
          </Flex>
        </Flex>

        <Flex gap={[1, 2]} align="center">
          {isOpen ? (
            <Flex
              bg="whiteAlpha.500"
              _dark={{ bg: "blackAlpha.500" }}
              w="fit-content"
              h="full"
            >
              <Stack>
                <StackItem>Document 1</StackItem>
              </Stack>
            </Flex>
          ) : null}

          <Editor />
        </Flex>
      </Grid>
    </>
  );
}
