import { Link } from "@chakra-ui/next-js";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ICreator, IProject } from "public/catalog/loader";

export function ProjectCard(props: { creator: ICreator; project: IProject }) {
  return (
    <>
      <Card
        maxW="sm"
        borderRadius="lg"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        // shadow="md"
      >
        <CardBody p="0" borderRadius="lg" display="flex" flexDirection="column">
          <Box
            position="relative"
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
            overflow="hidden"
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                background: `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%) center center / cover no-repeat, url(${props.project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                "&:after": {
                  backdropFilter: "blur(100px)",
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                },
              }}
            />

            {props.project.image && (
              <Link
                href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}`}
              >
                <AspectRatio ratio={630 / 500}>
                  <Image
                    src={props.project.image}
                    alt={props.project.data?.name || ""}
                    objectFit="cover"
                    // width="100%"
                    // height="350px"
                    // objectFit="contain"
                    objectPosition="center"
                    borderBottom="1px"
                    borderColor="gray.200"
                    position="relative"
                    margin="0px auto"
                    display="block"
                  />
                </AspectRatio>
              </Link>
            )}
          </Box>

          <Stack my="6" spacing="3" px="4" display="flex" flex="1 0 auto">
            <Heading
              size="md"
              variant="link"
              as={Link}
              href={`/creators/${props.creator.creatorSlug}/projects/${props.project.projectSlug}`}
            >
              {props.project.data?.name}
            </Heading>
            <Text>{props.project.data?.description}</Text>
            <Box marginTop="auto !important">
              <Divider marginTop="4" marginBottom="4" />
              <Button
                as={Link}
                _hover={{ textDecoration: "none" }}
                href={`/creators/${props.creator.creatorSlug}`}
                variant="link"
              >
                {props.creator.data?.name}
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
