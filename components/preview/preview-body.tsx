/**
 * This component renders the preview of a Markdown body.
 * If there is no active note, it renders a "Create new" button instead.
 */
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { ActionType, AppContext } from '@/store/AppContext';
import { useColorModeValue } from '@chakra-ui/system';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';
import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light';
import { Box, Button, Center, Stack } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';
import { CustomLink } from '@/components/common/custom-link';
import { getTimestamp } from '@/utils/get-timestamp';
import { INote } from '@/types/inote';
import { nanoid } from 'nanoid';
import React, { useContext } from 'react';

export default function PreviewBody() {
  const { state, dispatch } = useContext(AppContext);
  const { activeNote, isPreview } = state;

  const syntaxStyleTheme = useColorModeValue(oneLight, oneDark);
  /**
   * This component renders the preview of a Markdown body.
   * If there is no active note, it renders a "Create new" button instead.
   */
  const addNewNote = () => {
    const newNote: INote = {
      id: state.notes ? state.notes.length + 1 : -1,
      nanoid: nanoid(),
      title: 'Untitled',
      content: '',
      createdAt: getTimestamp(),
    };
    dispatch({ type: ActionType.ADD_NOTE, note: newNote });
  };
  /**
   * This component renders the preview of a Markdown body.
   * If there is no active note, it renders a "Create new" button instead.
   */
  if (!activeNote) {
    return (
      <Center pos="relative" h="full">
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Button leftIcon={<PlusSquareIcon />} onClick={addNewNote}>
            Create new
          </Button>
        </Box>
      </Center>
    );
  }
  return (
    <Box
      className="preview-markdown"
      w="full"
      maxWidth={{ md: isPreview ? '70ch' : '50vw' }}
      marginInline={{ md: 'auto' }}
      p={{ base: "4", md: "6" }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]} // remark plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
        components={{
          a: CustomLink,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                style={syntaxStyleTheme}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {activeNote?.content || ''}
      </ReactMarkdown>
    </Box>
  );
}

