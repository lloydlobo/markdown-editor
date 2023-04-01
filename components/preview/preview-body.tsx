import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ActionType, AppContext } from "@/store/AppContext";
import React, { useContext, useState } from "react";
import { useColorMode, useColorModeValue } from "@chakra-ui/system";


import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light";

import {
  Box,
  Button,
  Stack,
  Center,
  AbsoluteCenter,
  Table,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { INote } from "@/types/inote";
import { nanoid } from "nanoid";
import { getTimestamp } from "@/utils/get-timestamp";
import { CustomLink } from "@/components/common/custom-link";
import remarkGfm from "remark-gfm";
import { mode } from "@chakra-ui/theme-tools";

export default function PreviewBody() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, isPreview } = state;

  const syntaxStyleTheme = useColorModeValue(oneLight, oneDark);

  const addNewNote = () => {
    const newNote: INote = {
      id: state.notes ? state.notes?.length + 1 : -1,
      nanoid: nanoid(),
      title: "Untitled",
      content: "",
      createdAt: getTimestamp(),
    };
    dispatch({ type: ActionType.ADD_NOTE, note: newNote });
  };

  if (!activeNote) {
    return (
      <Center pos="relative" h="full">
        <AbsoluteCenter>
          <Box>
            <Button leftIcon={<PlusSquareIcon />} onClick={addNewNote}>
              Create new
            </Button>
          </Box>
        </AbsoluteCenter>
      </Center>
    );
  }

  return (
    <Box
      className="preview-markdown"
      w="full"
      maxWidth={{ md: isPreview ? "75vw" : "50vw" }}
      marginInline={{ md: isPreview ? "auto" : "auto" }}
      p="6"
    >
      <Stack pb="12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // remark plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
          components={{
            a: CustomLink,
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              if (typeof props !== undefined) {
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                    style={syntaxStyleTheme}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}

        >
          {activeNote?.content ? activeNote.content : ""}
        </ReactMarkdown>
      </Stack>
    </Box>
  );
}
