import { ActionType, AppContext } from '@/store/AppContext';
import { Text, ListItem, Button, Show, Grid, Stack, Tooltip, IconButton, useToast, Flex, Box, HStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { DocumentIcon } from '../icons/icons';

type SidebarNoteProps = {
  nanoid: string, createdAt: string, title: string, id: number,
}

// nanoid={note.nanoid} createdAt={note.createdAt} title={item.title}
export default function SidebarNote({ nanoid, createdAt, title, id }: SidebarNoteProps) {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, notes } = state;
  const toast = useToast();

  function handleOnClickSetActiveNote() {
    const currNote = notes?.find((note) => note.nanoid === nanoid);
    if (typeof currNote !== 'undefined') {
      dispatch({ type: ActionType.SET_ACTIVE_NOTE, note: currNote })
    }
  }

  function handleOnClickCopyMarkdown() {
    let contentToCopy = activeNote?.content.trim();
    if (typeof contentToCopy !== "undefined" && contentToCopy.length > 0) {
      try {
        navigator.clipboard.writeText(contentToCopy);
        toast({
          title: "Copied markdown content",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (err) {
        toast({
          title: "No content to copy",
          description: JSON.stringify(err),
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "No content to copy",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <ListItem overflowX="hidden">
      <Button variant="ghost" w="full" rounded="none" h="full" title={title} onClick={handleOnClickSetActiveNote}>
        <Grid
          gridTemplateColumns="20px 1fr"
          pos="relative"
          overflowX="auto"
          w="full"
          gap="2"
          alignItems="center"
        >
          <Tooltip
          // label={ activeNote ? `copy contents of ${activeNote.title.trim()}.md` : "" }
          >
            <IconButton
              variant="ghost"
              size="sm"
              stroke="gray.300"
              icon={<DocumentIcon aria-hidden="true" />}
              aria-label="copy markdown"
              onClick={handleOnClickCopyMarkdown}
            />
          </Tooltip>
          <Grid ml="4" textAlign="start" py="1">
            <Show above="sm"><Box opacity="0.5" w="fit" fontSize="xs" lineHeight="none">{createdAt}</Box></Show>
            <Box w="min" color={activeNote?.nanoid === nanoid ? "orange.400" : ""}>
              {title}
            </Box>
          </Grid>
        </Grid>
      </Button>
    </ListItem>
  )
}

