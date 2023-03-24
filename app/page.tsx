"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Page() {
  const textGradient = useColorModeValue(
    "linear(to-l, brand.100,brand.800)",
    "linear(to-l, brand.50,brand.10)"
  );

  return (
    <Container
      maxWidth="container.xl"
      pt="8rem"
      className="mouse-cursor-gradient-tracking"
    >
      <Flex justifyContent="center" textAlign="center" mb="3rem">
        <Heading size="4xl" maxW="2xl" margin="0 auto">
          Free TTRPG Resources on{" "}
          <Box
            as="span"
            bgGradient={textGradient}
            // dark mode

            bgClip="text"
          >
            <br />
            Fari Community
          </Box>
        </Heading>
      </Flex>
      {/* add two call to action buttons */}
      <Flex justifyContent="center">
        <Stack direction="row" spacing={4}>
          <Button
            colorScheme="brand"
            size="lg"
            rightIcon={<ArrowForwardIcon />}
          >
            Browse Now
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
}

// function ShopPageSearch() {
//   const [search, setSearch] = useState("");

//   const router = useRouter();
//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         router.push(AppLinksFactory.makeSearchPage(search));
//       }}
//     >
//       {/* <TextField
//         fullWidth
//         placeholder="Search..."
//         value={search}
//         InputProps={{
//           sx: {
//             fontSize: "1.5rem",
//             borderRadius: "8px",
//           },
//           startAdornment: (
//             <InputAdornment position="start">
//               <IconButton type="submit">
//                 <SearchIcon
//                   sx={{
//                     width: "2.5rem",
//                     height: "2.5rem",
//                   }}
//                 />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//         onChange={(event) => {
//           setSearch(event.target.value);
//         }}
//       /> */}
//     </form>
//   );
// }
