import { Container, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'

function Contactpage() {
  (
    <Container>
    <Heading>Contact</Heading>
    <FormControl>
      <FormLabel  > Name </FormLabel>
      <Input className="text-white  " type="text" name="name" />

    </FormControl>
    </Container>

  )
  
}

export default Contactpage
