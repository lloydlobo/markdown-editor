import { ActionType, AppContext } from "@/store/AppContext";
import {
  Box,
  Button,
  VisuallyHidden,
  Textarea,
  Center,
  AbsoluteCenter,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { INote } from "@/types/inote";
import { nanoid } from "nanoid";
import { getTimestamp } from "@/utils/get-timestamp";
import { mode } from "@chakra-ui/theme-tools";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { EditorView, ViewUpdate } from '@codemirror/view';
import { languages } from "@codemirror/language-data";

export default function MarkdownBody() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, isCodemirror } = state;

  const { colorMode } = useColorMode();
  const [theme, setTheme] = useState(colorMode);

  useEffect(() => {
    if (colorMode === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [colorMode, setTheme]);

  function addNewNote() {
    const newNote: INote = {
      id: state.notes ? state.notes?.length + 1 : -1,
      nanoid: nanoid(),
      title: "Untitled",
      content: "",
      createdAt: getTimestamp(),
    };
    dispatch({ type: ActionType.ADD_NOTE, note: newNote });
  }

  const onChangeCodemirror = React.useCallback(
    (value: string, viewUpdate: any) => {
      let active = activeNote;
      if (active) {
        dispatch({
          type: ActionType.UPDATE_MARKDOWN,
          note: { ...active, content: value },
        });
      }
    },
    [activeNote, dispatch]
  );

  function onChangeTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    let active = activeNote;
    if (active) {
      dispatch({
        type: ActionType.UPDATE_MARKDOWN,
        note: { ...active, content: e.target.value },
      });
    }
  }

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
    <>
      <VisuallyHidden>
        <label htmlFor="markdownEditor">Markdown editor</label>
      </VisuallyHidden>
      {isCodemirror ? (
        <Stack
          fontFamily={"var(--chakra-fonts-code)"}
          maxW={{ base: "100vw", md: "50vw" }}
          pb="12"
        >
          <CodeMirror
            className="markdown-codemirror"
            autoFocus={true}
            basicSetup={{
              lineNumbers: false,
              autocompletion: true,
            }}
            id="markdownCodemirror"
            data-testid="markdownCodemirror"
            placeholder="Markdown is awesome!!"
            height="max(86vh, calc(100vh - 120px))" // Else last line if overflows isn't visible.
            theme={theme}
            value={activeNote?.content ? activeNote.content : ""}
            onChange={onChangeCodemirror}
            extensions={[
              EditorView.lineWrapping, // https://discuss.codemirror.net/t/how-to-use-line-wrapping-in-codemirror-6/4924/2
              markdown({
                base: markdownLanguage,
                codeLanguages: languages,
              }),
            ]}
          />
        </Stack>
      ) : (
        <Textarea
          autoFocus={true}
          id="markdownTextarea"
          className="markdown-editor"
          data-testid="markdownTextArea"
          placeholder="Markdown is awesome!!"
          value={activeNote?.content ? activeNote.content : ""}
          onChange={onChangeTextarea}
          fontSize={["xs", "xs"]}
          boxSize={"full"}
          w="full"
          p="4"
          // height={{ base: "calc(100vh - 115px)", md: "calc(100vh - 90px)" }}
          rounded="none"
          borderColor="transparent"
          outlineColor="transparent"
          _hover={{ borderColor: mode("gray.200", "gray.50") }}
          _focusVisible={{ borderColor: mode("orange.200", "orange.100") }}
        />
      )}
    </>
  );
}
