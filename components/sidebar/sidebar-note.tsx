import { ActionType, AppContext } from '@/store/AppContext';
import { convertTimestamp } from '@/utils/convert-timestamp-human';
import { Text, ListItem, Button, Show, Grid, Stack, Tooltip, IconButton, useToast, Flex, Box, HStack, Center } from '@chakra-ui/react'
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

  return (
    <ListItem overflowX="hidden">
      <Button variant="ghost" w="full" rounded="none" h="full" title={title} onClick={handleOnClickSetActiveNote}>
        <Grid
          gridTemplateColumns="20px 1fr"
          pos="relative"
          overflowX="auto"
          w="full"
          gap="0"
          alignItems="center"
          px="1"
        >
          <Center stroke="gray.300"><DocumentIcon aria-hidden="true" /></Center>
          <Grid ml="4" textAlign="start" py="1">
            <Show above="sm">
              <Box opacity="0.5" w="fit" fontSize="xs" lineHeight="none">
                {convertTimestamp(createdAt)}
              </Box>

            </Show>
            <Box w="min" color={activeNote?.nanoid === nanoid ? "orange.400" : ""}>
              {title}
            </Box>
          </Grid>
        </Grid>
      </Button>
    </ListItem>
  )
}
