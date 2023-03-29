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

        <Center w="full">
          <Grid w="full" gap={[1, 2]} gridTemplateColumns={{
            base: isOpen ? 'min(43vw, 400px) 1fr 0' : '1fr 1fr',
            md: isOpen ? 'min(33vw, 300px) 1fr 1fr' : '1fr 1fr',
          }}>
            {isOpen ? (
              <Flex
                bg="whiteAlpha.500" _dark={{ bg: "blackAlpha.500" }} w="full" h="full">
                <Stack  >
                  <StackItem>Document 1</StackItem>
                </Stack>
              </Flex>
            ) : null}

            <Textarea name="" id="" value={content} boxSize="fit-content" w="full" minHeight="container.sm" h="full" />

            <Box>
              {content}
            </Box>
          </Grid>
        </Center>
      </Box>
    </>

  );
}
