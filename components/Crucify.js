import React from 'react'
import { Box } from '@chakra-ui/react'

const Video = () => {
  return (
    <Box>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/s8U3lqWMLpM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
  )
}

export default Video