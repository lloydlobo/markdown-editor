import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import {
  Box,
  Flex,
  Text,
  chakra,
  Grid,
  Heading,
  ListItem,
  List,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AppContext } from "@/store/AppContext";

export default function AboutPage() {
  const { state } = useContext(AppContext);
  const { isPreview } = state;

  return (
    <>
      <title>About | Markdown Editor</title>
      <Grid
        className={`wrapper ${isPreview ? "preview-open" : "preview-closed"}`}
      >
        <Sidebar />
        <Box>
          <Navbar />
          <chakra.main>
            <LandingPage />
          </chakra.main>
        </Box>
      </Grid>
    </>
  );
}

const LandingPage = () => {
  const brandName = "Markdown Editor";
  return (
    <Box px={{ base: "4", md: "10" }} py={{ base: "8", md: "16" }}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "center", md: "flex-start" }}
        maxW={{ md: "6xl" }}
        mx="auto"
      >
        <Box>
          <Heading as="h1" size="2xl" mb="6">
            {brandName}
          </Heading>
          <Text fontSize="xl" mb="6">
            {brandName} lets you create and edit Markdown notes using React and
            Next.js for seamless server-side rendering and routing. The Chakra
            UI library provides a sleek and intuitive user interface.
          </Text>
          <Text fontSize="xl">
            Our app offers a customizable and user-friendly note-taking
            experience with a toggleable light and dark theme. Enjoy practical
            features like local storage, copy markdown button, and
            human-readable note creation dates.
          </Text>
        </Box>
        <Box ml={{ md: "8" }}>
          <Heading as="h2" size="lg" mb="6">
            Overview
          </Heading>
          <Text mb="4">
            {brandName}&apos;s custom Chakra UI theme offers a visually
            appealing and modern interface, with a sidebar displaying a list of
            notes and an editor and preview section for note-taking. The app
            uses the browser&apos;s localStorage API to store notes, enabling users
            to access their notes even when offline.
          </Text>
          <Heading as="h3" size="md" mb="2">
            Features
          </Heading>
          <List listStylePosition="inside" listStyleType="circle">
            <ListItem mb="2">Sidebar with a list of notes</ListItem>
            <ListItem mb="2">
              Editor and preview sections for note-taking
            </ListItem>
            <ListItem mb="2">
              Custom Chakra UI theme with light and dark mode
            </ListItem>
            <ListItem mb="2">LocalStorage API for storing notes</ListItem>
            <ListItem mb="2">Ability to create and delete notes</ListItem>
            <ListItem mb="2">
              Markdown formatting in the editor section
            </ListItem>
            <ListItem mb="2">Copy markdown button</ListItem>
            <ListItem mb="2">User action messages</ListItem>
            <ListItem mb="2">
              Tooltip with delay on title and copy markdown button
            </ListItem>
            <ListItem mb="2">Human-readable note creation dates</ListItem>
          </List>
        </Box>
      </Flex>
    </Box>
  );
};
