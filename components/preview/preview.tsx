import React from 'react'

import { Box } from '@chakra-ui/react';

import PreviewHeader from '@/components/preview/preview-header';
import PreviewBody from '@/components/preview/preview-body';

export default function Preview() {
  return (
    <Box id="preview">
      <PreviewHeader />
      <PreviewBody />
    </Box>
  )
}

