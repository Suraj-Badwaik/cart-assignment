import { Button, ButtonGroup, IconButton, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <div style={{'marginTop':'22%'}}>
    <Stack   backgroundColor="black" width="100%">
      <Stack marginLeft="2%" direction="row" spacing={12} align="center" marginBottom='3%'>
        <Button color="white" variant="link">
          About
        </Button>
        <Button color="white" variant="link">
          Careers
        </Button>
        <Button color="white" variant="link">
          Press and Media
        </Button>
        <Button color="white" variant="link">
          MyStore Plus
        </Button>
        <Button color="white" variant="link">
          Site Map
        </Button>
      </Stack>

      <Stack direction="row" color='white' gap='50px'>
        <Stack  marginLeft='50px'>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
        </Stack>
        <Stack>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
        </Stack>
        <Stack>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
        </Stack>
        <Stack>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
          <Text fontSize="xs">In love with React & Next</Text>
        </Stack>
      </Stack>

      <Stack justify="space-around" flexDirection="row" align="center">
        <Stack flexDirection="row">
          <ButtonGroup variant="ghost" margin="auto">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" filter="invert(100%)" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" filter="invert(100%)" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" filter="invert(100%)" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="white">
          &copy; {new Date().getFullYear()} Mystore.com, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Stack>
  </div>
);

export default Footer;
