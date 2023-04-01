import { ActionType, AppContext } from "@/store/AppContext";
import {
  Box,
  Button,
  VisuallyHidden,
  Textarea,
  Center,
  AbsoluteCenter,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { INote } from "@/types/inote";
import { nanoid } from "nanoid";
import { getTimestamp } from "@/utils/get-timestamp";
import { mode } from "@chakra-ui/theme-tools";

import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export default function MarkdownBody() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, isCodemirror } = state;

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
        <Box
          fontFamily={"var(--chakra-fonts-code)"}
          maxW={{ base: "100vw", md: "50vw" }}
        >
          <CodeMirror
            className="markdown-codemirror"
            id="markdownCodemirror"
            data-testid="markdownCodemirror"
            placeholder="Markdown is awesome!!"
            height="calc(100vh - 80px)"
            theme={useColorModeValue("light", "dark")}
            value={activeNote?.content ? activeNote.content : ""}
            onChange={onChangeCodemirror}
            extensions={[
              markdown({
                base: markdownLanguage,
                codeLanguages: languages,
              }),
            ]}
          />
        </Box>
      ) : (
        <Textarea
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
          height="calc(100vh - 80px)"
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
