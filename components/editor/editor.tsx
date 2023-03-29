import React from 'react'

import { Box } from '@chakra-ui/react'

import Markdown from '@/components/markdown/markdown'
import Preview from '@/components/preview/preview'

export default function Editor() {
  return (
    <Box id="editor">
      <Markdown />
      <Preview />
    </Box>
  )
}

