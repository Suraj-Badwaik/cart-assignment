import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
  Stack,
  Wrap,
  WrapItem,
  Avatar,
  Box,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Stack direction="row" spacing={4} align="center">
        <Button color="black" colorScheme="teal" variant="ghost">
          <Link to="/">Home</Link>
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button color="black" colorScheme="teal" variant="ghost">
          <Link to="/about">About</Link>
        </Button>
      </Stack>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="none">
          Products
        </MenuButton>
        <MenuList>
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Fluffybuns the destroyer"
              mr="12px"
            />
            <span>
              <Link to="/women">Women</Link>
            </span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://www.fashionhombre.com/wp-content/uploads/2019/08/Dashing-Formal-Outfit-Ideas-For-Men-2-3.jpg"
              alt="Simon the pensive"
              mr="12px"
            />
            <span>
              <Link to="/Men">Men</Link>
            </span>
          </MenuItem>
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src="https://images.meesho.com/images/products/44009963/kxwus_512.jpg"
              alt="Simon the pensive"
              mr="12px"
            />
            <span>
              <Link to="/shoes">Shoes</Link>
            </span>
          </MenuItem>
        </MenuList>
      </Menu>
      <Stack direction="row" spacing={4} align="center">
        <Button color="black" colorScheme="teal" variant="ghost">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </Stack>
      <Stack direction="row" spacing={4} align="center">
        <Button color="black" colorScheme="teal" variant="ghost">
          <Link to="/faq">FAQ</Link>
        </Button>
      </Stack>
        <Box boxSize="50px" cursor="pointer">
          <Image  src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" />
        </Box>
    </div>
  );
};

export default Navbar;
