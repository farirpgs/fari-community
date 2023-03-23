"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorMode,
} from "@chakra-ui/react";

export function Navbar() {
  const colorModeManager = useColorMode();
  return (
    <Box>
      <Container background="" height="4rem" maxWidth="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={4}>
            <Box fontWeight="bold" mr="4">
              <Link href="/">Fari Community</Link>
            </Box>
            <Menu>
              <MenuButton
                variant="link"
                cursor="pointer"
                minW={0}
                as={Button}
                _hover={{
                  textDecoration: "none",
                }}
              >
                Resources
              </MenuButton>
              <MenuList alignItems="center">
                {/* <MenuDivider /> */}
                {/* <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem> */}
              </MenuList>
            </Menu>
          </Stack>

          <Flex alignItems="center">
            <Stack direction="row" spacing={4}>
              <Button onClick={colorModeManager.toggleColorMode}>
                {colorModeManager.colorMode === "light" ? (
                  <MoonIcon />
                ) : (
                  <SunIcon />
                )}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Container>
      <Divider />
    </Box>
  );
}
